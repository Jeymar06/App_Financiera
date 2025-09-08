import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { AppData } from '../types';
import { formatCurrency } from '../utils/format';

type Props = {
  data: AppData;
  totalIngresos: number;
  totalEgresos: number;
  saldoActual: number;
};

export const Dashboard: React.FC<Props> = ({ data, totalIngresos, totalEgresos, saldoActual }) => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Dashboard Financiero</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Saldo Actual</p>
            <p className={`text-2xl font-bold ${saldoActual >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(saldoActual)}
            </p>
          </div>
          <DollarSign className="h-8 w-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Ingresos</p>
            <p className="text-2xl font-bold text-green-600">{formatCurrency(totalIngresos)}</p>
          </div>
          <TrendingUp className="h-8 w-8 text-green-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Egresos</p>
            <p className="text-2xl font-bold text-red-600">{formatCurrency(totalEgresos)}</p>
          </div>
          <TrendingDown className="h-8 w-8 text-red-500" />
        </div>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Comparativo Mensual</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.historialMensual}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ingresos" fill="#10B981" name="Ingresos" />
          <Bar dataKey="egresos" fill="#EF4444" name="Egresos" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Últimos Movimientos</h3>
      <div className="space-y-3">
        {[...data.ingresos.slice(-3), ...data.egresos.slice(-3)]
          .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
          .slice(0, 5)
          .map((item, index) => {
            const isIncome = data.ingresos.includes(item);
            return (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {isIncome ? (
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  )}
                  <div>
                    <p className="font-medium">{item.descripcion}</p>
                    <p className="text-sm text-gray-600">{item.categoria} • {new Date(item.fecha).toLocaleDateString()}</p>
                  </div>
                </div>
                <p className={`font-semibold ${isIncome ? 'text-green-600' : 'text-red-600'}`}>
                  {isIncome ? '' : '-'}{formatCurrency(item.monto)}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  </div>
);


