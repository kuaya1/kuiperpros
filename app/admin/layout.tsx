import { ReactNode } from 'react';
import Link from 'next/link';
import { 
  HomeIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  BellIcon
} from '@heroicons/react/24/outline';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">KuiperPros</h2>
          <p className="text-sm text-gray-600">Admin Portal</p>
        </div>
        
        <nav className="mt-6">
          <Link href="/admin/dashboard" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <HomeIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Dashboard</span>
          </Link>
          
          <Link href="/admin/technicians" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <UserGroupIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Technicians</span>
          </Link>
          
          <Link href="/admin/quotes" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <ClipboardDocumentCheckIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Quotes</span>
          </Link>
          
          <Link href="/admin/analytics" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <ChartBarIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Analytics</span>
          </Link>
          
          <Link href="/admin/payments" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <CurrencyDollarIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Payments</span>
          </Link>
          
          <Link href="/admin/notifications" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <BellIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Notifications</span>
          </Link>
          
          <Link href="/admin/settings" className="flex items-center px-6 py-3 hover:bg-gray-100">
            <Cog6ToothIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Settings</span>
          </Link>
        </nav>
        
        <div className="absolute bottom-0 w-64 p-6">
          <Link href="/auth/signout" className="flex items-center px-6 py-3 hover:bg-gray-100 rounded-md">
            <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3 text-gray-600" />
            <span className="text-gray-700">Sign Out</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}