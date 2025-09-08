import React, { useEffect, useMemo, useState, FormEvent } from 'react';
import { Sidebar } from './components/Sidebar';
import { Modal } from './components/Modal';
import { Dashboard } from './views/Dashboard';
import { Ingresos } from './views/Ingresos';
import { Egresos } from './views/Egresos';
import { Historial } from './views/Historial';
import { Perfil } from './views/Perfil';
import { AppData, Movimiento, ModalKey, UsersData, AppUser } from './types';
import { initialData } from './data/initialData';
import { Mail, Lock, DollarSign, User, UserPlus } from 'lucide-react';

export const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'dashboard' | 'ingresos' | 'egresos' | 'historial' | 'perfil'>('dashboard');
  const [data, setData] = useState<AppData>(initialData);
  const [showModal, setShowModal] = useState<ModalKey>(null);
  const [formData, setFormData] = useState<Partial<Movimiento>>({});
  const [loginForm, setLoginForm] = useState<{ email: string; password: string }>({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState<{ name: string; email: string; password: string; confirmPassword: string }>({ name: '', email: '', password: '', confirmPassword: '' });
  const [recoveryEmail, setRecoveryEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [showRecovery, setShowRecovery] = useState<boolean>(false);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [usersData, setUsersData] = useState<UsersData>({ users: [initialData.user], currentUser: null });

  const totalIngresos = useMemo(() => data.ingresos.reduce((sum, item) => sum + item.monto, 0), [data.ingresos]);
  const totalEgresos = useMemo(() => data.egresos.reduce((sum, item) => sum + item.monto, 0), [data.egresos]);
  const saldoActual = useMemo(() => totalIngresos - totalEgresos, [totalIngresos, totalEgresos]);

  // Función para obtener la fecha actual en formato YYYY-MM-DD
  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = usersData.users.find(u => u.email === loginForm.email && u.password === loginForm.password);
    if (user) {
      setUsersData(prev => ({ ...prev, currentUser: user }));
      setData(prev => ({ ...prev, user }));
      setIsAuthenticated(true);
      setMessage('');
    } else {
      setMessage('Email o contraseña incorrectos');
    }
  };

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validaciones
    if (registerForm.password !== registerForm.confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }
    
    if (registerForm.password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    
    // Verificar si el email ya existe
    const existingUser = usersData.users.find(u => u.email === registerForm.email);
    if (existingUser) {
      setMessage('Este email ya está registrado');
      return;
    }
    
    // Crear nuevo usuario
    const newUser: AppUser = {
      name: registerForm.name,
      email: registerForm.email,
      password: registerForm.password
    };
    
    // Agregar usuario a la lista
    setUsersData(prev => ({ 
      ...prev, 
      users: [...prev.users, newUser],
      currentUser: newUser
    }));
    
    // Crear datos iniciales para el nuevo usuario
    const newUserData: AppData = {
      user: newUser,
      ingresos: [],
      egresos: [],
      historialMensual: []
    };
    
    setData(newUserData);
    setIsAuthenticated(true);
    setMessage('¡Registro exitoso! Bienvenido a tu panel financiero');
    setRegisterForm({ name: '', email: '', password: '', confirmPassword: '' });
    
    setTimeout(() => setMessage(''), 3000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('dashboard');
    setLoginForm({ email: '', password: '' });
    setUsersData(prev => ({ ...prev, currentUser: null }));
    setMessage('');
  };

  const handlePasswordRecovery = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(`Se ha enviado un correo de recuperación a ${recoveryEmail}`);
    setRecoveryEmail('');
    setTimeout(() => {
      setShowRecovery(false);
      setMessage('');
    }, 3000);
  };

  const handleChangePassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData(prev => ({ ...prev, user: { ...prev.user, password: newPassword } }));
    setMessage('Contraseña cambiada exitosamente');
    setNewPassword('');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleAddIncome = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newIncome: Movimiento = {
      id: Date.now(),
      fecha: String(formData.fecha || getCurrentDate()),
      categoria: String(formData.categoria),
      descripcion: String(formData.descripcion),
      monto: parseFloat(String(formData.monto))
    };
    setData(prev => ({ ...prev, ingresos: [...prev.ingresos, newIncome] }));
    setShowModal(null);
    setFormData({});
  };

  const handleAddExpense = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newExpense: Movimiento = {
      id: Date.now(),
      fecha: String(formData.fecha || getCurrentDate()),
      categoria: String(formData.categoria),
      descripcion: String(formData.descripcion),
      monto: parseFloat(String(formData.monto))
    };
    setData(prev => ({ ...prev, egresos: [...prev.egresos, newExpense] }));
    setShowModal(null);
    setFormData({});
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem('finance_app_data');
      if (raw) setData(JSON.parse(raw));
      
      const usersRaw = localStorage.getItem('finance_app_users');
      if (usersRaw) setUsersData(JSON.parse(usersRaw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('finance_app_data', JSON.stringify(data));
    } catch {}
  }, [data]);

  useEffect(() => {
    try {
      localStorage.setItem('finance_app_users', JSON.stringify(usersData));
    } catch {}
  }, [usersData]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Gestión Financiera</h1>
            <p className="text-gray-600">Administra tus finanzas personales</p>
          </div>

          {!showRecovery && !showRegister ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input type="email" value={loginForm.email} onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="demo@finanzas.com" autoComplete="email" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input type="password" value={loginForm.password} onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="123456" autoComplete="current-password" required />
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium">Iniciar Sesión</button>
              <button type="button" onClick={() => { setLoginForm({ email: 'demo@finanzas.com', password: '123456' }); setTimeout(() => { setIsAuthenticated(true); }, 100); }} className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm">🚀 Login Rápido (Demo)</button>
              <div className="flex space-x-2">
                <button type="button" onClick={() => setShowRegister(true)} className="flex-1 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors text-sm flex items-center justify-center">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Registrarse
                </button>
                <button type="button" onClick={() => setShowRecovery(true)} className="flex-1 text-blue-500 text-sm hover:text-blue-700">¿Olvidaste tu contraseña?</button>
              </div>
            </form>
          ) : showRegister ? (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input type="text" value={registerForm.name} onChange={(e) => setRegisterForm(prev => ({ ...prev, name: e.target.value }))} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Tu nombre completo" autoComplete="name" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input type="email" value={registerForm.email} onChange={(e) => setRegisterForm(prev => ({ ...prev, email: e.target.value }))} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="tu@email.com" autoComplete="email" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input type="password" value={registerForm.password} onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Mínimo 6 caracteres" autoComplete="new-password" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input type="password" value={registerForm.confirmPassword} onChange={(e) => setRegisterForm(prev => ({ ...prev, confirmPassword: e.target.value }))} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Repite tu contraseña" autoComplete="new-password" required />
                </div>
              </div>
              <button type="submit" className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors font-medium">Crear Cuenta</button>
              <button type="button" onClick={() => setShowRegister(false)} className="w-full text-gray-500 text-sm hover:text-gray-700">¿Ya tienes cuenta? Iniciar sesión</button>
            </form>
          ) : (
            <form onSubmit={handlePasswordRecovery} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email de recuperación</label>
                <input type="email" value={recoveryEmail} onChange={(e) => setRecoveryEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="demo@finanzas.com" required />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Enviar Email de Recuperación</button>
              <button type="button" onClick={() => { setShowRecovery(false); setShowRegister(false); }} className="w-full text-gray-500 text-sm hover:text-gray-700">Volver al login</button>
            </form>
          )}

          {message && (
            <div className={`mt-4 p-3 rounded-lg text-sm ${message.includes('enviado') || message.includes('exitosamente') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{message}</div>
          )}

          {!showRegister && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
              <p className="font-medium mb-2">Datos de prueba:</p>
              <p>Email: demo@finanzas.com</p>
              <p>Contraseña: 123456</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar userName={data.user.name} currentView={currentView} onChangeView={setCurrentView} onLogout={handleLogout} />
      <main className="ml-64 flex-1 p-8">
        {currentView === 'dashboard' && <Dashboard data={data} totalIngresos={totalIngresos} totalEgresos={totalEgresos} saldoActual={saldoActual} />}
        {currentView === 'ingresos' && (
          <Ingresos data={data} onAdd={() => setShowModal('addIncome')} onDelete={(id) => setData(prev => ({ ...prev, ingresos: prev.ingresos.filter(i => i.id !== id) }))} />
        )}
        {currentView === 'egresos' && (
          <Egresos data={data} onAdd={() => setShowModal('addExpense')} onDelete={(id) => setData(prev => ({ ...prev, egresos: prev.egresos.filter(i => i.id !== id) }))} />
        )}
        {currentView === 'historial' && <Historial data={data} />}
        {currentView === 'perfil' && (
          <Perfil data={data} newPassword={newPassword} message={message} setNewPassword={setNewPassword} onSubmit={handleChangePassword} />
        )}
      </main>

      {showModal === 'addIncome' && (
        <Modal title="Agregar Ingreso" onClose={() => setShowModal(null)}>
          <form onSubmit={handleAddIncome} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
              <input type="date" value={formData.fecha || getCurrentDate()} onChange={(e) => setFormData(prev => ({ ...prev, fecha: e.target.value }))} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
              <select value={formData.categoria || ''} onChange={(e) => setFormData(prev => ({ ...prev, categoria: e.target.value }))} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
                <option value="">Seleccionar...</option>
                <option value="Sueldo">Sueldo</option>
                <option value="Freelance">Freelance</option>
                <option value="Ventas">Ventas</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
              <input type="text" value={formData.descripcion || ''} onChange={(e) => setFormData(prev => ({ ...prev, descripcion: e.target.value }))} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Descripción del ingreso" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Monto</label>
              <input type="number" step="0.01" value={formData.monto || ''} onChange={(e) => setFormData(prev => ({ ...prev, monto: parseFloat(e.target.value) || 0 } as Partial<Movimiento>))} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="0.00" required />
            </div>
            <div className="flex space-x-3 pt-4">
              <button type="submit" className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">Agregar Ingreso</button>
              <button type="button" onClick={() => setShowModal(null)} className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors">Cancelar</button>
            </div>
          </form>
        </Modal>
      )}

      {showModal === 'addExpense' && (
        <Modal title="Agregar Egreso" onClose={() => setShowModal(null)}>
          <form onSubmit={handleAddExpense} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
              <input type="date" value={formData.fecha || getCurrentDate()} onChange={(e) => setFormData(prev => ({ ...prev, fecha: e.target.value }))} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
              <select value={formData.categoria || ''} onChange={(e) => setFormData(prev => ({ ...prev, categoria: e.target.value }))} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
                <option value="">Seleccionar...</option>
                <option value="Arriendo">Arriendo</option>
                <option value="Mercado">Mercado</option>
                <option value="Transporte">Transporte</option>
                <option value="Entretenimiento">Entretenimiento</option>
                <option value="Servicios">Servicios</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
              <input type="text" value={formData.descripcion || ''} onChange={(e) => setFormData(prev => ({ ...prev, descripcion: e.target.value }))} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Descripción del egreso" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Monto</label>
              <input type="number" step="0.01" value={formData.monto || ''} onChange={(e) => setFormData(prev => ({ ...prev, monto: parseFloat(e.target.value) || 0 } as Partial<Movimiento>))} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="0.00" required />
            </div>
            <div className="flex space-x-3 pt-4">
              <button type="submit" className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">Agregar Egreso</button>
              <button type="button" onClick={() => setShowModal(null)} className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors">Cancelar</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default App;


