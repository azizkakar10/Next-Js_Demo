import TodoForm from "@/components/TodoForm"
import ListItem from "@/components/ListItem"

export const metadata = {
    title : "Todos"
}   

export default async function Todos (){
    let res = await fetch("http://localhost:3000/api/todos",{
        cache : "no-cache",
    })
    res = await res.json()
    return (
        <div className="min-h-screen mt-10">
            <h1 className="text-3xl font-bold text-center">Todos</h1>
            <TodoForm/>
            {
                res.data?.map((todo) => (
                    <ListItem key={todo.id} todo={todo}/>
                ))
            }
        </div>
    )
}