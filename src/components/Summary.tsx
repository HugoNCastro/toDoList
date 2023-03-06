import styles from './Summary.module.css';

interface Task {
  content: string;
  completed: boolean;
  excluded: boolean;
}

interface SummaryProps {
  tasks: Task[];
}

export function Summary({ tasks }: SummaryProps){
  const createdTasks = tasks.length;
  const concludedTasks = tasks.filter(task => task.completed === true).length;

  return (
    <div className={styles.containerTasks}>
      <div className={styles.tasks}>
        <div className={styles.created}>
          Tarefas criadas <p>{createdTasks}</p>
        </div>
        <div className={styles.completed}>
          Tarefas concluídas <p>{concludedTasks}</p>
        </div>
      </div>
      <hr className={styles.divider}/>
    </div>
  )
}