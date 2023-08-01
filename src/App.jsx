import { useState } from "react";
import Form from "./components/Form";

import commit_types from "./data/commit_types";

import TextInput from "./components/TextInput";
import DropDownInput from "./components/DropDownInput";

function App() {
  const [data, setData] = useState({
    commitType: "",
    breakingChange: false,
    scope: "",
    subject: "",
    body: "",
    footer: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission
    // build message
    const newMessage = `Hi my name is ${data.name}. I'm a ${
      data.gender === "other" ? data.otherGender : data.gender
    }. I am ${data.age} years old and ${data.height} feet tall`;
    setMessage(newMessage);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Subject */}
      <TextInput
        name={"subject"}
        label={"Subject"}
        id={"subject"}
        // styles={}
        placeholder={"Subject ..."}
        onChange={handleChange}
        charLimit={50}
      />
      <DropDownInput
        name={"commitType"}
        label={"Commit Type"}
        id={"commit_type"}
        data={commit_types}
      />
      <TextInput
        name={"subject"}
        label={"Subject"}
        id={"subject"}
        // styles={}
        placeholder={"Subject ..."}
        onChange={handleChange}
        charLimit={50}
      />

      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default App;
