'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  BarChart2,
  Settings,
  Users,
  LogOut,
  Pizza,
} from 'lucide-react';

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-blue-500',
  },
  {
    label: 'Pedidos',
    icon: Pizza,
    href: '/dashboard/orders',
    color: 'text-orange-500',
  },
  {
    label: 'Análises',
    icon: BarChart2,
    href: '/dashboard/analytics',
    color: 'text-green-500',
  },
  {
    label: 'Clientes',
    icon: Users,
    href: '/dashboard/users',
    color: 'text-purple-500',
  },
  {
    label: 'Configurações',
    icon: Settings,
    href: '/dashboard/settings',
    color: 'text-gray-400',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white dark:bg-gray-900 border-r">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-10">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            DashClient
          </h1>
        </Link>
        <div className="space-y-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition-all duration-200 ease-in-out',
                pathname === route.href
                  ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', 
                  pathname === route.href ? 'text-white' : route.color
                )} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2 border-t dark:border-gray-800">
        <Link href="/" className="w-full text-sm group flex p-3 justify-start font-medium cursor-pointer rounded-lg transition-all duration-200 ease-in-out text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <div className="flex items-center flex-1">
            <LogOut className="h-5 w-5 mr-3 text-red-500" />
            Sair
          </div>
        </Link>
      </div>
    </div>
  );
}