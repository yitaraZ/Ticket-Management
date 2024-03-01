import React from "react";
import Header from './Header';
import Footer from './Footer';

function Update() {
    return (
        <>
            <Header />
            <div style={{ width: '50%', margin: '0 auto', background: '#333', padding: '10px', color: '#fff' }}>
                <h1 style={{ fontSize: '2em', marginBottom: '20px', textAlign: 'center' }}>Update Ticket</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Id" aria-label="Server" />
                </div>
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
                <div className="dropdown-result">
                    <label>Update Status:</label>
                    <select className="form-select">
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
            </div>
            <Footer />
        </>
    )
}

export default Update;