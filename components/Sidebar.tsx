import React from 'react';
import { DollarSign, Home, TrendingUp, TrendingDown, History, Settings, LogOut } from 'lucide-react';

type Props = {
  userName: string;
  currentView: 'dashboard' | 'ingresos' | 'egresos' | 'historial' | 'perfil';
  onChangeView: (id: Props['currentView']) => void;
  onLogout: () => void;
};

export const Sidebar: React.FC<Props> = ({ userName, currentView, onChangeView, onLogout }) => {
  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'ingresos', label: 'Ingresos', icon: TrendingUp },
    { id: 'egresos', label: 'Egresos', icon: TrendingDown },
    { id: 'historial', label: 'Historial', icon: History },
    { id: 'perfil', label: 'Perfil', icon: Settings }
  ] as const;

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">FinanzApp</h2>
            <p className="text-sm text-gray-600">{userName}</p>
          </div>
        </div>
      </div>

      <nav className="mt-6">
        {items.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-blue-50 transition-colors ${
                currentView === item.id ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button onClick={onLogout} className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};


