import React, { useState } from "react";

export const Registration = () => {
  let initialState = {
    first_name: "Saim",
    last_name: "Saqib",
    email: "saim@gmail.com",
    cnic: 12345,
    persons: 34,
  };
  const [person, setPerson] = useState(initialState);
  const registerForPsl = () => {
    var data = {
      first_name: person.first_name,
      last_name: person.last_name,
      email: person.email,
      cnic: person.cnic,
      persons: person.persons,
    };
    console.log(data);  
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
    console.log(e.target);
  };
  return (
    <div>
      <input
        type="text"
        name="first_name"
        id=""
        value={person.first_name}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="last_name"
        id=""
        value={person.last_name}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="email"
        id=""
        value={person.email}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="cnic"
        id=""
        value={person.class}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="persons"
        id=""
        value={person.section}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="button"
        name=""
        id=""
        onClick={registerForPsl}
        value="Submit"
      />
    </div>
  );
};
