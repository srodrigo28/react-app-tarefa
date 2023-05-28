import React from 'react';
import './Tarefas.css';
import { FaEdit, FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
    return (
        <ul className='tarefas'>
            {tarefas.map((tarefa, index) => (
                <li key={tarefa}>
                    {tarefa}
                    <div>
                        <FaEdit
                            className='edit'
                            onClick={(e) => handleEdit(e, index)}
                        />
                        <FaTrash
                            className='delete'
                            onClick={(e) => handleDelete(e, index)}
                        />
                    </div>
                </li>
            ))}
        </ul>
    )
}

Tarefas.PropTypes = {
    tarefas: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}