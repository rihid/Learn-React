import React from "react";
import FormAdd from "./FormAdd";

const TodoList = () => {
    return (
        <>
            <FormAdd />
            <ul>
                <li className="todo-items">
                    <form action="" className="form-edit">
                        <input type="text" name="" className="input-data" value="makan" />
                        <button>Edit</button>
                        <button>Hapus</button>
                    </form>
                    
                </li>
            </ul>
        </>
    )
}

export default TodoList;