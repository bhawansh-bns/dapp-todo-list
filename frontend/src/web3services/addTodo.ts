interface TodoItem {
    id?: number;
    name: string;
    description: string;
    due_date: string;
    completed?: boolean;
}

const addTodo = async (todo:TodoItem, contract:any) => {
    const eth = window.ethereum;
    const accounts = await eth.enable();
    const tx = await contract.methods.createTodo(todo.name, todo.description, todo.due_date).send({ from: accounts[0]});
    console.log ("Transaction:", tx);
}

export default addTodo;