import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
        <h1>hi</h1>
            <Header/>
            <main>
                <section className="hero">
                    <h1>Welcome to Content Managment System</h1>
                    <p>Your content management solution.</p>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
