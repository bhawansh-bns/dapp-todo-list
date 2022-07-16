import type {FC} from 'react';
import './styles/Navbar.scss';

interface NavbarProps {
    name: string;
}

const Navbar: FC<NavbarProps> = ({ name }) => {

    return (
        <nav className='bg-color-secondary'>
            <section className="title">
                <h1>{name}</h1>
            </section>
        </nav>
    );
}


export default Navbar;

