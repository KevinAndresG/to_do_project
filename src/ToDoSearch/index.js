import React from "react";
import "./ToDoSearch.css";
import { ToDoContext } from '../ToDoContext';

function ToDoSearch() {
	const {searchValue, setSearchValue} = React.useContext(ToDoContext);

	function searchTodo (event)
	{
		// console.log(event.target.value);
		setSearchValue(event.target.value);
	}
	return (
		<div className='searchButton'>
			<input className='search' placeholder='Search Your ToDo' value={searchValue} onChange={searchTodo}/>
		</div>
	)
}

export { ToDoSearch }