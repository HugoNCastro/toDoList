import { Dispatch, SetStateAction, useState } from 'react';
import Trash from '../assets/trash.svg';
import styles from './Tasks.module.css';

interface Task {
  content: string;
  completed: boolean;
  excluded: boolean;
}

interface TasksProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>
}

export function Tasks({ tasks, setTasks }: TasksProps) {
  console.log(tasks, 'tasks')

  function onCompletedTask(content: string) {    
    const tasksWithoutConcludedOne = tasks.findIndex(task => {
      return task.content === content
    })
    
    const tempTasks = [...tasks];
    tempTasks[tasksWithoutConcludedOne].completed = !tempTasks[tasksWithoutConcludedOne].completed;

    setTasks(tempTasks);
 }

  function onDeletedTask(contentToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.content !== contentToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }


  return (
    <>
      {tasks.map(task => {
        return (
          <div className={styles.item} key={task.content}>
            <button className={task.completed ? styles.concluded : styles.default} onClick={() => onCompletedTask(task.content)} />
            <p className={task.completed ? styles.contentConcluded : styles.contentDefault}>
              {task.content}
            </p>
            <button className={styles.trash} onClick={() => onDeletedTask(task.content)}>
              <img src={Trash} alt="Deletar" />
            </button>
          </div>
        )
      })}
    </>
  )
}