import { ReactNode } from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  BriefcaseIcon, 
  CurrencyDollarIcon, 
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

export default function TechnicianLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">KuiperPros</h2>
          <p className="text-sm text-gray-600">Technician Portal</p>
        </div>
        
        <nav className="mt-6">
          <Link href="/technician/dashboard" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <HomeIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Dashboard</span>
          </Link>
          
          <Link href="/technician/jobs" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <BriefcaseIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">My Jobs</span>
          </Link>
          
          <Link href="/technician/earnings" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <CurrencyDollarIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Earnings</span>
          </Link>
          
          <Link href="/technician/profile" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <UserIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Profile</span>
          </Link>
          
          <Link href="/technician/settings" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <Cog6ToothIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Settings</span>
          </Link>
          
          <div className="border-t mt-6 pt-6">
            <Link href="/logout" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3 text-red-600" />
              <span className="text-red-600">Logout</span>
            </Link>
          </div>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}