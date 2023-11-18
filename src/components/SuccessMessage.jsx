import React ,{ useEffect, useState } from 'react'

const SuccessMessage = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    
    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  
  return isVisible ? (
    <div className="success-message">
      <p>{message}</p>
    </div>
  ) : null;
};

export default SuccessMessage;