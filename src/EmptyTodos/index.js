import React from 'react';
import { ToDoContext } from '../ToDoContext';
import "./EmptyToDos.css";
function EmptyToDos() {
    const { setOpenModal, openModal, searchedToDos} = React.useContext(ToDoContext);
    function onClickbtn() {
        setOpenModal(true);
    }
    return (
        <div className='firstTodoText'>
            <div className='body'>
                <div class="slashed">
                    <div class="top" title="Create Your First ToDo"></div>
                    <div class="bot" title="Create Your First ToDo"></div>
                </div>
            </div>
            <div className="divButtonNoToDos">
                <button className={`buttonNoToDos ${openModal && searchedToDos.length <= 0 && 'hidebtn'}`} onClick={() => onClickbtn()}>+</button>
            </div>
        </div>
    );
}

export { EmptyToDos }
