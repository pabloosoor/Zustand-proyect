// ===== IMPORTACIONES Y TIPOS =====
import type { Itarea } from "../../../../type/Itareas"
import type { FC } from 'react'
import styles from "./CardList.module.css"
import { useTareas } from "../../../../hooks/useTareas"

// ===== TIPADO DE PROPS =====
type IcardList = {
    tarea: Itarea
    handleOpenModalEdit:(tarea:Itarea) =>void 
}

// ===== COMPONENTE CARDLIST =====
export const CardList: FC<IcardList> = ({tarea, handleOpenModalEdit}) => {

    // ===== ACCESO A FUNCIONES DE TAREAS =====
    const {eliminarUnaTarea} = useTareas()
    const eliminarTareaById = () => {
        eliminarUnaTarea(tarea.id!)
    }
    const editarTarea = () => {
        handleOpenModalEdit(tarea)
    }

    // ===== FORMATEO DE FECHA =====
    const formatearFecha = (fechaISO: string) => {
        const fecha = new Date(fechaISO);
        const opciones: Intl.DateTimeFormatOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return fecha.toLocaleDateString('es-ES', opciones);
    }

    // ===== RENDERIZADO DE LA TARJETA =====
    return (
        <div className={styles.containerCard} >
            <div>
                <h3>
                    {tarea.titulo}
                </h3>
                <p>{tarea.descripcion}</p>
                <p>
                    <b>Fecha Límite: {formatearFecha(tarea.fechaLimite)}</b>
                </p>
            </div>
            <div className={styles.actionCard} >
                <button onClick={eliminarTareaById}>Eliminar</button>
                <button onClick={editarTarea}>Editar</button>
            </div>
        </div>
    )
}
