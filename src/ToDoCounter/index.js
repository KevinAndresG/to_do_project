import React from "react";
import "./ToDoCounter.css"
import { ToDoContext } from '../ToDoContext'

function ToDoCounter(lst) {
	const { TotalToDos, ToDosCompleted, loading, searchedToDos } = React.useContext(ToDoContext);

	return (
		<React.Fragment>
			<div className={`titleHeader doNotShow ${(!loading && searchedToDos.length !== 0) && "show"} `}>
				<h1 className="title hovCounter completedToDos">{ToDosCompleted}</h1>
				<h1 className="title hovCounter ToDosCompletedText">/</h1>
				<h1 className="title hovCounter totalToDos">{TotalToDos}</h1>
				<h1 className="title hovCounter ToDosCompletedText">ToDos Completed</h1>
			</div>
			<div className={`titleHeader doNotShow ${(!loading && searchedToDos.length <= 0) && "show"} `}>
				<div>
					<h1 className='noTasksText ToDosCompletedText'>You Have No Pending Tasks For Now👌</h1>
				</div>
			</div>
			{lst.children}
		</React.Fragment>
	);
}

export { ToDoCounter };