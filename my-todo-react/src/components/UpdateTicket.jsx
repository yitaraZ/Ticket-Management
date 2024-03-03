import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Update() {
    const { id } = useParams();
    
    const [title, setTitle] = useState('');
    const [descrip, setDescrip] = useState('');
    const [contact, setContact] = useState('');
    const [status, setStatus] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/tickets/id/${id}`);
            const ticketData = Array.isArray(response.data.data) ? response.data.data[0] : {};

            setTitle(ticketData.title || '');
            setDescrip(ticketData.description || '');
            setContact(ticketData.contact || '');
            setStatus(ticketData.status || '');
        } catch (error) {
            console.error('Error fetching ticket data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:3000/tickets`, {
                id,
                title,
                descrip,
                contact,
                status
            });


            console.log('Ticket updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating ticket:', error);
        }
    };

    return (
        <>
            <Header />
            <div style={{ width: '50%', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2em', margin: '30px', textAlign: 'center' }}>Update Ticket</h1>

                <form onSubmit={handleSubmit} style={{ border: '2px solid grey', padding: '10px' }}>
                    <div className="input-group mb-3">
                        <input
                            style={{ border: '2px solid grey' }}
                            type="text"
                            className="form-control"
                            placeholder="Id"
                            aria-label="Server"
                            value={id}
                            readOnly
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            style={{ border: '2px solid grey' }}
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            aria-label="Server"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            style={{ border: '2px solid grey' }}
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            aria-label="Server"
                            onChange={(e) => setDescrip(e.target.value)}
                            value={descrip}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            style={{ border: '2px solid grey' }}
                            type="text"
                            className="form-control"
                            placeholder="Contact tel or e-mail"
                            aria-label="Recipient's username"
                            onChange={(e) => setContact(e.target.value)}
                            value={contact}
                        />
                    </div>
                    <div className="dropdown-result">
                        <label style={{ margin: '10px' }}>Update Status:</label>
                        <select
                            style={{ border: '2px solid grey' }}
                            className="form-select"
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                            required
                        >
                            <option value="pending">Pending</option>
                            <option value="accepted">Accepted</option>
                            <option value="resolved">Resolved</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                    <div style={{ margin: '20px' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btn btn-primary mx-3">Update Ticket</button>
                        <button className="btn btn-primary" >
                            <Link style={{color:'white'}} to="/">Go back</Link>
                        </button>
                    </div>
                    
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Update;
