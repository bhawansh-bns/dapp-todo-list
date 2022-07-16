import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useMetaConnection, useContractConnetion } from './hooks';
import IconAdd from './components/IconAdd';
import Navbar from './components/Navbar';
import TodoItem from './components/TodoItem';
import Dialog from './components/Dialog';
import { contract_abi, contract_address } from './contracts';
import { getAllTodos, addTodo } from './web3services';
import './App.css';
import './App.scss';

interface TodoItemInterface {
    id: number;
    name: string;
    description: string;
    dueDate: string;
    completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItemInterface[]>([
    {
      id: 1,
      name: 'Learn React',
      description: 'Learn React',
      dueDate: '2020-01-01',
      completed: false
    },
    {
      id: 2,
      name: 'Learn React',
      description: 'Learn React',
      dueDate: '2020-01-01',
      completed: false
    }
  ]);

  const [open, setOpen] = useState(false);

  const [connected,] = useMetaConnection();
  const Todo = useContractConnetion(contract_abi, contract_address, (web3:any)=>{
    console.log ("Contract Conntected");
  });

  useEffect (()=>{
      if (connected) {
        getAllTodos (Todo).then ((todos:any[]|null)=>{
          if (todos&&todos.length === 0) {
            setTodos (todos);
          }
        })} 
  }, [Todo, connected])

  const onSubmit = (name:string, description:string,due_date:string)=>{
    console.log (name, description, due_date);
    addTodo ({
      name,
      description,
      due_date,
    }, Todo)
  }
  

  return (
    <div className="App bg-color-primary">
      <Navbar name="ToDo" />
      <section className={"container"+(todos.length===0?" empty":"")}>
        <div className="todo-list">
          {
           
                todos.length === 0?<EmtpyTodo setOpen={setOpen} />:<NonEmptyTodo todos={todos} setOpen={setOpen} />
        
          }
        </div>
      </section>
      <Dialog open={open} onClose={()=>setOpen(false)} onSubmit={onSubmit} />
    </div>
  );
}

export default App;


const EmtpyTodo:FC<{setOpen:any}> = ({setOpen}) => {
  return (
    <div className="todo-item-empty">
      {/* <p>No todos yet</p> */}
      <IconAdd onClick={()=>setOpen (true)} />
      <p>Add a todo</p>
    </div>
  )
}


const NonEmptyTodo:FC <{todos: any[], setOpen:any}>= ({todos, setOpen}) => {
  return (
    <>
      {
        todos.map(todo => {
          return (
            <TodoItem key={todo.id} name={todo.name} description={todo.description} dueDate={todo.dueDate} />
          )
        })
      }
      <div className="icon">
        <IconAdd onClick={()=>{setOpen (true)}} />
      </div>
    </>
  )
}