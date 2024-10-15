"use server"

import { revalidatePath } from "next/cache";

export async function addTodo (formData) {
    const title = formData.get("title");
    try{
        await fetch ("http://localhost:3000/api/todos" , {
        method : "POST",
        body : JSON.stringify({title}),
    });

    revalidatePath("/todos");
    }catch(err) {
        console.log(err);
    }
} 


export async function updateTodo (obj) {
    try{
        await fetch ("http://localhost:3000/api/todos" , {
        method : "PUT",
        body : JSON.stringify(obj),
    });

    revalidatePath("/todos");
    }catch(err) {
        console.log(err);
    }
} 

export async function deleteTodo (obj) {
    try{
        await fetch ("http://localhost:3000/api/todos" , {
        method : "DELETE",
        body : JSON.stringify(obj),
    });

    revalidatePath("/todos");
    }catch(err) {
        console.log(err);
    }
} 