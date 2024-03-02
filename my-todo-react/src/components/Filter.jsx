import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Filter({ FilterFunciton }) {
    return (
        <nav style={{ width: '75%', margin: '0 auto' }} className="navbar bg-body-tertiary ">
            <div>
                <form className="d-flex align-items-center">
                    <div>Sort by</div>
                    <button className="btn btn-outline-success me-2 mx-2" type="button" onClick={FilterFunciton[5]}>Latest Update</button>
                    <button className="btn btn-outline-success me-2" type="button" onClick={FilterFunciton[6]}>Status</button>
                </form>
            </div>
            <div>
                <div className="d-flex align-items-center">
                    <div>Filter by</div>
                    <button className="btn btn-outline-success me-2 mx-2" type="button" onClick={FilterFunciton[0]}>All status</button>
                    <button className="btn btn-outline-success me-2" type="button" onClick={FilterFunciton[1]}>Pending</button>
                    <button className="btn btn-outline-success me-2" type="button" onClick={FilterFunciton[2]}>Accepted</button>
                    <button className="btn btn-outline-success me-2" type="button" onClick={FilterFunciton[3]}>Rejected</button>
                    <button className="btn btn-outline-success me-2" type="button" onClick={FilterFunciton[4]}>Resolved</button>
                </div>
            </div>
        </nav>
    );
}

export default Filter;
