import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home Title</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
            <div>
                Home
            </div>
            <button onClick={() => console.log('hi')}>Press me</button>
        </div>
    );
};

export default Home;

