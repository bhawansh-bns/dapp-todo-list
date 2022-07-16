import type { FC } from 'react';
import { useState } from 'react';
import { Dialog } from '@mui/material';
import './style/Dialog.scss';



interface DialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: any;
}

const DialogExample: FC<DialogProps> = ({ open, onClose, onSubmit }) => {
    const [form, setForm] = useState({
        title: '',
        details: '',
        dueDate: ''
    })

    const whenSubmit:any = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, details, dueDate} = form;
        onSubmit(title, details, dueDate);
        onClose();
    }

    return (
        <Dialog open={open} onClose={onClose} onSubmit={whenSubmit}
            PaperProps={{
                style: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <main className="dialog bg-color-primary">
                <h1>Add Todo</h1>
                <form onSubmit={whenSubmit}>
                    <input placeholder='Title' type='text' value={form.title} onChange={(event) => setForm({
                        ...form,
                        title: event.target.value
                    })} />
                    <textarea placeholder='Details' onChange={(event) => setForm({
                        ...form,
                        details: event.target.value
                    })} />
                    <input placeholder='Due Date' type='date' onChange={(event) => setForm({
                        ...form,
                        dueDate: event.target.value
                    })} />
                    <button type='submit' className='bg-color-secondary'>Add</button>
                </form>
            </main>


        </Dialog>
    )
}


export default DialogExample;