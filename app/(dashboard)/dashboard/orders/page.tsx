'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Pizza,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
  Timer,
  User,
  MapPin,
  Phone,
} from 'lucide-react';

// Dados mockados para exemplo
const orders = {
  inProgress: [
    {
      id: 1,
      customer: 'João Silva',
      items: ['Pizza Margherita', 'Pizza Pepperoni'],
      status: 'preparing',
      time: '15:30',
      address: 'Rua das Flores, 123',
      phone: '(11) 98765-4321',
      total: 89.90,
    },
    {
      id: 2,
      customer: 'Maria Santos',
      items: ['Pizza Portuguesa', 'Refrigerante'],
      status: 'delivering',
      time: '15:45',
      address: 'Av. Principal, 456',
      phone: '(11) 91234-5678',
      total: 62.90,
    },
  ],
  completed: [
    {
      id: 3,
      customer: 'Pedro Oliveira',
      items: ['Pizza Calabresa', 'Pizza Frango'],
      status: 'delivered',
      time: '14:20',
      address: 'Rua do Comércio, 789',
      phone: '(11) 94567-8901',
      total: 95.80,
    },
  ],
  cancelled: [
    {
      id: 4,
      customer: 'Ana Costa',
      items: ['Pizza Quatro Queijos'],
      status: 'cancelled',
      time: '14:00',
      address: 'Av. Secundária, 321',
      phone: '(11) 93456-7890',
      total: 45.90,
    },
  ],
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'preparing':
      return 'bg-yellow-500';
    case 'delivering':
      return 'bg-blue-500';
    case 'delivered':
      return 'bg-green-500';
    case 'cancelled':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'preparing':
      return 'Preparando';
    case 'delivering':
      return 'Em entrega';
    case 'delivered':
      return 'Entregue';
    case 'cancelled':
      return 'Cancelado';
    default:
      return status;
  }
};

const OrderCard = ({ order }: { order: any }) => (
  <Card className="mb-4 hover:shadow-lg transition-shadow">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-lg font-medium">
        Pedido #{order.id}
        <Badge className={`ml-2 ${getStatusColor(order.status)}`}>
          {getStatusText(order.status)}
        </Badge>
      </CardTitle>
      <div className="flex items-center text-gray-500">
        <Clock className="w-4 h-4 mr-1" />
        <span className="text-sm">{order.time}</span>
      </div>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <div className="flex items-start space-x-4">
          <User className="w-5 h-5 text-gray-500 mt-0.5" />
          <div>
            <div className="font-medium">{order.customer}</div>
            <div className="text-sm text-gray-500">{order.phone}</div>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
          <div className="text-sm text-gray-600">{order.address}</div>
        </div>
        <div className="flex items-start space-x-4">
          <Pizza className="w-5 h-5 text-gray-500 mt-0.5" />
          <div>
            <div className="text-sm text-gray-600">
              {order.items.join(', ')}
            </div>
            <div className="font-medium text-lg mt-1">
              R$ {order.total.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState('inProgress');

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Pedidos</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            <Loader2 className="w-4 h-4 mr-1" />
            {orders.inProgress.filter(o => o.status === 'preparing').length} em preparo
          </Badge>
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            <Timer className="w-4 h-4 mr-1" />
            {orders.inProgress.filter(o => o.status === 'delivering').length} em entrega
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="inProgress" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inProgress" className="relative">
            Em Andamento
            {orders.inProgress.length > 0 && (
              <Badge className="ml-2 bg-blue-500">{orders.inProgress.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="completed">
            Concluídos
            {orders.completed.length > 0 && (
              <Badge className="ml-2 bg-green-500">{orders.completed.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="cancelled">
            Cancelados
            {orders.cancelled.length > 0 && (
              <Badge className="ml-2 bg-red-500">{orders.cancelled.length}</Badge>
            )}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="inProgress" className="space-y-4">
          {orders.inProgress.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          {orders.completed.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </TabsContent>
        <TabsContent value="cancelled" className="space-y-4">
          {orders.cancelled.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
