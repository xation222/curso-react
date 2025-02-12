import { ChevronsLeftIcon, ChevronsRightIcon, TrashIcon } from "lucide-react"

function Tasks (props) {
    //  esse map lembra o funcionamento do for
    // quando fizer algo como renderizar uma lista como no exemplo a seguir, use key={} e coloque um id em cada item
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-2xl max-h-[300px] overflow-auto">

        {props.tasks.map((tasks) => (

            <li key={tasks.id} className="flex gap-2 ">

            <button 
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left max-h-10 max-w-50 min-w-50 overflow-hidden ${tasks.isCompleted ? "line-through" : ""}`}
            onClick={() => props.onTaskClick(tasks.id)}>
                {tasks.tittle}
            </button>

            <button 
            className="bg-slate-400 text-white p-2 rounded-md"
            onClick={() => props.deleteTask(tasks.id)}>
                <TrashIcon></TrashIcon>
            </button>

            <button 
            className={`bg-slate-400 text-white p-2 rounded-md ${props.visible && props.details[0].idDetails == tasks.id ? "bg-slate-800" : "bg-slate-400"}`} 
            onClick={() => props.showDetails(tasks.id)}>
                <ChevronsRightIcon className={props.visible && props.details[0].idDetails == tasks.id ? "hidden" : "block"}></ChevronsRightIcon>
                <ChevronsLeftIcon className={props.visible && props.details[0].idDetails == tasks.id ? "block" : "hidden"}></ChevronsLeftIcon>
            </button>



            </li>

        ))}

        </ul>
    )
}

export default Tasks