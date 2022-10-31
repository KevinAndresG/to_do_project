import React from "react";
import "./CreateToDo.css"
import { ToDoContext } from "../ToDoContext";
import { HiOutlinePlusCircle } from "react-icons/hi"


function CreateToDo() {
	const { setOpenModal, openModal,  searchedToDos} = React.useContext(ToDoContext);
	function onClickbtn() {
		setOpenModal(true);
	}
	return (
		<div className="divButton">
			<button className={`button hovCreate ${(openModal && searchedToDos.length && 'buttonDark') || (searchedToDos.length <= 0 && 'hidebtn')}`} onClick={() => onClickbtn()}> <HiOutlinePlusCircle className="plusCircle"/></button>
		</div>);
		
}

export { CreateToDo };
