import { AppData } from '../types';

export const initialData: AppData = {
  user: {
    name: 'Juan Pérez',
    email: 'demo@finanzas.com',
    password: '123456'
  },
  ingresos: [
    // Ingresos de julio 2025
    { id: 1, fecha: '2025-07-01', categoria: 'Sueldo', descripcion: 'Salario mensual', monto: 2500 },
    { id: 2, fecha: '2025-07-05', categoria: 'Freelance', descripcion: 'Desarrollo de app móvil', monto: 800 },
    { id: 3, fecha: '2025-07-10', categoria: 'Ventas', descripcion: 'Venta de productos online', monto: 450 },
    { id: 4, fecha: '2025-07-15', categoria: 'Freelance', descripcion: 'Consultoría técnica', monto: 600 },
    { id: 5, fecha: '2025-07-20', categoria: 'Sueldo', descripcion: 'Bono por rendimiento', monto: 300 },
    { id: 6, fecha: '2025-07-25', categoria: 'Ventas', descripcion: 'Comisión por ventas', monto: 200 },
    { id: 7, fecha: '2025-07-28', categoria: 'Otros', descripcion: 'Reembolso de gastos', monto: 150 },
    
    // Ingresos de agosto 2025
    { id: 8, fecha: '2025-08-01', categoria: 'Sueldo', descripcion: 'Salario mensual', monto: 2500 },
    { id: 9, fecha: '2025-08-08', categoria: 'Freelance', descripcion: 'Diseño de logo', monto: 350 },
    { id: 10, fecha: '2025-08-12', categoria: 'Ventas', descripcion: 'Venta de curso online', monto: 180 },
    { id: 11, fecha: '2025-08-18', categoria: 'Freelance', descripcion: 'Mantenimiento web', monto: 400 },
    { id: 12, fecha: '2025-08-25', categoria: 'Sueldo', descripcion: 'Horas extras', monto: 250 },
    
    // Ingresos de septiembre 2025 (mes actual)
    { id: 13, fecha: '2025-09-01', categoria: 'Sueldo', descripcion: 'Salario mensual', monto: 2500 },
    { id: 14, fecha: '2025-09-05', categoria: 'Freelance', descripcion: 'Proyecto de e-commerce', monto: 1200 },
    { id: 15, fecha: '2025-09-10', categoria: 'Ventas', descripcion: 'Venta de productos', monto: 320 },
    { id: 16, fecha: '2025-09-15', categoria: 'Otros', descripcion: 'Premio por concurso', monto: 500 },
    { id: 17, fecha: '2025-09-20', categoria: 'Freelance', descripcion: 'Traducción de documentos', monto: 280 }
  ],
  egresos: [
    // Egresos de julio 2025
    { id: 1, fecha: '2025-07-01', categoria: 'Arriendo', descripcion: 'Alquiler apartamento', monto: 800 },
    { id: 2, fecha: '2025-07-02', categoria: 'Servicios', descripcion: 'Internet y telefonía', monto: 120 },
    { id: 3, fecha: '2025-07-03', categoria: 'Servicios', descripcion: 'Luz y gas', monto: 85 },
    { id: 4, fecha: '2025-07-05', categoria: 'Mercado', descripcion: 'Compras del supermercado', monto: 450 },
    { id: 5, fecha: '2025-07-07', categoria: 'Transporte', descripcion: 'Combustible', monto: 180 },
    { id: 6, fecha: '2025-07-08', categoria: 'Transporte', descripcion: 'Uber y transporte público', monto: 95 },
    { id: 7, fecha: '2025-07-10', categoria: 'Entretenimiento', descripcion: 'Netflix y Spotify', monto: 35 },
    { id: 8, fecha: '2025-07-12', categoria: 'Entretenimiento', descripcion: 'Cine con amigos', monto: 120 },
    { id: 9, fecha: '2025-07-15', categoria: 'Mercado', descripcion: 'Comida para mascota', monto: 80 },
    { id: 10, fecha: '2025-07-16', categoria: 'Servicios', descripcion: 'Gimnasio mensual', monto: 60 },
    { id: 11, fecha: '2025-07-18', categoria: 'Entretenimiento', descripcion: 'Cena en restaurante', monto: 150 },
    { id: 12, fecha: '2025-07-20', categoria: 'Otros', descripcion: 'Ropa y accesorios', monto: 200 },
    { id: 13, fecha: '2025-07-22', categoria: 'Servicios', descripcion: 'Seguro de auto', monto: 180 },
    { id: 14, fecha: '2025-07-25', categoria: 'Mercado', descripcion: 'Farmacia y medicamentos', monto: 65 },
    { id: 15, fecha: '2025-07-28', categoria: 'Entretenimiento', descripcion: 'Videojuegos', monto: 45 },
    
    // Egresos de agosto 2025
    { id: 16, fecha: '2025-08-01', categoria: 'Arriendo', descripcion: 'Alquiler apartamento', monto: 800 },
    { id: 17, fecha: '2025-08-02', categoria: 'Servicios', descripcion: 'Internet y telefonía', monto: 120 },
    { id: 18, fecha: '2025-08-03', categoria: 'Servicios', descripcion: 'Luz y gas', monto: 95 },
    { id: 19, fecha: '2025-08-05', categoria: 'Mercado', descripcion: 'Compras del supermercado', monto: 380 },
    { id: 20, fecha: '2025-08-08', categoria: 'Transporte', descripcion: 'Combustible', monto: 160 },
    { id: 21, fecha: '2025-08-10', categoria: 'Entretenimiento', descripcion: 'Netflix y Spotify', monto: 35 },
    { id: 22, fecha: '2025-08-12', categoria: 'Otros', descripcion: 'Reparación de laptop', monto: 300 },
    { id: 23, fecha: '2025-08-15', categoria: 'Servicios', descripcion: 'Gimnasio mensual', monto: 60 },
    { id: 24, fecha: '2025-08-18', categoria: 'Entretenimiento', descripcion: 'Concierto', monto: 250 },
    { id: 25, fecha: '2025-08-20', categoria: 'Mercado', descripcion: 'Comida para mascota', monto: 80 },
    { id: 26, fecha: '2025-08-22', categoria: 'Otros', descripcion: 'Regalo de cumpleaños', monto: 120 },
    { id: 27, fecha: '2025-08-25', categoria: 'Servicios', descripcion: 'Seguro de auto', monto: 180 },
    { id: 28, fecha: '2025-08-28', categoria: 'Entretenimiento', descripcion: 'Cena familiar', monto: 200 },
    
    // Egresos de septiembre 2025 (mes actual)
    { id: 29, fecha: '2025-09-01', categoria: 'Arriendo', descripcion: 'Alquiler apartamento', monto: 800 },
    { id: 30, fecha: '2025-09-02', categoria: 'Servicios', descripcion: 'Internet y telefonía', monto: 120 },
    { id: 31, fecha: '2025-09-03', categoria: 'Servicios', descripcion: 'Luz y gas', monto: 110 },
    { id: 32, fecha: '2025-09-05', categoria: 'Mercado', descripcion: 'Compras del supermercado', monto: 420 },
    { id: 33, fecha: '2025-09-08', categoria: 'Transporte', descripcion: 'Combustible', monto: 170 },
    { id: 34, fecha: '2025-09-10', categoria: 'Entretenimiento', descripcion: 'Netflix y Spotify', monto: 35 },
    { id: 35, fecha: '2025-09-12', categoria: 'Otros', descripcion: 'Ropa de otoño', monto: 350 },
    { id: 36, fecha: '2025-09-15', categoria: 'Servicios', descripcion: 'Gimnasio mensual', monto: 60 },
    { id: 37, fecha: '2025-09-18', categoria: 'Entretenimiento', descripcion: 'Viaje de fin de semana', monto: 500 },
    { id: 38, fecha: '2025-09-20', categoria: 'Mercado', descripcion: 'Comida para mascota', monto: 80 },
    { id: 39, fecha: '2025-09-22', categoria: 'Otros', descripcion: 'Regalos de cumpleaños', monto: 300 },
    { id: 40, fecha: '2025-09-25', categoria: 'Servicios', descripcion: 'Seguro de auto', monto: 180 },
    { id: 41, fecha: '2025-09-28', categoria: 'Entretenimiento', descripcion: 'Cena con amigos', monto: 180 }
  ],
  historialMensual: [
    { mes: 'Jun 2025', ingresos: 2800, egresos: 1950, saldo: 850 },
    { mes: 'Jul 2025', ingresos: 4600, egresos: 2500, saldo: 2100 },
    { mes: 'Ago 2025', ingresos: 3680, egresos: 2185, saldo: 1495 },
    { mes: 'Sep 2025', ingresos: 4800, egresos: 2885, saldo: 1915 }
  ]
};


