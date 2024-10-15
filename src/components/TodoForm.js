"use client"

import { addTodo } from "@/app/actions/todos"
import { useRef } from "react"

export default async function TodoForm () {
    const formRef = useRef(null);
    return(

        <form
        ref={formRef}
         action={async (FormData) => { await addTodo(FormData) 
         formRef.current?.reset();}} className="w-2/3 mx-auto flex gap-2">
                <input
                 type="text" name="title" placeholder="Add Todo" className="border-2 p-2 flex flex-grow rounded"/>
                <input type="submit" className="bg-purple-300 rounded p-2 px-4 font-bold border-2  hover:text-white" value={"Add Todo"} />
            </form>
                 )
}