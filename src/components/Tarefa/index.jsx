import { Component } from 'react';
import './style.css'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'

export default class Tarefa extends Component{
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1
    };

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas],
        });
    }
    handleEdit = (e, index) => {
       console.log('Index Edit: ' + index)
       const { tarefas } = this.state;

       this.setState({
        index,
        novaTarefa: tarefas[index],
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if(tarefas.indexOf(novaTarefa) !== -1) return;

        const novasTarefas = [...tarefas];

        if(index === -1){
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: '',
            });
        } else {
            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: [ ...novasTarefas],
                index: -1,
            });
        }
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
                        onChange={this.handleChange} 
                        type="text"
                        value={novaTarefa}
                    />
                    <button 
                        type='submit'>
                        <FaPlus />
                    </button>
                </form>

                <ul className='tarefas'>
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa}>
                            {tarefa}
                            <div>
                                <FaEdit 
                                    className='edit'
                                    onClick={(e) => this.handleEdit(e, index)}    
                                />
                                <FaTrash 
                                    className='delete' 
                                    onClick={(e) => this.handleDelete(e, index)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );       
    }
}