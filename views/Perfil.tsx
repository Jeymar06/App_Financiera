import React, { FormEvent } from 'react';
import { User } from 'lucide-react';
import { AppData } from '../types';

type Props = {
  data: AppData;
  newPassword: string;
  message: string;
  setNewPassword: (v: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const Perfil: React.FC<Props> = ({ data, newPassword, message, setNewPassword, onSubmit }) => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Perfil de Usuario</h1>

    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
          <User className="h-8 w-8 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{data.user.name}</h3>
          <p className="text-gray-600">{data.user.email}</p>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="text-lg font-medium mb-4">Cambiar Contraseña</h4>
        <form onSubmit={onSubmit} className="max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Nueva Contraseña</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">Actualizar Contraseña</button>
        </form>
      </div>

      {message && <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">{message}</div>}
    </div>
  </div>
);


