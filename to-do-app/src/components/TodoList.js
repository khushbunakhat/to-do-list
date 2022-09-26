import React,{useState} from "react";

 function TodoList() 
 {
	const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [editable, setEditable] = useState(null);
    const [editText, setEditText] = useState('');

    const handleChange = ({target}) => {
        setTodo(target.value);
    }

    const addToDo = (e) => {
        e.preventDefault();

        if(todo !== '') {
            const myToDoList = todoList;
            myToDoList.push(todo);
            setTodoList(myToDoList);
        } else {
            alert("Blank Task");
        }
        setTodo('');
    }

    const handleDelete = (myToDo) => {
        const updatedList = todoList.filter((todo) => todo !== myToDo);
        setTodoList(updatedList);
    }

    const updateToDo = (myToDo) => {
        const newList = todoList.map((todo) => {
            if(todo === myToDo) {
                if(editText !== '') {
                    todo = editText;
                    return todo;
                }
            }
            return todo;
        });
        setTodo('');
        setEditText('');
        setTodoList(newList);
    }
 	return (
 	<div id="main">
         <h1>TO DO LIST</h1>
      <textarea id="task" onChange={handleChange} value={todo}/>
            <button id="btn" onClick={addToDo}>Add Task </button>

            {todoList.map((myToDo, index) => {
                return(
                    <li className="list" key={`todo${index}`}>
                        {editable === myToDo ? 
                            <textarea className="editTask" value={editText} onChange={(e) => setEditText(e.target.value)}/>
                        : <span>{myToDo}</span>}
                        
                        {editable === myToDo ? 
                        <button className="saveTask" onClick={() => updateToDo(myToDo)}>Save Task</button>
                        : <button className="edit" onClick={() => {
                            setEditable(myToDo);
                            setEditText(myToDo);
                        }}>Edit</button>
                        }
                        
                        <button className="delete" onClick={() => handleDelete(myToDo)}>Delete</button>
                    </li>
                )
            })}

 	</div>
 	);
 }
export default TodoList;


