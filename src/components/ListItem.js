"use client"

import { deleteTodo, updateTodo } from "@/app/actions/todos"
import { useState } from "react"

export default function ListItem ({todo}) {
    const [isEdit , setIsEdit] = useState(false)
    const [task , setTask] = useState("")

    const onComplete = async () => {
        let obj = {...todo}
        obj.isCompleted = !obj.isCompleted
        await updateTodo(obj)
    }
    const onEdit = async () => {
        if (isEdit){
            let obj = todo;
            todo.title = task
            await updateTodo(obj)
            setIsEdit(false)
            setTask("")
        }
        else{
        setIsEdit(true)
        setTask(todo.title)
        }
        
    }

    const onDelete = async () => {
        await deleteTodo ({id : todo.id})
    }

    return(
        <div className={`w-2/3 flex text-center border border-2-black mx-auto my-2 p-2 text-2xl rounded cursor-pointer
        ${todo.isCompleted ? "bg-teal-100" : "bg-white"}`}>
            {isEdit ? (<input className="flex flex-grow border rounded text-black p-1" value={task} onChange={(e) => setTask(e.target.value)} />) 
            : (<h1 className="flex flex-grow">{todo.title}</h1>)}
            

            <button onClick={onComplete} className=" bg-fuchsia-200 mx-1 px-2 p-1 text-sm rounded">
                {!todo.isCompleted ? "Done" : "Not Done"}
            </button>

            <button onClick={onEdit} className="bg-blue-200 mx-1 px-2 p-1 text-sm rounded">Edit</button>
            
            <button onClick={onDelete} className="bg-red-200 mx-1 px-2 p-1 text-sm rounded">Delete</button>
            </div>
      
    )
}