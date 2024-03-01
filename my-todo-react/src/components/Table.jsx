import React, { useState, useEffect } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from './Dropdown';
import Footer from './Footer';
import axios from 'axios';


function Table() {
    const [data, setData] = useState("");

    const fetchAPI = async () => {
        try {
            const response = await axios.get("http://localhost:3000/tickets");
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    console.log(data);

    return (
        <>
            <Header />

            <div style={{ width: '75%', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2em', marginBottom: '20px', textAlign: 'center' }}>Ticket list</h1>

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
                            <tr className="table-active">
                                <th scope="row">{data.id}</th>
                                <td align="right">{data.title}</td>
                                <td align="right"></td>
                                <td align="right"></td>
                                <td align="right"></td>
                                <td align="right"></td>
                                <td align="right"></td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}
export default Table;