import React from 'react';
import { Dropdown } from 'react-bootstrap';

function CustomDropdown({ title, items }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id={`dropdown-${title.toLowerCase()}`}>
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {items.map((item, index) => (
                    <Dropdown.Item key={index} href={`#/${item.toLowerCase()}`}>
                        {item}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

function YourComponent() {
    const sortItems = ['By latest updated', 'By status'];
    const statusItems = ['Pending', 'Accepted', 'Resolved', 'Rejected'];

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <CustomDropdown title="Sort" items={sortItems} />
            <CustomDropdown title="Status" items={statusItems} />
        </div>
    );
}

export default YourComponent;
