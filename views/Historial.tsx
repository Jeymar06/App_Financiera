import React from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { AppData } from '../types';

export const Historial: React.FC<{ data: AppData }> = ({ data }) => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Historial Financiero</h1>

    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Evolución Mensual</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data.historialMensual}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ingresos" stroke="#10B981" strokeWidth={3} name="Ingresos" />
          <Line type="monotone" dataKey="egresos" stroke="#EF4444" strokeWidth={3} name="Egresos" />
          <Line type="monotone" dataKey="saldo" stroke="#3B82F6" strokeWidth={3} name="Saldo" />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mes</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ingresos</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Egresos</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Saldo</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.historialMensual.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.mes}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">${item.ingresos.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">${item.egresos.toLocaleString()}</td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${item.saldo >= 0 ? 'text-green-600' : 'text-red-600'}`}>${item.saldo.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);


