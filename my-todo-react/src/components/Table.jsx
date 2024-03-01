import React, { useState, useEffect } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from './Dropdown';
import Footer from './Footer';
import axios from 'axios';


function Table() {
    const [data, setData] = useState([]);

    const fetchAPI = async () => {

        const response = await axios.get("http://localhost:3000/tickets");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setData(dataArray);
        
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    console.log(data);

    return (
        <>
            <Header />

            <div style={{ width: '75%', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2em', margin: '30px', textAlign: 'center' }}>Ticket list</h1>

                <Dropdown />
                <div style={{ margin: '20px' }}></div>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Created</th>
                            <th scope="col">Updated</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(val => (
                            <tr key={val.id} className="table-active">
                                <th scope="row">{val.id}</th>
                                <td align="left">{val.title}</td>
                                <td align="left">{val.description}</td>
                                <td align="left">{val.contact}</td>
                                <td align="left">{val.status}</td>
                                <td align="left">{val.created_at}</td>
                                <td align="left">{val.updated_at}</td>
                                
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}
export default Table;