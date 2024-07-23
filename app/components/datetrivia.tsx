import React, { useEffect, useState } from 'react';

const DateTrivia: React.FC = () => {
  const [trivia, setTrivia] = useState<string>('');

  useEffect(() => {
    const fetchTrivia = async () => {
      const today = new Date();
      const month = today.getMonth() + 1; // getMonth() returns 0-11
      const day = today.getDate();
      const url = `http://numbersapi.com/${month}/${day}/date`;

      try {
        const response = await fetch(url);
        const data = await response.text();
        setTrivia(data);
      } catch (error) {
        console.error('Error fetching trivia:', error);
      }
    };

    fetchTrivia();
  }, []);

  return (
    <div>
      <h2 className="pb-6">Did you know?</h2>
      <p>{trivia}</p>
    </div>
  );
};

export default DateTrivia;
