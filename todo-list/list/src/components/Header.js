import React, { useState } from "react";

const Header = (props) => {
  const [edit, setEdit] = useState("call someone")

  const handleOnChange = (e) => {
    setEdit(e.target.value)
  }
  
  const handleOnClick = () => {
    props.onAddTodo(edit);
    setEdit('')
  }

  return (
    <div>
      <button onClick={handleOnClick}>Add Todo</button>
      <input onChange={handleOnChange} value={edit} />
    </div>
  );
}

export default Header;