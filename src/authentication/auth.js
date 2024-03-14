import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Auth = (WrappedComponent) => {
  const UserLoggedIn = (props) => {
    const navigate = useNavigate();
    const isUserAuth = () => {
        if(window.location.pathname === '/login') {
            return;
        }
        const details = localStorage.getItem('loginDetails');
        if (!details) {
            navigate('/login');
        }
        const parsedData = JSON.parse(details);
        // const loggedDate = new Date(details?.time);
        // const currentDate = new Date();
        
        const date1 = new Date(parsedData?.time);
        const date2 = new Date();
        if (date1.getDay() !== date2.getDay() || date1.getMonth() !== date2.getMonth() || date1.getFullYear() !== date2.getFullYear()) {
            alert('You session has been expired, Please Login!');
            navigate('/login');
        }
    }
    useEffect(() => {
      // Log data on component update
      isUserAuth();
    });

    return <WrappedComponent {...props} />;
  };
  return UserLoggedIn;
};

export default Auth;