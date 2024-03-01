import React from "react";
import Header from './Header';
import Footer from './Footer';

function NewTicket() {
    return (
        <>
            <Header />
            <div style={{ width: '50%', margin: '0 auto', background: '#333', padding: '10px', color: '#fff' }}>
                <h1 style={{ fontSize: '2em', marginBottom: '20px', textAlign: 'center' }}>New Ticket</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Title" aria-label="Server" />
                </div>
                <div class="input-group">
                    <textarea class="form-control" placeholder="Description" aria-label="With textarea"></textarea>
                </div>
                <div style={{ margin: '10px' }}></div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Contact" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="btn btn-primary">Add Ticket</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default NewTicket;