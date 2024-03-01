import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from './Dropdown';
import Footer from './Footer';


function Table() {
    return (
        <>
            <Header />

            <div style={{ width: '75%', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2em', marginBottom: '20px', textAlign: 'center' }}>Ticket list</h1>

                <Dropdown />
                <div style={{ margin: '20px' }}></div>
                <table class="table">
                    <thead class="table-dark">
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
                        <tr class="table-active">
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>

                        </tr>
                        <tr class="table-active">
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}
export default Table;