# 📝 Zustand Proyect - Gestor de Tareas

![image](https://github.com/user-attachments/assets/aea3dd1c-9372-4d3c-9807-81c4b51d837e)


¡Bienvenido/a! Este es un gestor de tareas moderno construido con **React**, **Zustand** para el manejo de estado global, y un backend simulado con **json-server**. El diseño es atractivo, responsivo y pensado para una experiencia de usuario agradable.

---

## 🚀 Características principales

- **CRUD de tareas**: Crea, edita, elimina y visualiza tareas fácilmente.
- **Estado global con Zustand**: Gestión eficiente y sencilla del estado de la aplicación.
- **Backend simulado**: Utiliza `json-server` para simular una API REST.
- **Interfaz moderna**: Estilos personalizados, animaciones y experiencia visual mejorada.
- **Notificaciones**: Feedback visual con SweetAlert2 para acciones exitosas o errores.
- **Código comentado y organizado**: Fácil de entender y mantener.

---


## 🖥️ Vista previa

![Captura de pantalla 2025-05-20 234740](https://github.com/user-attachments/assets/0299999d-667c-4a93-8b01-aebcb77fbd2d)

![Captura de pantalla 2025-05-20 234753](https://github.com/user-attachments/assets/a1012b42-87d0-4f30-94dc-8f1bab627e65)
---


## ⚙️ Instalación y uso

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/zustand-proyect.git
   cd zustand-proyect
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el backend simulado**
   ```bash
   npm run server
   ```
   Esto levantará `json-server` en [http://localhost:3001](http://localhost:3001).

4. **Inicia la aplicación React**
   ```bash
   npm run dev
   ```
   La app estará disponible en [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite).

---

## 🗂️ Estructura del proyecto

src/
│
├── components/
│ ├── ui/
│ │ ├── header/
│ │ │ ├── Modal/
│ │ │ ├── CardList/
│ │ │ ├── ListTareas/
│ │ │ └── Header/
│ └── screen/
│
├── hooks/
│ └── useTareas.tsx
├── http/
│ └── tareas.ts
├── store/
│ └── tareaStore.ts
├── type/
│ └── Itareas.ts
└── db.json

---

## 🛠️ Tecnologías utilizadas

- **React 19**
- **Zustand** (estado global)
- **TypeScript**
- **Vite** (entorno de desarrollo)
- **json-server** (API REST fake)
- **Axios** (peticiones HTTP)
- **SweetAlert2** (notificaciones)
- **CSS Modules** (estilos por componente)

---

## 📦 Scripts útiles

| Comando           | Descripción                                 |
|-------------------|---------------------------------------------|
| `npm run dev`     | Inicia la app en modo desarrollo            |
| `npm run build`   | Compila la app para producción              |
| `npm run preview` | Previsualiza la app compilada               |
| `npm run server`  | Levanta el backend simulado (json-server)   |
| `npm run lint`    | Ejecuta el linter                           |

---

## 💡 Notas

- Asegúrate de tener corriendo el backend (`npm run server`) antes de usar la app.
- El archivo `db.json` es la base de datos simulada. Puedes editarlo manualmente si lo deseas.
- El proyecto está comentado por segmentos para facilitar el aprendizaje y la colaboración.

---

