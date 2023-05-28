import React from 'react';
import PropTypes from 'prop-types';
import './form.css'
import { FaPlus } from 'react-icons/fa';

export default function Form(
    {handleChange, handleSubmit, novaTarefa}
){
    return(
        <form onSubmit={handleSubmit} className="form">
            <input 
                onChange={handleChange} 
                type="text"
                value={novaTarefa}
            />
            <button 
                type='submit'>
                <FaPlus />
            </button>
        </form>
    )
}

// Form.defaultProps = {
//     novaTarefa: 'Valor padrão'
// }

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}