import { useEffect, useState, type ChangeEvent, type FC, type FormEvent } from "react"
import { tareaStore } from "../../../../store/tareaStore"
import styles from "./Modal.module.css"
import type { Itarea } from "../../../../type/Itareas"
import { useTareas } from "../../../../hooks/useTareas"

// ===== TIPADO DE PROPS =====
type IModal = {
    handleCloseModal: VoidFunction
}

// ===== ESTADO INICIAL DEL FORMULARIO =====
const inicialState: Itarea = {
    titulo: "",
    descripcion: "",
    fechaLimite: ""
};

// ===== COMPONENTE MODAL =====
export const Modal :FC<IModal> = ({handleCloseModal}) => {

    // ===== ACCESO A ESTADO GLOBAL Y FUNCIONES =====
    const tareaActiva = tareaStore((state) => state.tareaActiva)
    const setTareaActiva = tareaStore((state) => state.setTareaActiva)
    const {crearTarea, putTareaEditar} = useTareas() 

    // ===== ESTADO LOCAL DEL FORMULARIO =====
    const [fromValues, setFromValues] = useState<Itarea>(inicialState)

    // ===== EFECTO PARA CARGAR TAREA ACTIVA EN EL FORMULARIO =====
    useEffect(()=> {
        if(tareaActiva) setFromValues(tareaActiva)
    }, [])

    // ===== MANEJO DE CAMBIOS EN LOS INPUTS =====
    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFromValues((prev) => ({  ...prev, [`${name}`]: value }))
    }

    // ===== MANEJO DE ENVÍO DEL FORMULARIO =====
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(tareaActiva){
            putTareaEditar(fromValues)
        }else {
            crearTarea({...fromValues})
        }
        setTareaActiva(null)
        handleCloseModal()
    }

  // ===== RENDERIZADO DEL MODAL =====
  return (
    <div className={styles.containerPrincipalModal} >
        <div className={styles.contentPopUp} >
            <div>
                <h3>{tareaActiva ? "Editar Tarea": "CrearTarea"} </h3>
            </div>
            <form onSubmit={handleSubmit} className={styles.formContent} >
                <div>
                    <input onChange={handleChange} value={fromValues.titulo} placeholder="Ingrese un título" type="text" required autoComplete="off" name="titulo"/>
                    <textarea onChange={handleChange} value={fromValues.descripcion} placeholder="Ingrese una descripción" required name="descripcion"/>
                    <input onChange={handleChange} value={fromValues.fechaLimite} type="date" required autoComplete="off" name="fechaLimite"/> 
                </div>
                <div className={styles.buttonCards} >
                    <button onClick={handleCloseModal}>Cancelar</button>
                    <button type="submit">{tareaActiva ? "Editar Tarea": "CrearTarea"} </button>
                </div>
            </form>
        </div>
    </div>
  )
}
