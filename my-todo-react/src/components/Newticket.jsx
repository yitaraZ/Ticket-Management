import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function NewTicket() {

    const [title, settitle] = useState('');
    const [descrip, setdescrip] = useState('');
    const [contact, setcontact] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try { 
            const response = await axios.post("http://localhost:3000/ticket", {
                title: title,
                description: descrip,
                contact: contact,
            });

        
            console.log('New ticket created:', response.data);

            settitle('');
            setdescrip('');
            setcontact('');
        } catch (error) {
            console.error('Error creating new ticket:', error);
        }
    }

    return (


        <><Header />
            <div style={{ width: '50%', margin: '0 auto', background: '#333', padding: '10px', color: '#fff' }}>
                <h1 style={{ fontSize: '2em', marginBottom: '20px', textAlign: 'center' }}>New Ticket</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input
                            type="text" className="form-control" placeholder="Title" aria-label="Server"
                            onChange={(e) => settitle(e.target.value)} value={title} required />
                    </div>
                    <div className="input-group">
                        <textarea
                            className="form-control" placeholder="Description" aria-label="With textarea"
                            onChange={(e) => setdescrip(e.target.value)} value={descrip} required

                        ></textarea>
                    </div>
                    <div style={{ margin: '15px' }}></div>
                    <div className="input-group mb-3">
                        <input
                            type="text" className="form-control" placeholder="Contact" aria-label="Recipient's username" aria-describedby="basic-addon2"
                            onChange={(e) => setcontact(e.target.value)} value={contact} required />
                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btn btn-primary">Add Ticket</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default NewTicket;