import { useShallow } from "zustand/shallow"
import { tareaStore } from "../store/tareaStore"
import type { Itarea } from "../type/Itareas"
import Swal from "sweetalert2"
import { eliminarTareaPorId, getAllTareas, postNuevaTarea, editarTarea } from "../http/tareas"

export const useTareas = () => {

    const {tareas, setArrayTareas, agregarNuevaTarea, eliminarTarea, editarNuevaTarea} = tareaStore(useShallow((state) => ({
        tareas: state.tareas,
        setArrayTareas: state.setArrayTareas,
        agregarNuevaTarea: state.agregarNuevaTarea,
        eliminarTarea: state.eliminarTarea,
        editarNuevaTarea: state.editarNuevaTarea
    })))

    const getTareas = async () => {
        const data = await getAllTareas();
        if (data) setArrayTareas(data);
    }
    
    const crearTarea = async (nuevaTarea:Itarea) => {
        agregarNuevaTarea(nuevaTarea)
        try {
            await postNuevaTarea(nuevaTarea);
            Swal.fire("Éxito", "tarea creada correctamente")
        } catch (error) {
            eliminarTarea(nuevaTarea.id!)
            console.log("algo salio mal al crear la tarea")
        }
    }

    const putTareaEditar = async (tareaEditada:Itarea) => {

        const estadoPrevio = tareas.find((el) => el.id == tareaEditada.id)

        editarNuevaTarea(tareaEditada)

       try {
            await editarTarea(tareaEditada);
            Swal.fire("Éxito", "tarea actualizada correctamente")
       } catch (error) {
           if(estadoPrevio) editarNuevaTarea(estadoPrevio)
            console.log("algo salio mal al editar una tarea")
       }
    }

    const eliminarUnaTarea = async (idTarea:string) => {
        const estadoPrevio = tareas.find((el) => el.id == idTarea)
        const confirm = await Swal.fire({
            title: "¿Estas seguro?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "Cancelar"
        })

        if(!confirm.isConfirmed) return;
        eliminarTarea(idTarea)

       try {
            await eliminarTareaPorId(idTarea);
            Swal.fire("Eliminado", "tarea eliminada correctamente")
       } catch (error) {
            if(estadoPrevio) agregarNuevaTarea(estadoPrevio)
            console.log("algo salio mal al eliminar una tarea")
       }
    }

  return {
    getTareas,
    crearTarea,
    putTareaEditar,
    eliminarUnaTarea,
    tareas
  }
  
}
