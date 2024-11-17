'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
  Settings,
  Store,
  Clock,
  Pizza,
  Truck,
  Bell,
  CreditCard,
  Mail,
  Smartphone,
  Shield,
} from 'lucide-react';

export default function SettingsPage() {
  const [deliveryEnabled, setDeliveryEnabled] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">
            <Settings className="h-4 w-4 mr-2" />
            Geral
          </TabsTrigger>
          <TabsTrigger value="business">
            <Store className="h-4 w-4 mr-2" />
            Negócio
          </TabsTrigger>
          <TabsTrigger value="delivery">
            <Truck className="h-4 w-4 mr-2" />
            Entrega
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notificações
          </TabsTrigger>
        </TabsList>

        {/* Configurações Gerais */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Gerais</CardTitle>
              <CardDescription>
                Gerencie as configurações básicas do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Modo Escuro</Label>
                    <div className="text-sm text-muted-foreground">
                      Ative para usar o tema escuro na interface
                    </div>
                  </div>
                  <Switch
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Fuso Horário</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>America/Sao_Paulo</option>
                    <option>America/Fortaleza</option>
                    <option>America/Manaus</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Idioma</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Português (BR)</option>
                    <option>English</option>
                    <option>Español</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Configurações do Negócio */}
        <TabsContent value="business">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Negócio</CardTitle>
              <CardDescription>
                Gerencie as informações da sua pizzaria
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label>Nome da Pizzaria</Label>
                  <Input placeholder="Pizza Express" />
                </div>
                <div className="space-y-2">
                  <Label>Endereço</Label>
                  <Input placeholder="Rua das Pizzas, 123" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Telefone</Label>
                    <Input placeholder="(11) 1234-5678" />
                  </div>
                  <div className="space-y-2">
                    <Label>WhatsApp</Label>
                    <Input placeholder="(11) 91234-5678" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Horário de Funcionamento</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="time" defaultValue="18:00" />
                    <Input type="time" defaultValue="23:00" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Cardápio e Preços</CardTitle>
              <CardDescription>
                Configure os itens e preços do seu cardápio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Taxa de Entrega Base</Label>
                <Input type="number" placeholder="5.00" />
              </div>
              <div className="space-y-2">
                <Label>Valor Mínimo do Pedido</Label>
                <Input type="number" placeholder="30.00" />
              </div>
              <Button>
                <Pizza className="h-4 w-4 mr-2" />
                Gerenciar Cardápio
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Configurações de Entrega */}
        <TabsContent value="delivery">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Entrega</CardTitle>
              <CardDescription>
                Gerencie as opções de entrega e retirada
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Delivery Ativo</Label>
                    <div className="text-sm text-muted-foreground">
                      Ative para aceitar pedidos com entrega
                    </div>
                  </div>
                  <Switch
                    checked={deliveryEnabled}
                    onCheckedChange={setDeliveryEnabled}
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Raio de Entrega (km)</Label>
                  <Input type="number" placeholder="5" />
                </div>
                <div className="space-y-2">
                  <Label>Tempo Médio de Entrega (min)</Label>
                  <Input type="number" placeholder="45" />
                </div>
                <div className="space-y-2">
                  <Label>Áreas de Entrega</Label>
                  <Button variant="outline" className="w-full">
                    Gerenciar Áreas e Taxas
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Configurações de Notificações */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notificações</CardTitle>
              <CardDescription>
                Configure como você deseja receber as notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Notificações Push</div>
                    <div className="text-sm text-muted-foreground">
                      Receba alertas de novos pedidos
                    </div>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
                <Separator />
                <div className="space-y-4">
                  <Label>Notificar por:</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="email" defaultChecked />
                      <label htmlFor="email" className="text-sm">Email</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="sms" defaultChecked />
                      <label htmlFor="sms" className="text-sm">SMS</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="whatsapp" defaultChecked />
                      <label htmlFor="whatsapp" className="text-sm">WhatsApp</label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email para Notificações</Label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label>Celular para Notificações</Label>
                  <Input type="tel" placeholder="(11) 91234-5678" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
