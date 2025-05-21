import { useEffect, useState } from "react"
import { tareaStore } from "../../../../store/tareaStore"
import styles from "./ListTareas.module.css"
import { CardList } from "../CardList/CardList"
import { Modal } from "../Modal/Modal"
import type { Itarea } from "../../../../type/Itareas"
import { useTareas } from "../../../../hooks/useTareas"
export const ListTareas = () => {
    
    const setTareaActiva = tareaStore((state) => state.setTareaActiva)

    const {getTareas, tareas} = useTareas()

    useEffect(()=> {
        getTareas();
    }, []);

    const [OpenModalTarea, setOpenModalTarea] = useState(false);

    const handleOpenModalEdit = (tarea:Itarea) => {
        setTareaActiva(tarea)
        setOpenModalTarea(true)
    }

    const handleCloseModal = () => {
        setOpenModalTarea(false);
    }

    return (
        <>
            <div className={styles.containerPrincipalListTareas} >
                <div className={styles.containerTitleAndButton} >
                    <h2>Lista de tareas</h2>
                    <button onClick={() => {setOpenModalTarea(true)}}>Agregar Tareas</button>
                </div>
                <div className={styles.containerList} >
                    {tareas.length > 0 ? (
                        tareas.map((el) => <CardList
                        key={el.id}
                        handleOpenModalEdit={handleOpenModalEdit}
                        tarea={el}/>)
                    ) : ( 
                        <div>
                            <h3>No hay tareas</h3>
                        </div> 
                    )}
                </div>
            </div>
            {OpenModalTarea && <Modal handleCloseModal={handleCloseModal} />} 
        </>
    )
}
