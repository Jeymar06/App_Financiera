
# 💰 Aplicación de Gestión Financiera Personal

Una aplicación web moderna y completa para la gestión de finanzas personales, desarrollada con React, TypeScript y Vite.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Uso de la Aplicación](#-uso-de-la-aplicación)
- [Arquitectura y Diseño](#-arquitectura-y-diseño)
- [Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [Despliegue](#-despliegue)


## ✨ Características

### 🔐 Sistema de Autenticación
- **Login de usuarios existentes** con validación de credenciales
- **Registro de nuevos usuarios** con validaciones de seguridad
- **Recuperación de contraseña** (simulada)
- **Datos de prueba** para demostración rápida
- **Almacenamiento persistente** de usuarios en localStorage

### 💼 Gestión Financiera
- **Dashboard interactivo** con resumen financiero
- **Gestión de ingresos** con categorías predefinidas
- **Gestión de egresos** con múltiples categorías
- **Historial financiero** con gráficos de tendencias
- **Perfil de usuario** con cambio de contraseña
- **Datos ficticios realistas** para demostración

### 📊 Visualización de Datos
- **Gráficos de barras** para comparación de ingresos/egresos
- **Gráficos de líneas** para tendencias temporales
- **Tarjetas de resumen** con métricas clave
- **Interfaz responsive** para todos los dispositivos

## 🛠 Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca principal para la interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Herramienta de construcción y desarrollo
- **Tailwind CSS** - Framework de estilos utilitarios
- **Lucide React** - Iconografía moderna y consistente

### Librerías de Gráficos
- **Recharts** - Biblioteca para gráficos interactivos
  - BarChart para comparaciones
  - LineChart para tendencias
  - ResponsiveContainer para adaptabilidad

### Herramientas de Desarrollo
- **ESLint** - Linter para calidad de código
- **Prettier** - Formateador de código
- **Node.js** - Entorno de ejecución
- **npm** - Gestor de paquetes

### Despliegue
- **Vercel** - Plataforma de despliegue
- **GitHub Pages** - Hosting estático (configurado)

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Modal.tsx        # Modal para formularios
│   └── Sidebar.tsx      # Barra lateral de navegación
├── data/                # Datos iniciales y configuración
│   └── initialData.ts   # Datos ficticios del usuario demo
├── types/               # Definiciones de tipos TypeScript
│   └── index.ts         # Interfaces y tipos principales
├── utils/               # Utilidades y helpers
│   └── format.ts        # Funciones de formateo
├── views/               # Páginas principales de la aplicación
│   ├── Dashboard.tsx    # Panel principal con resumen
│   ├── Ingresos.tsx     # Gestión de ingresos
│   ├── Egresos.tsx      # Gestión de egresos
│   ├── Historial.tsx    # Historial con gráficos
│   └── Perfil.tsx       # Perfil de usuario
├── App.tsx              # Componente principal
├── main.tsx             # Punto de entrada de la aplicación
├── index.html           # Plantilla HTML
├── vite.config.ts       # Configuración de Vite
├── tsconfig.json        # Configuración de TypeScript
└── package.json         # Dependencias y scripts
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd src
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construcción para producción
npm run preview  # Vista previa del build
```

## 📱 Uso de la Aplicación

### Acceso Inicial
1. **Login rápido**: Usa las credenciales demo
   - Email: `demo@finanzas.com`
   - Contraseña: `123456`

2. **Registro nuevo**: Crea una cuenta personalizada
   - Nombre completo
   - Email único
   - Contraseña (mínimo 6 caracteres)

### Funcionalidades Principales

#### Dashboard
- **Resumen financiero** con totales de ingresos y egresos
- **Saldo actual** calculado automáticamente
- **Gráficos interactivos** de tendencias mensuales
- **Tarjetas de métricas** con iconos descriptivos

#### Gestión de Ingresos
- **Agregar ingresos** con fecha, categoría, descripción y monto
- **Categorías disponibles**: Sueldo, Freelance, Ventas, Otros
- **Validación de datos** en tiempo real
- **Lista de transacciones** con opción de eliminar

#### Gestión de Egresos
- **Agregar egresos** con fecha, categoría, descripción y monto
- **Categorías disponibles**: Arriendo, Mercado, Transporte, Entretenimiento, Servicios, Otros
- **Validación de datos** en tiempo real
- **Lista de transacciones** con opción de eliminar

#### Historial Financiero
- **Gráficos de líneas** para tendencias temporales
- **Comparación mensual** de ingresos vs egresos
- **Datos históricos** de los últimos meses

#### Perfil de Usuario
- **Información personal** del usuario
- **Cambio de contraseña** con validación
- **Datos de la cuenta** actual

## 🏗 Arquitectura y Diseño

### Patrón de Arquitectura
- **Component-Based Architecture**: Aplicación construida con componentes React reutilizables
- **State Management**: Uso de useState y useEffect para gestión de estado local
- **Props Drilling**: Comunicación entre componentes mediante props
- **Local Storage**: Persistencia de datos en el navegador

### Principios de Diseño
- **Responsive Design**: Adaptable a todos los tamaños de pantalla
- **Mobile-First**: Diseño optimizado para dispositivos móviles
- **Accessibility**: Contraste adecuado y navegación por teclado
- **User Experience**: Interfaz intuitiva y flujos de usuario claros

### Estructura de Datos
```typescript
// Usuario
interface AppUser {
  name: string;
  email: string;
  password: string;
}

// Movimiento financiero
interface Movimiento {
  id: number;
  fecha: string;
  categoria: string;
  descripcion: string;
  monto: number;
}

// Datos de la aplicación
interface AppData {
  user: AppUser;
  ingresos: Movimiento[];
  egresos: Movimiento[];
  historialMensual: HistorialMensual[];
}
```

## 🔧 Funcionalidades Implementadas

### Sistema de Autenticación
- ✅ **Login con validación** de credenciales
- ✅ **Registro de usuarios** con validaciones de seguridad
- ✅ **Recuperación de contraseña** (simulada)
- ✅ **Almacenamiento persistente** de usuarios
- ✅ **Logout** con limpieza de sesión

### Gestión de Datos
- ✅ **CRUD completo** para ingresos y egresos
- ✅ **Validación de formularios** en tiempo real
- ✅ **Fechas automáticas** con fecha actual por defecto
- ✅ **Cálculos automáticos** de totales y saldos
- ✅ **Persistencia local** con localStorage

### Interfaz de Usuario
- ✅ **Dashboard interactivo** con métricas clave
- ✅ **Formularios modales** para agregar transacciones
- ✅ **Navegación lateral** con sidebar
- ✅ **Gráficos interactivos** con Recharts
- ✅ **Diseño responsive** con Tailwind CSS

### Datos de Demostración
- ✅ **Datos ficticios realistas** para el usuario demo
- ✅ **Historial de 3 meses** (julio-septiembre 2025)
- ✅ **17 transacciones de ingresos** variadas
- ✅ **41 transacciones de egresos** detalladas
- ✅ **Progresión temporal** lógica y coherente

## 🌐 Despliegue

### Vercel 
1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Desplegar**
   ```bash
   vercel --prod
   ```

3. **Configurar dominio personalizado** (opcional)


### GitHub Pages
1. **Subir código** a repositorio GitHub
2. **Habilitar GitHub Pages** en configuración
3. **Configurar workflow** de despliegue automático

## 📊 Métricas del Proyecto

- **Líneas de código**: ~1,200 líneas
- **Componentes React**: 8 componentes
- **Páginas**: 5 vistas principales
- **Dependencias**: 15 paquetes npm
- **Tamaño del build**: ~560 KB (comprimido: ~167 KB)
- **Tiempo de desarrollo**: ~X horas


## 📞 Contacto

**Desarrollador**: Jeider Torres
**Email**: [jeidertorres3@gmailcom.com]
**GitHub**: [Jeymar06]

---
**https://finanzas-mspz0lafs-jeider-torres-projects.vercel.app**
**https://claude.ai/public/artifacts/48c2efd4-dc36-4bfe-bb56-c0e695ee65d9?fullscreen=false**
**https://vercel.com/jeider-torres-projects/finanzas-app/Ce2xETJrQgKYKqaEpGPCUt39cURJ**
---
*Desarrollado con ❤️ usando React, TypeScript y Vite*

