import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Filter from './Filter';


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

    const filterPending =  async () => {
        const response = await axios.get("http://localhost:3000/tickets/pending");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setData(dataArray);
    }
    
    const filterAccepted =  async () => {
        const response = await axios.get("http://localhost:3000/tickets/accepted");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setData(dataArray);
    }
    
    const filterRejected =  async () => {
        const response = await axios.get("http://localhost:3000/tickets/rejected");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setData(dataArray);
    }

    const filterResolved =  async () => {
        const response = await axios.get("http://localhost:3000/tickets/resolved");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setData(dataArray);
    }

    const sortlatest =  async () => {
        const response = await axios.get("http://localhost:3000/tickets/latestupdate");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setData(dataArray);
    }

    const sortstatus =  async () => {
        const response = await axios.get("http://localhost:3000/tickets/status");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setData(dataArray);
    }
    
    const filterall = [fetchAPI,filterPending, filterAccepted, filterRejected,filterResolved,sortlatest,sortstatus];

    return (
        <>
            <Filter FilterFunciton={filterall} />
            <div style={{ width: '75%', margin: '0 auto' }}>
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
        </>
    )
}
export default Table;