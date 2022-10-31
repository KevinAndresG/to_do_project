import React from "react";
import "./ToDoItem.css"
import { AiOutlineDeleteColumn} from "react-icons/ai"
import { HiOutlineThumbUp } from "react-icons/hi"

function ToDoItem(lst) {
		return (
			<li className="items hovItems">
				<span className={`icon icon-check ${lst.completed && 'icon-check--active'} `} onClick={lst.completeTodo}>
					<HiOutlineThumbUp />
				</span>
				<p className={`todoItem-p ${lst.completed && 'todoItem-p--completed'}`}>
					{lst.text}
				</p>
				<span className="icon-delete" onClick={lst.deleteTodo}>
					<AiOutlineDeleteColumn />
				</span>
			</li>
		);
	}

export { ToDoItem };
