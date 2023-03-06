import { ChangeEvent, Dispatch, FormEvent, InvalidEvent, SetStateAction, useState } from 'react';
import plus from '../assets/plus.svg';
import styles from './Input.module.css';

interface Task {
  content: string;
  completed: boolean;
  excluded: boolean;
}

interface props {
  setTasks: Dispatch<SetStateAction<Task[]>>
}


export function Input({ setTasks }: props){
  const [newTask, setNewTask] = useState<Task>({
    content: '',
    completed: false,
    excluded: false
  });

  function handleCreateTask(event: FormEvent){
    event.preventDefault();
    setTasks((state: Task[]) => {
      return [...state, newTask];
    })
    setNewTask({} as Task)
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setNewTask({
      content: event.target.value, 
      completed: false,
      excluded: false,
    })
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Esse é um campo obrigatório');
  }

  return (
    <div className={styles.containerForm}>
      <form className={styles.form} onSubmit={handleCreateTask}>
        <input 
          type="text" 
          className={styles.input}
          placeholder="Adiciona uma nova tarefa"
          value={newTask.content}
          onChange={handleNewTaskChange}
          required
          onInvalid={handleNewTaskInvalid}
          
          
          />
        <button type='submit' className={styles.button}>
          Criar
          <img src={plus} alt="Criar" />
        </button>
      </form>
    </div>
  )
}