import React, { useState } from "react";
import { Link } from "react-router-dom";
var contacts;
function App() {
  const [contact, setContact] = useState({
    mobile: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    contacts = contact;
    console.log(contacts);
  }

  return (
    <div className="container">
      <p className="register">Register</p>
      <form>
        <input onChange={handleChange} name="mobile" value={contact.mobile} />
        <p className="otp"> Send OTP</p>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={contact.password}
        />
      <button className="button"  onClick={handleSubmit}>  
      <Link className="anchor" to="/more" onClick={handleSubmit}>
          NEXT
        </Link>
         </button>
      </form>
    </div>
  );
}

export default App;
export { contacts };
