import type { FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/TodoItem.scss';
interface Props {
    name: string;
    description: string;
    dueDate: string;
}


const TodoItem:FC<Props> = ({ name, description, dueDate }) => {
    return (
        <div className="todo-item bg-color-primary">
        <section className="body">
        <header>
                <h1>{name}</h1>
            </header>
            <p className='description'>{description}</p>
            <p className='due-date'><strong>Due: </strong>{dueDate}</p>

        </section>

        <section className="delete">
            <div className="icon">
                <DeleteIcon />
            </div>
        </section>

        </div>
    )
}

export default TodoItem;