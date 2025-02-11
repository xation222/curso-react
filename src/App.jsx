import { useEffect, useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  // definindo valores iniciais
  const [tasks, setTasks] = useState([
    {
    id: 1,
    tittle: "Estudar programação",
    description: "Estudar programação para se tornar desenvolvedor full-stack.",
    isCompleted: false
  },
  {
    id: 2,
    tittle: "Estudar Inglês",
    description: "Estudar inglês para se tornar fluente.",
    isCompleted: false
  },
  {
    id: 3,
    tittle: "Estudar matemática",
    description: "Estudar matemática para passar raiva",
    isCompleted: false
  }
])

  // mudar aparencia ao clicar
  function onTaskClick(taskId) {
    const newTask = tasks.map(task => {
      // atualizar interface ao clicar na tarefa
      if (task.id === taskId) {
        return {
          ...task, isCompleted: !task.isCompleted
        }
      }

      return task
    });
    setTasks(newTask);
  }

  // monitoramento, pode apagar depois
  useEffect(() => {
    console.log(tasks)
  })

  // deletar tasks
  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  // adicionar tasks
  function addTasks(newTittle, newDescription) {
    setTasks([...tasks, {id:tasks.length + 1, tittle: newTittle, description: newDescription, isCompleted: false}])
  }
  
  // retorno
  return (
    <div className='w-screen h-screen flex p-6 justify-center bg-slate-500'>
    <div className='w-[500px]'>
      <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
      <AddTask addTasks={addTasks}/>
      <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask}/>
    </div>
    </div>
  )
}

export default App
