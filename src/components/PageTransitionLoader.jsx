import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const PageTransitionLoader = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    // Create a minimum delay to prevent flashing
    const minDelay = new Promise(resolve => setTimeout(resolve, 500));

    // Combine with a maximum timeout
    Promise.race([
      minDelay,
      new Promise(resolve => setTimeout(resolve, 2000)) // Max timeout
    ]).then(() => {
      setIsLoading(false);
    });

    return () => {
      setIsLoading(false);
    };
  }, [location.pathname]);

  if (!isLoading) return null;
  return <LoadingSpinner />;
};

export default PageTransitionLoader;
