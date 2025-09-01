'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  BriefcaseIcon, 
  MapPinIcon, 
  CalendarIcon, 
  CurrencyDollarIcon,
  CheckCircleIcon,
  ClockIcon,
  HomeIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

interface Job {
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
  scheduledDate: string;
  status: 'pending' | 'assigned' | 'completed' | 'cancelled';
  payout: number;
  distance?: number;
  technicianId?: string;
  createdAt: string;
  notes?: string;
}

interface TechnicianStats {
  totalJobs: number;
  completedJobs: number;
  totalEarnings: number;
  averageRating: number;
  upcomingJobs: number;
}

export default function TechnicianDashboard() {
  const router = useRouter();
  const [assignedJobs, setAssignedJobs] = useState<Job[]>([]);
  const [availableJobs, setAvailableJobs] = useState<Job[]>([]);
  const [stats, setStats] = useState<TechnicianStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [acceptingJob, setAcceptingJob] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'assigned' | 'available'>('assigned');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch jobs
      const jobsResponse = await fetch('/api/technician/jobs', {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!jobsResponse.ok) {
        if (jobsResponse.status === 401) {
          router.push('/login?redirect=/technician/dashboard');
          return;
        }
        throw new Error('Failed to fetch jobs');
      }

      const jobsData = await jobsResponse.json();
      setAssignedJobs(jobsData.assignedJobs || []);
      setAvailableJobs(jobsData.availableJobs || []);

      // Fetch stats
      const statsResponse = await fetch('/api/technician/stats', {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats(statsData);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptJob = async (jobId: string) => {
    try {
      setAcceptingJob(jobId);
      
      const response = await fetch(`/api/technician/jobs/${jobId}/accept`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to accept job');
      }

      // Refresh the dashboard data
      await fetchDashboardData();
      
      // Show success message (you could use a toast library here)
      alert('Job accepted successfully!');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to accept job');
      console.error('Error accepting job:', err);
    } finally {
      setAcceptingJob(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
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
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
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
              <h1 className="text-2xl font-bold text-gray-900">Technician Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back!</span>
              <button
                onClick={() => router.push('/technician/profile')}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <UserIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <BriefcaseIcon className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Total Jobs</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalJobs}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completedJobs}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <ClockIcon className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Upcoming</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.upcomingJobs}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <CurrencyDollarIcon className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Earnings</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(stats.totalEarnings)}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <StarIcon className="h-8 w-8 text-yellow-500" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.averageRating.toFixed(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('assigned')}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'assigned'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Assigned Jobs ({assignedJobs.length})
              </button>
              <button
                onClick={() => setActiveTab('available')}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'available'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Available Jobs in Your Area ({availableJobs.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {activeTab === 'assigned' ? (
            assignedJobs.length > 0 ? (
              assignedJobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  type="assigned"
                  onAccept={handleAcceptJob}
                  accepting={acceptingJob === job.id}
                />
              ))
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <BriefcaseIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No assigned jobs at the moment.</p>
                <p className="text-sm text-gray-500 mt-2">
                  Check the Available Jobs tab for new opportunities!
                </p>
              </div>
            )
          ) : (
            availableJobs.length > 0 ? (
              availableJobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  type="available"
                  onAccept={handleAcceptJob}
                  accepting={acceptingJob === job.id}
                />
              ))
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <MapPinIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No available jobs in your area right now.</p>
                <p className="text-sm text-gray-500 mt-2">
                  Check back soon for new opportunities!
                </p>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}

// Job Card Component
function JobCard({ 
  job, 
  type, 
  onAccept, 
  accepting 
}: { 
  job: Job; 
  type: 'assigned' | 'available';
  onAccept: (jobId: string) => void;
  accepting: boolean;
}) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'assigned':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {job.customerName}
            </h3>
            <div className="flex items-center mt-1 text-sm text-gray-600">
              <MapPinIcon className="h-4 w-4 mr-1" />
              {job.city}, {job.state} {job.zipCode}
              {job.distance && (
                <span className="ml-2 text-gray-500">
                  ({job.distance.toFixed(1)} miles away)
                </span>
              )}
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">
              {formatCurrency(job.payout)}
            </p>
            <span className={`inline-block mt-1 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(job.status)}`}>
              {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <HomeIcon className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-gray-600">Property:</span>
              <span className="ml-1 font-medium">{job.propertyType}</span>
            </div>
            <div className="flex items-center text-sm">
              <CalendarIcon className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-gray-600">Scheduled:</span>
              <span className="ml-1 font-medium">{formatDate(job.scheduledDate)}</span>
            </div>
            <div className="flex items-center text-sm">
              <BriefcaseIcon className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-gray-600">Kit Status:</span>
              <span className="ml-1 font-medium">
                {job.hasKuiperKit ? 'Customer has kit' : 'Kit needed'}
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <span className="text-gray-600">Stories:</span>
              <span className="ml-1 font-medium">{job.stories}</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-gray-600">Roof Type:</span>
              <span className="ml-1 font-medium">{job.roofType}</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-gray-600">Address:</span>
              <span className="ml-1 font-medium text-xs">{job.serviceAddress}</span>
            </div>
          </div>
        </div>

        {job.notes && (
          <div className="mb-4 p-3 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Notes:</span> {job.notes}
            </p>
          </div>
        )}

        {type === 'assigned' && (
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-600">
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  {job.customerPhone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon className="h-4 w-4 mr-1" />
                  {job.customerEmail}
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-600 rounded-md hover:bg-blue-50">
                  View Details
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Mark Complete
                </button>
              </div>
            </div>
          </div>
        )}

        {type === 'available' && (
          <div className="border-t pt-4">
            <button
              onClick={() => onAccept(job.id)}
              disabled={accepting}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {accepting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Accepting...
                </>
              ) : (
                'Accept Job'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}