import express from 'express';
import cors from 'cors';
import path from 'path';
import withSockets from './with-sockets';

const Middlewares = (app, io) => {
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(withSockets(io));
    app.use(cors()) // Use this after the variable declaration
    
    // Serve static files from the public directory
    app.use(express.static(path.join(process.cwd(), 'public')));
};

export default Middlewares;