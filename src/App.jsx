import { useEffect, useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Detail from './components/detail'

function App() {
  // definindo valores iniciais
  const [visible, setVisible] = useState(false)
  const [details, setDetails] = useState([{
    idDetails: -1,
    textDetails: ""
  }])
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

  // mudar aparência ao clicar
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

  //! monitoramento, pode apagar depois
  useEffect(() => {
    console.log(details)
  })

  // deletar tasks e limpar descrição
  function deleteTask(taskId) {
    if (taskId === details[0].idDetails) {
      setDetails([{idDetails: -1, textDetails: ""}])
    }
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  // adicionar tasks
  function addTasks(newTittle, newDescription) {
    setTasks([...tasks, {id:tasks.length + 1, tittle: newTittle, description: newDescription, isCompleted: false}])
  }

  // mostrar e ocultar detalhes
  function showDetails(taskId) {
    if (visible && taskId === details[0].idDetails) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    tasks.map(task => {
      // atualizar interface ao clicar na tarefa
      if (task.id === taskId) {
        setDetails([{idDetails: taskId, textDetails: task.description}])
      }
    })
  }
  
  // retorno
  return (
    <div className='w-screen h-screen flex p-6 justify-center bg-slate-500'>
    <div className='w-[600px]'>
      <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
      <div className='flex gap-2 justify-center'>
        <div className={`transition-all duration-500 z-1 ${visible ? 'sm:glow sm:translate-x-[0%] glow translate-x-[-42%]':'sm:flex-none sm:translate-x-[45%] flex-none translate-x-[45%]'}`}>
          <AddTask addTasks={addTasks}/>
          <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask} showDetails={showDetails} visible={visible} details={details}/>
        </div>
        <div className={`transition-all duration-500 z-0 ${visible ? 'sm:opacity-100 sm:translate-x-0 opacity-100 translate-x-[-45%]' : 'sm:opacity-0 sm:translate-x-[-100%] opacity-0 translate-x-[-100%]'}`}>
          <Detail details={details} ></Detail>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
