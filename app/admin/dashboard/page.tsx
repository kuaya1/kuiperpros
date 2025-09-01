'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DocumentTextIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  StarIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface Technician {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  yearsExperience: number;
  certifications: string[];
  serviceAreas: string[];
  status: 'pending' | 'approved' | 'rejected' | 'suspended';
  rating?: number;
  completedJobs?: number;
  createdAt: string;
  backgroundCheckStatus?: 'pending' | 'passed' | 'failed';
  insuranceVerified?: boolean;
  documents?: {
    license?: string;
    insurance?: string;
    certification?: string;
  };
}

interface Quote {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceAddress: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: string;
  stories: number;
  roofType: string;
  hasKuiperKit: boolean;
  status: 'new' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
  createdAt: string;
  assignedTechnician?: string;
  scheduledDate?: string;
  quotedPrice?: number;
  notes?: string;
}

interface AdminStats {
  totalQuotes: number;
  pendingQuotes: number;
  completedInstallations: number;
  totalRevenue: number;
  activeTechnicians: number;
  pendingTechnicians: number;
  averageResponseTime: string;
  customerSatisfaction: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'overview' | 'technicians' | 'quotes'>('overview');
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch stats
      const statsResponse = await fetch('/api/admin/stats', {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!statsResponse.ok) {
        if (statsResponse.status === 401) {
          router.push('/login?redirect=/admin/dashboard');
          return;
        }
        throw new Error('Failed to fetch stats');
      }

      const statsData = await statsResponse.json();
      setStats(statsData);

      // Fetch pending technicians
      const techResponse = await fetch('/api/admin/technicians?status=pending', {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (techResponse.ok) {
        const techData = await techResponse.json();
        setTechnicians(techData.technicians || []);
      }

      // Fetch recent quotes
      const quotesResponse = await fetch('/api/admin/quotes?limit=20', {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (quotesResponse.ok) {
        const quotesData = await quotesResponse.json();
        setQuotes(quotesData.quotes || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleApproveTechnician = async (technicianId: string) => {
    try {
      setProcessingId(technicianId);
      
      const response = await fetch(`/api/admin/technicians/${technicianId}/approve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to approve technician');
      }

      // Update local state
      setTechnicians(prev => 
        prev.map(tech => 
          tech.id === technicianId 
            ? { ...tech, status: 'approved' as const }
            : tech
        )
      );
      
      // Show success message
      alert('Technician approved successfully!');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to approve technician');
      console.error('Error approving technician:', err);
    } finally {
      setProcessingId(null);
    }
  };

  const handleRejectTechnician = async (technicianId: string) => {
    try {
      setProcessingId(technicianId);
      
      const response = await fetch(`/api/admin/technicians/${technicianId}/reject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to reject technician');
      }

      // Update local state
      setTechnicians(prev => 
        prev.map(tech => 
          tech.id === technicianId 
            ? { ...tech, status: 'rejected' as const }
            : tech
        )
      );
      
      alert('Technician application rejected.');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to reject technician');
      console.error('Error rejecting technician:', err);
    } finally {
      setProcessingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
          </div>
          <button
            onClick={fetchDashboardData}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Administrator</span>
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
                Settings
              </button>
              <button 
                onClick={() => router.push('/logout')}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Total Quotes"
              value={stats.totalQuotes}
              icon={<ClipboardDocumentCheckIcon className="h-8 w-8" />}
              trend={12}
              color="blue"
            />
            <StatCard
              title="Pending Quotes"
              value={stats.pendingQuotes}
              icon={<ClockIcon className="h-8 w-8" />}
              color="yellow"
            />
            <StatCard
              title="Total Revenue"
              value={formatCurrency(stats.totalRevenue)}
              icon={<CurrencyDollarIcon className="h-8 w-8" />}
              trend={8}
              color="green"
            />
            <StatCard
              title="Active Technicians"
              value={stats.activeTechnicians}
              icon={<UserGroupIcon className="h-8 w-8" />}
              subtitle={`${stats.pendingTechnicians} pending`}
              color="purple"
            />
          </div>
        )}

        {/* Additional Stats Row */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Response Time</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.averageResponseTime}</p>
                </div>
                <ClockIcon className="h-8 w-8 text-gray-400" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Customer Satisfaction</p>
                  <div className="flex items-center mt-1">
                    <p className="text-2xl font-bold text-gray-900">{stats.customerSatisfaction}%</p>
                    <StarIcon className="h-5 w-5 text-yellow-400 ml-2" />
                  </div>
                </div>
                <ChartBarIcon className="h-8 w-8 text-gray-400" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed Installations</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completedInstallations}</p>
                </div>
                <CheckCircleIcon className="h-8 w-8 text-green-500" />
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('technicians')}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'technicians'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Pending Technicians ({technicians.filter(t => t.status === 'pending').length})
              </button>
              <button
                onClick={() => setActiveTab('quotes')}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'quotes'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Recent Quotes ({quotes.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <ActivityItem
                    icon={<UserGroupIcon className="h-5 w-5" />}
                    title="New technician application"
                    description="John Smith applied to join"
                    time="2 hours ago"
                    type="info"
                  />
                  <ActivityItem
                    icon={<ClipboardDocumentCheckIcon className="h-5 w-5" />}
                    title="New quote request"
                    description="Installation in Austin, TX"
                    time="3 hours ago"
                    type="success"
                  />
                  <ActivityItem
                    icon={<CheckCircleIcon className="h-5 w-5" />}
                    title="Installation completed"
                    description="Job #1234 completed successfully"
                    time="5 hours ago"
                    type="success"
                  />
                  <ActivityItem
                    icon={<ExclamationTriangleIcon className="h-5 w-5" />}
                    title="Customer complaint"
                    description="Issue reported for job #1230"
                    time="1 day ago"
                    type="warning"
                  />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                    <UserGroupIcon className="h-6 w-6 text-blue-600 mb-2" />
                    <p className="font-medium">Review Technicians</p>
                    <p className="text-sm text-gray-600">
                      {technicians.filter(t => t.status === 'pending').length} pending
                    </p>
                  </button>
                  <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                    <ClipboardDocumentCheckIcon className="h-6 w-6 text-green-600 mb-2" />
                    <p className="font-medium">Manage Quotes</p>
                    <p className="text-sm text-gray-600">
                      {quotes.filter(q => q.status === 'new').length} new
                    </p>
                  </button>
                  <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                    <ChartBarIcon className="h-6 w-6 text-purple-600 mb-2" />
                    <p className="font-medium">View Reports</p>
                    <p className="text-sm text-gray-600">Analytics</p>
                  </button>
                  <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                    <CurrencyDollarIcon className="h-6 w-6 text-yellow-600 mb-2" />
                    <p className="font-medium">Payments</p>
                    <p className="text-sm text-gray-600">Manage payouts</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'technicians' && (
          <div className="bg-white rounded-lg shadow">
            {/* Search and Filter */}
            <div className="p-6 border-b">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search technicians..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* Technicians List */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Technician
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Experience
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service Areas
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {technicians
                    .filter(tech => 
                      (filterStatus === 'all' || tech.status === filterStatus) &&
                      (searchTerm === '' || 
                        tech.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        tech.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        tech.email.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                    )
                    .map((technician) => (
                      <tr key={technician.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {technician.firstName} {technician.lastName}
                            </div>
                            {technician.company && (
                              <div className="text-sm text-gray-500">{technician.company}</div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{technician.email}</div>
                          <div className="text-sm text-gray-500">{technician.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {technician.yearsExperience} years
                          </div>
                          <div className="text-sm text-gray-500">
                            {technician.certifications.length} certifications
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {technician.serviceAreas.slice(0, 2).join(', ')}
                            {technician.serviceAreas.length > 2 && (
                              <span className="text-gray-500">
                                {' '}+{technician.serviceAreas.length - 2} more
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            technician.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : technician.status === 'approved'
                              ? 'bg-green-100 text-green-800'
                              : technician.status === 'rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {technician.status.charAt(0).toUpperCase() + technician.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {technician.status === 'pending' && (
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleApproveTechnician(technician.id)}
                                disabled={processingId === technician.id}
                                className="text-green-600 hover:text-green-900 disabled:opacity-50"
                              >
                                {processingId === technician.id ? (
                                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
                                ) : (
                                  <CheckCircleIcon className="h-5 w-5" />
                                )}
                              </button>
                              <button
                                onClick={() => handleRejectTechnician(technician.id)}
                                disabled={processingId === technician.id}
                                className="text-red-600 hover:text-red-900 disabled:opacity-50"
                              >
                                <XCircleIcon className="h-5 w-5" />
                              </button>
                              <button className="text-blue-600 hover:text-blue-900">
                                <DocumentTextIcon className="h-5 w-5" />
                              </button>
                            </div>
                          )}
                          {technician.status === 'approved' && (
                            <button className="text-blue-600 hover:text-blue-900">
                              View Details
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              
              {technicians.filter(tech => 
                (filterStatus === 'all' || tech.status === filterStatus) &&
                (searchTerm === '' || 
                  tech.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  tech.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  tech.email.toLowerCase().includes(searchTerm.toLowerCase())
                )
              ).length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No technicians found</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'quotes' && (
          <div className="bg-white rounded-lg shadow">
            {/* Quotes Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Property Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {quotes.map((quote) => (
                    <tr key={quote.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {quote.customerName}
                          </div>
                          <div className="text-sm text-gray-500">{quote.customerEmail}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {quote.city}, {quote.state}
                        </div>
                        <div className="text-sm text-gray-500">{quote.zipCode}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {quote.propertyType} - {quote.stories} story
                        </div>
                        <div className="text-sm text-gray-500">
                          {quote.roofType} roof
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          quote.status === 'new'
                            ? 'bg-blue-100 text-blue-800'
                            : quote.status === 'contacted'
                            ? 'bg-yellow-100 text-yellow-800'
                            : quote.status === 'scheduled'
                            ? 'bg-purple-100 text-purple-800'
                            : quote.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(quote.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-blue-600 hover:text-blue-900 text-sm">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Helper Components
function StatCard({ 
  title, 
  value, 
  icon, 
  trend, 
  subtitle, 
  color = 'blue' 
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: number;
  subtitle?: string;
  color?: string;
}) {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
          {trend && (
            <div className="flex items-center mt-2">
              {trend > 0 ? (
                <ArrowUpIcon className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-sm ml-1 ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {Math.abs(trend)}%
              </span>
            </div>
          )}
        </div>
        <div className={colorClasses[color as keyof typeof colorClasses]}>
          {icon}
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ 
  icon, 
  title, 
  description, 
  time, 
  type = 'info' 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}) {
  const typeColors = {
    info: 'text-blue-600 bg-blue-100',
    success: 'text-green-600 bg-green-100',
    warning: 'text-yellow-600 bg-yellow-100',
    error: 'text-red-600 bg-red-100',
  };

  return (
    <div className="flex items-start space-x-3">
      <div className={`p-2 rounded-full ${typeColors[type]}`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  );
}