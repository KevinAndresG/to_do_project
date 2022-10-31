import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { CreateToDo } from '../CreateToDo';
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoContext } from "../ToDoContext";
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";
import { ToDosError } from "../TodosError";
import { ToDosLoading } from "../TodosLoading ";
import { EmptyToDos } from "../EmptyTodos";
import { ToDoCounterLoading } from "../ToDoCounterLoading";

function AppUI() {
    const { error,
        loading,
        searchedToDos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(ToDoContext)

    return (
        <React.Fragment>
            <ToDoCounter>
                {loading && <ToDoCounterLoading />}
            </ToDoCounter>
            <ToDoSearch />
            <ToDoList>
                {error && <ToDosError error={error} />}
                {loading && <ToDosLoading />}
                {(!loading && !searchedToDos.length) && <EmptyToDos />}
                {searchedToDos.map(todo => (<ToDoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    completeTodo={() => completeTodo(todo.text)}
                    deleteTodo={() => deleteTodo(todo.text)} />))}
            </ToDoList>

            {openModal && (
                <Modal>
                    <ToDoForm />
                </Modal>
            )}

            <CreateToDo />
        </React.Fragment>
    );
}

export { AppUI };