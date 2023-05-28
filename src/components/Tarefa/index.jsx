import { Component } from 'react';
import './style.css'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'

export default class Tarefa extends Component{
    state = {
        novaTarefa: '',
        tarefas: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if(tarefas.indexOf(novaTarefa) !== -1) return;

        const novasTarefas = [...tarefas];

        this.setState({
            tarefas: [...novasTarefas, novaTarefa],
        });
    }

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    }
    
    render() {
        const { novaTarefa, tarefas } = this.state;
    
        return(
            <div className="main">
                <h1>Lista de Tarefa</h1>

                <form onSubmit={this.handleSubmit} className="form">
                    <input 
                        onchange={this.handleChange} 
                        type="text"
                        value={novaTarefa}
                    />
                    <button 
                        type='submit'> 
                            <FaPlus />
                        </button>
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
    };
}