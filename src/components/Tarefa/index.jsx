import { useState } from 'react';
import './style.css'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'

export function Tarefa(){
    const tarefas = [
        'lavar o carro',
        'ir na feira',
        'estudar codigos'
    ];

    const [item, setItem] = useState("");

    return(
        <div className="main">
            <h1>Lista de Tarefa</h1>

            <form action="#" className="form">
                <span>{item}</span>
                <input 
                    type="text"
                    value={setItem}
                />
                <button type='submit'> <FaPlus /></button>
            </form>

            <ul className='tarefas'>
                {tarefas.map((tarefa) => (
                    <li key={tarefa}>
                        {tarefa}
                        <div>
                            <FaEdit className='edit'/>
                            <FaTrash className='delete' />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );       
}