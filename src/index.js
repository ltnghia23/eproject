import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import ScrollToTop from './components/Include/ScrollToTop ';
import Notification from './components/Include/Notification';
import Header from './components/Include/Header';
import Footer from './components/Include/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <HashRouter>
        <Header />
            <ScrollToTop />
            <App />
            </HashRouter>
        <Notification />
        <Footer />
    </Provider>
);

