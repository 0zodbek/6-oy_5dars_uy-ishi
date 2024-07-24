import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [p, setP] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue) {
      setP([...p, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const updatedP = [...p];
    updatedP.splice(index, 1); 
    setP(updatedP);
  };

  return (
    <form className="wrappper" onSubmit={handleSubmit}>
      <div className="inputWrapper">
      <input
        value={inputValue} 
        onChange={handleInputChange}
        type="text"
        placeholder="Add your new todo"
      />
      <button type="submit" className="btnSave" onChange={handleSubmit}>
        save
      </button>
      </div>
      {p.map((p,index) => (
          <p key={p}>{p} <button
          className="btnDelete"
          onClick={() => handleDelete(index)}
        >
          <i className="fa fa-trash"></i>
        </button> 
        </p>
        ))}
    </form>
  );
}

export default App;
