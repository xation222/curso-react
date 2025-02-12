import { useState } from "react";

function AddTask (props) {
    // definindo valor inicial
    const [inputValueTitle, setInputValueTitle] = useState("");
    const [inputValueDescription, setInputValueDescription] = useState("");


    // Chama a função de submit quando pressionar Enter
    const KeyDown = (e) => {
        if (e.key === "Enter") {
            submitTask(inputValueTitle, inputValueDescription);
        }
      };
    
    // enviando valores pra lista
    function submitTask(tit, des) {
        console.log(tit, des)
        if (tit && des) {
            props.addTasks(tit, des)
            setInputValueTitle(""); // Limpa o input após o envio
            setInputValueDescription(""); // Limpa o input após o envio
            limpar
        } else {
            return alert("Preencha o Título e a Descrição da tarefa antes de adicioná-la")
        }
    }

    // limpando essa merda de input
    function limpar() {
        inputRef.current.value = "";
        //ReactDOM.findDOMNode().getElementsByClassName('input') // Returns the elements
    }

    // valor titulo
    function handleInputChangeTitle(e) {
        setInputValueTitle(e.target.value);
    }

    // valor descrição
    function handleInputChangeDescription(e) {
        setInputValueDescription(e.target.value);
    }

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-2xl mb-3 mt-3 flex gap-2 flex-col">        

            <input 
                placeholder="Título da Tarefa" className="w-full bg-slate-100 p-3 m-0"
                onKeyDown={KeyDown}
                onChange={handleInputChangeTitle}
                value={inputValueTitle}
                >
            </input>

            <input 
                placeholder="Descrição" className="w-full bg-slate-100 p-3 m-0"
                onKeyDown={KeyDown}
                onChange={handleInputChangeDescription}
                value={inputValueDescription}
                >

            </input>

            <button className="bg-slate-400 text-white rounded-md w-full h-[48px] items-center flex justify-center" onClick={() => submitTask(inputValueTitle, inputValueDescription)}>
                Adicionar Tarefa
            </button>
        </div>
    )
}

export default AddTask