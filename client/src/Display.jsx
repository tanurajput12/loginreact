import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from 'react-bootstrap'; // Make sure to import Table from react-bootstrap

const Display = () => {
    const [input, setInput] = useState([]); // Initialize as an array

    const loadData = () => {
        let api = "http://localhost:3000/student";
        axios.get(api).then((res) => {
            setInput(res.data);
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    }

    useEffect(() => {
        loadData();
    }, []);

    const ans = input.map((key) => {
        return (
            <tr key={key.id}> {/* Assuming each student has a unique id */}
                <td>{key.name}</td>
                <td>{key.Class}</td>
                <td>{key.city}</td>
                <td>{key.password}</td>
            </tr>
        );
    });

    return (
        <>
            <hr />
            <div className='display'>
                <h1>Display</h1>
                <Table striped bordered hover>
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
                </Table>
            </div>
        </>
    );
}

export default Display;