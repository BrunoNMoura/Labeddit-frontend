import React from 'react';
import { useContext, useEffect } from 'react';
import { Router } from './router/Router';
import { LabedditContext } from './global/LabedditContext';

export default function App() {

    const context = useContext(LabedditContext)
            
    useEffect(() => {
        try {
          const isHTTPS = window.location.protocol === "https:";
          if (isHTTPS) {
            window.location.href = `http://${window.location.host}${window.location.pathname}`;
          }
          context.login();
        } catch (error) {
          console.error("Erro no useEffect:", error);
        }
      }, []);
      
    return (
        <Router />
    )
}