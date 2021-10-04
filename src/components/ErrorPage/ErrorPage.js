import React from 'react';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className="container error-page">
            <h2><i className="fas fa-bug text-info"></i> 404</h2>
            <h3 className="fw-bolder">Page Not Found</h3>
            <p>We're Sorry,The page you requested could not be found.Please go back to the homepage and contact us at support@start.me</p>
            <button className="btn btn-primary">Read more</button>
        </div>
    );
};

export default ErrorPage;