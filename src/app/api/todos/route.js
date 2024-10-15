const todos = [
    {
        id : 1,
        title : "Task 1",
        isCompleted : true
    },
    {
        id : 2,
        title : "Task 2",
        isCompleted : false
    },
    {
        id : 3,
        title : "Task 3",
        isCompleted : true
    },
    {
        id : 4,
        title : "Task 4",
        isCompleted : false
    },
    {
        id : 5,
        title : "Task 5",
        isCompleted : true
    },
]


export async function GET(request) {
    return Response.json({
        data : todos,
        msg : "Todos Fetched Successfully..."
    })
}

export async function POST(request) {
    const data = await request.json()
    const obj = {
        id : todos.length + 1,
        ...data,
        isCompleted : false,
    }
    todos.push(obj);
    console.log("Data From Frnt to Back" , data);
    return Response.json({
        data : todos,
        msg : "Todos Fetched Successfully..."
    })
}

export async function PUT(request) {
    const data = await request.json();
    const todoInd = todos.findIndex((todo) => todo.id == data.id);
    todos[todoInd] = data;
    return Response.json({
        data : todos,
        msg : "Todo Updated Successfully"
    })
}

export async function DELETE(request) {
    const data = await request.json()
    const ind = todos.findIndex((todo) => todo.id == data.id);
    todos.splice(ind , 1);
    return Response.json({
        data : todos,
        msg : "Todo Deleted Successfully"
    })
}