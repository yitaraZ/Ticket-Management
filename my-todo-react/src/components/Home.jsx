import React  from 'react';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';

function Home() {
    return (
        <>
        <Header />
        <h1 style={{ fontSize: '2em', margin: '30px', textAlign: 'center' }}>Ticket list</h1>
        <Table />
        <Footer /> 
        </>
      );
}

export default Home;