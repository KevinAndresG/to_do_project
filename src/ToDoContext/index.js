import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider(props) {
    const [
        ToDos,
        SaveItem,
        loading,
        error,
    ] = useLocalStorage("TODOS_V1", []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const ToDosCompleted = ToDos.filter(todo => todo.completed).length;
    const TotalToDos = ToDos.length;
    let searchedToDos = [];
    if (!searchValue.length >= 1) {
        searchedToDos = ToDos;
    } else {
        searchedToDos = ToDos.filter(todo => {
            const toDosText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return (toDosText.includes(searchText))
        })
    }
    const CreateTodo = (text) => {
        if (text.length <= 0) {
            alert("Introduce A NEW ToDo");
            return (0);
        }
        const newTodos = [...ToDos];
        let exist = false;
        newTodos.filter(todo => {
            const toDosText = todo.text.toLowerCase();
            const newTodoLower = text.toLowerCase();
            if (toDosText === newTodoLower) {
                exist = true;
            }
            return(0)
        });
        if (exist === false) {
            newTodos.push({
                text: text,
                completed: false,
            })
            console.log("No Exist");
        } else {
            alert(`This To Do "${text}" Already Exists`);
        }
        SaveItem(newTodos);
    }
    const completeTodo = (text) => {
        const index = ToDos.findIndex(todo => todo.text === text);
        const newTodos = [...ToDos];
        if (!newTodos[index].completed) {
            newTodos[index].completed = true;
        } else {
            newTodos[index].completed = false;
        }
        SaveItem(newTodos);
    }
    const deleteTodo = (text) => {
        const index = ToDos.findIndex(todo => todo.text === text);
        const newTodos = [...ToDos];
        newTodos.splice(index, 1);
        SaveItem(newTodos);
    };
    return (
        <ToDoContext.Provider value={{
            error,
            loading,
            TotalToDos,
            ToDosCompleted,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeTodo,
            deleteTodo,
            CreateTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, ToDoProvider };
