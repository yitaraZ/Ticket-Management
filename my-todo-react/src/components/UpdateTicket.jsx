import React, { useState } from "react";
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function Update() {

    const [id, setid] = useState('');
    const [title, settitle] = useState('');
    const [descrip, setdescrip] = useState('');
    const [contact, setcontact] = useState('');
    const [status, setstatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.put("http://localhost:3000/ticket", {
                id: id,
                title: title,
                description: descrip,
                contact: contact,
                status: status
            });


            console.log('Ticket updated successfully:', response.data);

            setid('');
            settitle('');
            setdescrip('');
            setcontact('');
            setstatus('');

        } catch (error) {
            console.error('Error update ticket:', error);
        }
    }

    return (
        <>
            <Header />
            <div style={{ width: '50%', margin: '0 auto', background: '#333', padding: '10px', color: '#fff' }}>
                <h1 style={{ fontSize: '2em', margin: '30px', textAlign: 'center' }}>Update Ticket</h1>

                <form onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Id" aria-label="Server"
                            onChange={(e) => setid(e.target.value)} value={id} required />
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Title" aria-label="Server"
                            onChange={(e) => settitle(e.target.value)} value={title}  />
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Description" aria-label="Server"
                            onChange={(e) => setdescrip(e.target.value)} value={descrip}  />
                    </div>
                    <div style={{ margin: '10px' }}></div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Contact tel or e-mail" aria-label="Recipient's username" aria-describedby="basic-addon2"
                            onChange={(e) => setcontact(e.target.value)} value={contact}  />
                    </div>
                    <div className="dropdown-result">
                        <label>Update Status:</label>
                        <select className="form-select" onChange={(e) => setstatus(e.target.value)} required>
                            <option value="pending">Pending</option>
                            <option value="accepted">Accepted</option>
                            <option value="resolved">Resolved</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                    <div style={{ margin: '20px' }}></div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btn btn-primary">Update Ticket</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Update;