# KuiperPros.com - The Nationwide Kuiper Installation Hub

KuiperPros is a comprehensive two-sided marketplace that connects customers seeking Amazon Kuiper satellite internet installation services with certified technicians across the United States. The platform streamlines the entire process from quote requests to job completion, featuring automated technician matching, real-time job management, and integrated payment processing.

## Project Overview

KuiperPros operates as a sophisticated marketplace addressing the growing demand for satellite internet installations. The platform serves three primary user types:

- **Customers**: Request quotes, track installation progress, and manage service details
- **Technicians**: Apply to join the network, accept jobs, and manage their business
- **Administrators**: Oversee platform operations, approve technicians, and monitor activities

The business model centers around connecting vetted technicians with customers needing professional satellite internet installation, ensuring quality service delivery while providing technicians with a steady stream of work opportunities.

## Technology Stack

### Framework
- **Next.js 14.1.0** - Full-stack React framework with App Router

### Styling & UI
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion 11.0.0** - Animation library
- **Lucide React** - Icon library
- **Heroicons** - Additional icon set

### Database & ORM
- **PostgreSQL** - Primary database
- **Prisma 6.15.0** - Type-safe database client and ORM

### Authentication & Security
- **NextAuth.js 4.24.5** - Authentication framework
- **bcryptjs** - Password hashing
- **Zod 4.1.5** - Runtime type validation

### Key Libraries & Services
- **React Hook Form 7.49.3** - Form state management
- **SendGrid** - Transactional email service
- **AWS S3** - File storage for photos and documents
- **Google Maps API** - Address validation and mapping
- **Stripe** - Payment processing
- **React Hot Toast** - Notification system
- **Zustand** - State management

### Development Tools
- **TypeScript 5** - Type safety
- **ESLint** - Code linting
- **Autoprefixer** - CSS vendor prefixes

## Project Structure

```
kuiperpros/
├── app/                    # Next.js App Router pages and API routes
│   ├── api/               # API endpoints
│   │   ├── admin/         # Admin management endpoints
│   │   ├── auth/          # Authentication endpoints
│   │   ├── quotes/        # Quote submission endpoints
│   │   └── technician/    # Technician-specific endpoints
│   ├── admin/             # Admin dashboard pages
│   ├── quote/             # Customer quote request pages
│   ├── technician/        # Technician portal pages
│   └── layout.tsx         # Root layout component
├── components/            # Reusable UI components
│   ├── homepage/          # Landing page components
│   ├── layout/            # Navigation, footer, etc.
│   ├── quote/             # Quote form components
│   └── ui/                # Base UI components
├── lib/                   # Core business logic and utilities
│   ├── auth.ts            # NextAuth configuration
│   ├── email.ts           # Email service and templates
│   ├── matching-engine.ts # Technician matching algorithm
│   ├── prisma.ts          # Database client
│   ├── s3.ts              # File upload service
│   └── utils.ts           # Utility functions
├── prisma/                # Database schema and migrations
│   └── schema.prisma      # Prisma schema definition
└── types/                 # TypeScript type definitions
```

## Local Development Setup

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database
- SendGrid account for emails
- AWS S3 bucket for file storage
- Google Maps API key

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/kuiperpros.git
   cd kuiperpros
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   - Install and start PostgreSQL
   - Create a new database named `kuiperpros`

4. **Configure environment variables**
   Copy `.env.local` and update the following variables:
   ```bash
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/kuiperpros"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   
   # Email (SendGrid)
   SENDGRID_API_KEY="SG.your-sendgrid-api-key"
   EMAIL_FROM="noreply@kuiperpros.com"
   
   # Google Maps
   GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
   
   # AWS S3
   AWS_ACCESS_KEY_ID="your-aws-access-key"
   AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
   AWS_REGION="us-east-1"
   S3_BUCKET_NAME="kuiperpros-uploads"
   
   # Stripe (optional for payment testing)
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   ```

5. **Sync the database schema**
   ```bash
   npx prisma db push
   ```

6. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

7. **Run the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

## Database Schema

The application uses a comprehensive PostgreSQL schema with the following key models:

### Core Models

- **User**: Base authentication model supporting three roles (customer, technician, admin)
- **Customer**: Customer profile with contact information and Stripe integration
- **Technician**: Technician profiles with verification status, service areas, and earnings tracking
- **QuoteRequest**: Customer quote submissions with property details and status tracking
- **Job**: Work orders created from approved quotes, linking customers with technicians
- **Payment**: Financial transactions with Stripe integration for payment processing

### Supporting Models

- **TechnicianServiceArea**: Defines geographic coverage areas for technicians
- **EmailNotification**: Audit trail for all transactional emails
- **AdminActivity**: Administrative action logging for compliance

