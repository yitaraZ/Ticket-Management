import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div style={{ width: '75%', margin: '0 auto',background: '#333', padding: '10px', color: '#fff' }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Ticket Management</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/new-ticket">New ticket</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/update-ticket">Update</Link>
                            </li>


                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;