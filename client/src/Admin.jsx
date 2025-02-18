import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './admin.css'; // Import the CSS file

const Admin = () => {
    const navi = useNavigate();
   
    const [input, setInput] = useState({
        name: "",
        class: "",
        city: "",
        password: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = () => {
        const api = "http://localhost:3000/student";
        axios.post(api, input)
            .then((res) => {
                console.log(res.data);
                alert("Data inserted successfully");
                navi("/dashboard");
            })
            .catch((error) => {
                console.error("There was an error inserting the data!", error);
            });
    }
    
    return (
        <div className="container">
            <h2>Admin Form</h2>
            <div className="input-field">
                <input type="text" placeholder="Type your name" name="name" value={input.name} onChange={handleInput} />
            </div>
            <div className="input-field">
                <input type="text" placeholder="Type your class" name="class" value={input.class} onChange={handleInput} />
            </div>
            <div className="input-field">
                <input type="text" placeholder="Type your city" name="city" value={input.city} onChange={handleInput} />
            </div>
            <div className="input-field">
                <input type="password" placeholder="Type your password" name="password" value={input.password} onChange={handleInput} />
            </div>
            <button className="button" onClick={handleSubmit}>Click here</button>
        </div>
    );
}

export default Admin;