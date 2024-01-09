import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'
import './section.css';
function TodoItem(props) {

    return(
        <div className='container'>
            <li className='TodoItem'>
                <CompleteIcon
                    completed={props.completed}
                    onComplete={props.onComplete}
                />
                <p className={` ${props.completed && "TodoItem-p--complete"}`}>
                    {props.msj}
                </p>
                <DeleteIcon
                    onDelete={props.onDelete}
                />
            </li>
        </div>
    );
}

export {TodoItem}