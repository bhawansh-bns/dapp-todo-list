
const getAllTodos = async (contract:any) => {
    const todos = await contract.methods.getAllTodos().call();
    return todos;
}

export default getAllTodos;