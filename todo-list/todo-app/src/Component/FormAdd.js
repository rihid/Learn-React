import React from "react";

const FormAdd = () => {
    return (
        <form className="flex">
            <input type="text" name="add" className="add_todo" />
            <button className="button">Add</button>
        </form>
    )
}

export default FormAdd;