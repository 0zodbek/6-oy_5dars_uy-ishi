import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("salom");
    alert("hayr");
  };
  return (
    <form className="wrappper" onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={handleChange}
        type="text"
        placeholder="Enter todos ?"
      />
      <button type="submit" className="btnSave" onChange={handleSubmit}>
        save
      </button>
    </form>
  );
}

export default App;
