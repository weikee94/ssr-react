// root file for server

// const express = require('express');

// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;
import 'babel-polyfill';
import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import Home from './client/components/Home';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();


    matchRoutes(Routes, req.path);


    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});
