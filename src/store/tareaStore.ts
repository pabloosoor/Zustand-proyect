import { create } from "zustand";
import type { Itarea } from "../type/Itareas";

interface ItareaStore {
    tareas: Itarea[]
    tareaActiva:Itarea|null
    setTareaActiva: (tareaActiva: Itarea|null) => void;
    setArrayTareas: (arrayDeTareas: Itarea[]) => void;
    agregarNuevaTarea: (nuevaTarea: Itarea) => void;
    editarNuevaTarea: (tareaActualizada: Itarea) => void;
    eliminarTarea: (idTarea: string) => void;
}

export const tareaStore = create<ItareaStore>((set)=>({
    tareas:[],
    tareaActiva: null,
    setTareaActiva: (tareaActivaIn) => set(()=>({tareaActiva: tareaActivaIn})),
    setArrayTareas:(arrayDeTareas) => set(()=>({tareas: arrayDeTareas})),
    agregarNuevaTarea: (nuevaTarea) => set((state)=>({tareas: [...state.tareas, nuevaTarea]})),
    editarNuevaTarea: (tareaEditada) =>
        set((state) => {
        const arregloTareas = state.tareas.map((tarea) =>
            tarea.id === tareaEditada.id ? tareaEditada : tarea
        );
        return { tareas: arregloTareas };
    }),
    eliminarTarea: (idTarea) =>
        set((state) => {
        const arregloTareas = state.tareas.filter((tarea) =>
            tarea.id !== idTarea 
        );
        return { tareas: arregloTareas };
    }),
}))