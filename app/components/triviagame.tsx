import React, { useEffect, useState } from 'react';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const TriviaGame: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [mouseEnabled, setMouseEnabled] = useState(false);
  const [showAward, setShowAward] = useState(false);
  const [lightColors, setLightColors] = useState<Array<'red' | 'yellow' | 'green'>>(Array(10).fill('yellow'));

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean');
      const data = await response.json();
      setQuestions(data.results);
    };

    fetchQuestions();
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault(); // Prevent default behavior for arrow keys
  
    const handleAnswer = (answer: string, event?: React.MouseEvent) => {
      if (event && !mouseEnabled) {
        setWarning('What year was the first consumer mouse available to consumers? (1977, 1980, 1983)');
        return;
      }
      setUserAnswer(answer);
      setShowAnswer(true);
      const newLightColors = [...lightColors];
      if (answer === questions[currentQuestionIndex].correct_answer) {
        setScore(score + 1);
        newLightColors[currentQuestionIndex] = 'green';
      } else {
        newLightColors[currentQuestionIndex] = 'red';
      }
      setLightColors(newLightColors);
      setTimeout(() => {
        nextQuestion();
      }, 2000); // Move to next question after 2 seconds
    };
  
    const nextQuestion = () => {
      setShowAnswer(false);
      setUserAnswer(null);
      setSelectedAnswer(null);
      setWarning(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    };
  
    if (showAnswer) {
      if (event.key === 'Enter') {
        nextQuestion();
      }
      return;
    }
  
    if (event.key === 'ArrowLeft') {
      setSelectedAnswer('True');
    } else if (event.key === 'ArrowRight') {
      setSelectedAnswer('False');
    } else if (event.key === 'Enter' && selectedAnswer) {
      handleAnswer(selectedAnswer);
    }
  };
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showAnswer, selectedAnswer, currentQuestionIndex, lightColors, mouseEnabled, questions, score]);

  const handleAnswer = (answer: string, event?: React.MouseEvent) => {
    if (event && !mouseEnabled) {
      setWarning('What year was the first consumer mouse available to consumers? (1977, 1980, 1983)');
      return;
    }
    setUserAnswer(answer);
    setShowAnswer(true);
    const newLightColors = [...lightColors];
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
      newLightColors[currentQuestionIndex] = 'green';
    } else {
      newLightColors[currentQuestionIndex] = 'red';
    }
    setLightColors(newLightColors);
    setTimeout(() => {
      nextQuestion();
    }, 2000); // Move to next question after 2 seconds
  };

  const handleWarningAnswer = (year: number) => {
    if (year === 1983) {
      setMouseEnabled(true);
      setWarning(null);
      setShowAward(true);
      setTimeout(() => setShowAward(false), 3000); // Hide award notification after 3 seconds
    } else {
      setWarning('Incorrect. Please use the arrow keys and enter key to play the game.');
    }
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    setUserAnswer(null);
    setSelectedAnswer(null);
    setWarning(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h1>Game Over</h1>
        <p>Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      
      <div className="flex items-center">
        {lightColors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: color,
              borderRadius: '50%',
              margin: '0 5px'
            }}
          ></div>
        ))}
      </div>
      <p>Question {currentQuestionIndex + 1} / {questions.length}</p>
      <p dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      {warning && (
        <div>
          <p style={{ color: 'red' }}>{warning}</p>
          <button onClick={() => handleWarningAnswer(1977)}>1977</button>
          <button onClick={() => handleWarningAnswer(1980)}>1980</button>
          <button onClick={() => handleWarningAnswer(1983)}>1983</button>
        </div>
      )}
      {showAward && (
        <div style={{ color: 'green', margin: '10px 0' }}>
          Congratulations! You have unlocked the ability to use the mouse for answering trivia questions.
        </div>
      )}
      {!showAnswer ? (
        <div className="font-galaga">
          <button
          className="mr-6 hover:text-green-500"
            onClick={(event) => handleAnswer('True', event)}
            
          >
            True
          </button>
          <button
            onClick={(event) => handleAnswer('False', event)}
          >
            False
          </button>
        </div>
      ) : (
        <div>
          <p>
            {userAnswer === currentQuestion.correct_answer ? 'Correct!' : 'Incorrect!'}
            The correct answer is {currentQuestion.correct_answer}.
          </p>
          <button onClick={nextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default TriviaGame;
