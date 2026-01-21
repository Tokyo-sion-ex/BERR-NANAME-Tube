import { useState, useEffect } from 'react';

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="text-3xl font-bold">
        {time.toLocaleTimeString()}
      </div>
      <div className="text-gray-600 dark:text-gray-400">
        {time.toLocaleDateString()}
      </div>
    </div>
  );
};
