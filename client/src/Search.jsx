import axios from "axios";
import { useState } from "react";

const Search = () => {
    const [Class, setClass] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = () => {
        let api = `http://localhost:3000/student/?class=${Class}`; 
        axios.get(api).then((res) => {
            setData(res.data); 
        });
    };

    const ans = data.map((key) => { 
        return (
            <tr key={key.id}> 
                <td>{key.name}</td>
                <td>{key.Class}</td>
                <td>{key.city}</td>
                <td>{key.password}</td>
            </tr>
        );
    });

    return (
        <>
            <h1>This is the search page</h1>
            Enter the Class: <input type="text" name="class" value={Class} onChange={(e) => { setClass(e.target.value); }} /> 
            <button onClick={handleSubmit}>Search by class</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>City</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </table>
        </>
    );
};

export default Search;