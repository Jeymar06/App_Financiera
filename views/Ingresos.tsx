import React from 'react';
import { Plus } from 'lucide-react';
import { AppData } from '../types';
import { formatCurrency } from '../utils/format';

type Props = {
  data: AppData;
  onAdd: () => void;
  onDelete: (id: number) => void;
};

export const Ingresos: React.FC<Props> = ({ data, onAdd, onDelete }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">Gestión de Ingresos</h1>
      <button onClick={onAdd} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600">
        <Plus className="h-4 w-4" />
        <span>Agregar Ingreso</span>
      </button>
    </div>

    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Categoría</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Descripción</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Monto</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.ingresos.map(item => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(item.fecha).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.categoria}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{item.descripcion}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{formatCurrency(item.monto)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                <button onClick={() => onDelete(item.id)} className="text-red-600 hover:text-red-800 text-xs">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);


