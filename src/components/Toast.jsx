import React from 'react';

const Toast = ({ message }) => {
  return (
    <div className="toast toast-top toast-center text-white">
      <div className={`alert alert-success`}>
        <span className="text-white">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
