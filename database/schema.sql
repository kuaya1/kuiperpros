-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis"; -- For geographic data

-- Enum types
CREATE TYPE user_role AS ENUM ('customer', 'technician', 'admin');
CREATE TYPE property_type AS ENUM ('residential', 'commercial');
CREATE TYPE roof_type AS ENUM ('shingle', 'tile', 'metal', 'flat', 'other');
CREATE TYPE kit_status AS ENUM ('have_kit', 'need_kit', 'not_sure');
CREATE TYPE quote_status AS ENUM ('pending', 'reviewed', 'assigned', 'completed', 'cancelled');
CREATE TYPE job_status AS ENUM ('available', 'assigned', 'in_progress', 'completed', 'cancelled');
CREATE TYPE technician_status AS ENUM ('pending', 'approved', 'suspended', 'rejected');
CREATE TYPE payment_status AS ENUM ('pending', 'processing', 'completed', 'failed', 'refunded');

-- Users table (base table for all user types)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    role user_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Customers table
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    stripe_customer_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Technicians table
CREATE TABLE technicians (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    company_name VARCHAR(255),
    business_license VARCHAR(100),
    insurance_number VARCHAR(100),
    status technician_status DEFAULT 'pending',
    service_radius_miles INTEGER DEFAULT 50,
    
    -- Address and location
    street_address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(2),
    zip_code VARCHAR(10),
    country VARCHAR(2) DEFAULT 'US',
    location GEOGRAPHY(POINT, 4326), -- PostGIS point for geographic queries
    
    -- Financial
    stripe_account_id VARCHAR(255),
    base_rate DECIMAL(10, 2),
    total_earnings DECIMAL(10, 2) DEFAULT 0,
    
    -- Stats
    jobs_completed INTEGER DEFAULT 0,
    average_rating DECIMAL(3, 2) DEFAULT 0,
    
    -- Documents
    license_document_url TEXT,
    insurance_document_url TEXT,
    certification_urls TEXT[], -- Array of certification URLs
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    approved_at TIMESTAMP WITH TIME ZONE,
    approved_by UUID REFERENCES users(id)
);

-- Service areas (zip codes technicians service)
CREATE TABLE technician_service_areas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    technician_id UUID REFERENCES technicians(id) ON DELETE CASCADE,
    zip_code VARCHAR(10) NOT NULL,
    city VARCHAR(100),
    state VARCHAR(2),
    is_primary BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(technician_id, zip_code)
);

-- Quote requests table
CREATE TABLE quote_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES customers(id),
    
    -- Service address
    service_street_address VARCHAR(255) NOT NULL,
    service_city VARCHAR(100) NOT NULL,
    service_state VARCHAR(2) NOT NULL,
    service_zip_code VARCHAR(10) NOT NULL,
    service_location GEOGRAPHY(POINT, 4326),
    
    -- Installation details
    property_type property_type NOT NULL,
    stories INTEGER,
    roof_type roof_type,
    kit_status kit_status NOT NULL,
    
    -- Contact info (for non-registered users)
    contact_first_name VARCHAR(100) NOT NULL,
    contact_last_name VARCHAR(100) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(20) NOT NULL,
    
    -- Additional details
    special_requests TEXT,
    photo_urls TEXT[],
    
    -- Status and assignment
    status quote_status DEFAULT 'pending',
    assigned_technician_id UUID REFERENCES technicians(id),
    
    -- Pricing
    estimated_price DECIMAL(10, 2),
    final_price DECIMAL(10, 2),
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP WITH TIME ZONE,
    assigned_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    
    -- Metadata
    source VARCHAR(50) DEFAULT 'website',
    referrer VARCHAR(255)
);

-- Jobs table
CREATE TABLE jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quote_request_id UUID UNIQUE REFERENCES quote_requests(id),
    customer_id UUID REFERENCES customers(id),
    technician_id UUID REFERENCES technicians(id),
    
    -- Job details
    status job_status DEFAULT 'available',
    scheduled_date DATE,
    scheduled_time_slot VARCHAR(50), -- e.g., "morning", "afternoon", "evening"
    
    -- Completion details
    actual_start_time TIMESTAMP WITH TIME ZONE,
    actual_end_time TIMESTAMP WITH TIME ZONE,
    completion_notes TEXT,
    completion_photo_urls TEXT[],
    
    -- Payment
    technician_payout DECIMAL(10, 2),
    customer_price DECIMAL(10, 2),
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    assigned_at TIMESTAMP WITH TIME ZONE,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    
    -- Performance
    customer_rating INTEGER CHECK (customer_rating >= 1 AND customer_rating <= 5),
    customer_review TEXT,
    reviewed_at TIMESTAMP WITH TIME ZONE
);

-- Payments table
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_id UUID REFERENCES jobs(id),
    customer_id UUID REFERENCES customers(id),
    technician_id UUID REFERENCES technicians(id),
    
    -- Payment details
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    status payment_status DEFAULT 'pending',
    payment_type VARCHAR(50), -- 'customer_payment' or 'technician_payout'
    
    -- Stripe references
    stripe_payment_intent_id VARCHAR(255),
    stripe_charge_id VARCHAR(255),
    stripe_transfer_id VARCHAR(255),
    
    -- Metadata
    description TEXT,
    metadata JSONB,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    processed_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    failed_at TIMESTAMP WITH TIME ZONE,
    
    failure_reason TEXT
);

-- Email notifications log
CREATE TABLE email_notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    recipient_email VARCHAR(255) NOT NULL,
    recipient_type user_role,
    subject VARCHAR(255) NOT NULL,
    template_name VARCHAR(100),
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'sent',
    error_message TEXT,
    metadata JSONB
);

-- Admin activity log
CREATE TABLE admin_activities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    admin_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50),
    entity_id UUID,
    details JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_technicians_status ON technicians(status);
CREATE INDEX idx_technicians_location ON technicians USING GIST(location);
CREATE INDEX idx_technician_service_areas_zip ON technician_service_areas(zip_code);
CREATE INDEX idx_quote_requests_status ON quote_requests(status);
CREATE INDEX idx_quote_requests_zip ON quote_requests(service_zip_code);
CREATE INDEX idx_quote_requests_created ON quote_requests(created_at DESC);
CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_jobs_technician ON jobs(technician_id);
CREATE INDEX idx_jobs_scheduled_date ON jobs(scheduled_date);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_job ON payments(job_id);

-- Triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    
CREATE TRIGGER update_technicians_updated_at BEFORE UPDATE ON technicians
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();