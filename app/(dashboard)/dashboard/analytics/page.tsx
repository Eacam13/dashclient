'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Pizza, Clock } from 'lucide-react';

// Dados mockados para exemplo
const salesData = [
  { name: 'Segunda', vendas: 4200 },
  { name: 'Terça', vendas: 3800 },
  { name: 'Quarta', vendas: 5100 },
  { name: 'Quinta', vendas: 4800 },
  { name: 'Sexta', vendas: 6300 },
  { name: 'Sábado', vendas: 7500 },
  { name: 'Domingo', vendas: 6800 },
];

const popularPizzas = [
  { name: 'Marguerita', value: 30 },
  { name: 'Pepperoni', value: 25 },
  { name: 'Portuguesa', value: 20 },
  { name: 'Calabresa', value: 15 },
  { name: 'Frango', value: 10 },
];

const deliveryTimeData = [
  { hora: '12:00', tempo: 25 },
  { hora: '13:00', tempo: 30 },
  { hora: '14:00', tempo: 28 },
  { hora: '15:00', tempo: 35 },
  { hora: '16:00', tempo: 32 },
  { hora: '17:00', tempo: 40 },
  { hora: '18:00', tempo: 45 },
  { hora: '19:00', tempo: 38 },
  { hora: '20:00', tempo: 30 },
  { hora: '21:00', tempo: 25 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export default function AnalyticsPage() {
  const totalSales = salesData.reduce((acc, curr) => acc + curr.vendas, 0);
  const averageSales = totalSales / salesData.length;
  const bestDay = salesData.reduce((a, b) => (a.vendas > b.vendas ? a : b));
  const averageDeliveryTime = deliveryTimeData.reduce((acc, curr) => acc + curr.tempo, 0) / deliveryTimeData.length;

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Análises</h2>
      </div>

      {/* Cards de Métricas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendas Totais (Semana)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalSales)}</div>
            <p className="text-xs text-muted-foreground">
              Média diária: {formatCurrency(averageSales)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Melhor Dia</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bestDay.name}</div>
            <p className="text-xs text-muted-foreground">
              {formatCurrency(bestDay.vendas)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pizza Mais Vendida</CardTitle>
            <Pizza className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{popularPizzas[0].name}</div>
            <p className="text-xs text-muted-foreground">
              {popularPizzas[0].value}% dos pedidos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo Médio Entrega</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageDeliveryTime.toFixed(0)} min</div>
            <p className="text-xs text-muted-foreground">
              Meta: 30 min
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Vendas por Dia</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => formatCurrency(Number(value))}
                  labelStyle={{ color: 'black' }}
                />
                <Bar dataKey="vendas" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Pizzas Mais Vendidas</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={popularPizzas}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ value }) => `${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={2}
                >
                  {popularPizzas.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend 
                  layout="vertical" 
                  align="right"
                  verticalAlign="middle"
                  wrapperStyle={{
                    paddingLeft: '20px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-7">
          <CardHeader>
            <CardTitle>Tempo de Entrega por Hora</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={deliveryTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hora" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="tempo"
                  stroke="#8884d8"
                  name="Tempo (minutos)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