### Key Relationships

- Users have one-to-one relationships with Customer or Technician profiles
- QuoteRequests can be assigned to Technicians and converted to Jobs
- Jobs track the complete lifecycle from assignment to completion
- Payments link Jobs with financial transactions

## API Endpoint Documentation

### Quote Submission

**POST /api/quotes/submit**

Submits a new installation quote request from a customer.

**Request Payload:**
```json
{
  "serviceAddress": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zipCode": "12345",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "installationDetails": {
    "propertyType": "residential",
    "stories": 2,
    "roofType": "shingle",
    "kitStatus": "need_kit"
  },
  "contactInfo": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "(555) 123-4567"
  },
  "specialRequests": "Please call before arriving",
  "photos": ["base64-encoded-image-data"]
}
```

**Success Response:**
```json
{
  "success": true,
  "quoteRequestId": "uuid",
  "estimatedPrice": 299.99,
  "techniciansNotified": 3
}
```

### Technician Jobs

**GET /api/technician/jobs**

Retrieves available and assigned jobs for the authenticated technician.

**Authentication:** Requires technician session

**Success Response:**
```json
{
  "available": [
    {
      "id": "job-uuid",
      "quoteRequest": {
        "serviceCity": "Anytown",
        "serviceState": "CA",
        "serviceZipCode": "12345",
        "propertyType": "residential",
        "estimatedPrice": 299.99,
        "createdAt": "2025-08-31T10:00:00Z"
      }
    }
  ],
  "assigned": [
    {
      "id": "job-uuid",
      "scheduledDate": "2025-09-01T14:00:00Z",
      "customer": {
        "firstName": "John",
        "lastName": "Doe",
        "phone": "(555) 123-4567"
      },
      "quoteRequest": {
        "serviceStreetAddress": "123 Main St"
      }
    }
  ],
  "stats": {
    "totalCompleted": 45,
    "averageRating": 4.8,
    "totalEarnings": 12450.00
  }
}
```

### Job Acceptance

**POST /api/technician/jobs/[jobId]/accept**

Allows a technician to accept an available job.

**Authentication:** Requires technician session

**Success Response:**
```json
{
  "success": true,
  "job": {
    "id": "job-uuid",
    "status": "assigned",
    "technicianPayout": 209.99,
    "assignedAt": "2025-08-31T10:00:00Z"
  }
}
```

### Admin - Technician Management

**GET /api/admin/technicians**

Retrieves technicians for admin review and management.

**Authentication:** Requires admin session

**Query Parameters:**
- `status`: Filter by technician status (pending, approved, suspended, rejected)

**Success Response:**
```json
{
  "technicians": [
    {
      "id": "tech-uuid",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane@techcompany.com",
      "companyName": "Tech Solutions LLC",
      "status": "pending",
      "serviceAreas": [
        {
          "zipCode": "12345",
          "city": "Anytown",
          "state": "CA"
        }
      ],
      "jobsCompleted": 23,
      "averageRating": 4.9,
      "createdAt": "2025-08-31T10:00:00Z"
    }
  ]
}
```

### Admin - Technician Approval

**POST /api/admin/technicians/[technicianId]/approve**

Approves a pending technician application.

**Authentication:** Requires admin session

**Success Response:**
```json
{
  "success": true,
  "technician": {
    "id": "tech-uuid",
    "status": "approved",
    "approvedAt": "2025-08-31T10:00:00Z"
  }
}
```

## Core Business Logic

### Matching Engine (`lib/matching-engine.ts`)

The technician matching system intelligently connects customers with qualified technicians using a multi-tier approach:

1. **Exact ZIP Code Match**: Prioritizes technicians who explicitly service the customer's ZIP code
2. **Geographic Proximity**: Uses location data to find nearby technicians within their service radius
3. **State-Level Fallback**: Expands search to technicians in the same state when local options are unavailable

The algorithm considers technician availability, approval status, and geographic constraints to ensure optimal matches.

### Email Service (`lib/email.ts`)

Comprehensive transactional email system powered by SendGrid with templates for:

- **Quote Confirmation**: Sent to customers upon quote submission
- **Job Notifications**: Alerts technicians about new opportunities
- **Assignment Notifications**: Confirms customer-technician connections
- **Approval Communications**: Welcomes newly approved technicians
- **Status Updates**: Keeps all parties informed throughout the process

Each email template is dynamically populated with relevant data and maintains consistent branding and messaging.

### File Management (`lib/s3.ts`)

Secure file upload and storage system using AWS S3 for:
- Customer property photos
- Technician documentation (licenses, insurance)
- Job completion photos
- Administrative documents

All uploads are processed securely with proper access controls and organized by purpose and date.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is proprietary software. All rights reserved.
