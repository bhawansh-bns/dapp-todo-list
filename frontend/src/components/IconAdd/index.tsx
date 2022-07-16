import type { FC } from 'react';
import {Add} from '@mui/icons-material';
import './styles/IconAdd.scss';

const IconAdd: FC<{onClick?:any}> = ({onClick}) => {
    return (
    <span className="icon-add bg-color-secondary" onClick={onClick}>
        <Add />
    </span>
    );
}

export default IconAdd;