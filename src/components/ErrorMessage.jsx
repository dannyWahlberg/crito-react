import React from 'react'

const ErrorMessage = ({ error }) => {
    return error ? <p className="error-form">{error}</p> : null;
  };

export default ErrorMessage