export type Movimiento = {
  id: number;
  fecha: string;
  categoria: string;
  descripcion: string;
  monto: number;
};

export type HistorialMensual = {
  mes: string;
  ingresos: number;
  egresos: number;
  saldo: number;
};

export type AppUser = {
  name: string;
  email: string;
  password: string;
};

export type AppData = {
  user: AppUser;
  ingresos: Movimiento[];
  egresos: Movimiento[];
  historialMensual: HistorialMensual[];
};

export type UsersData = {
  users: AppUser[];
  currentUser: AppUser | null;
};

export type ModalKey = 'addIncome' | 'addExpense' | null;


