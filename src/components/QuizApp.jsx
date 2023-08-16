import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswerIndex: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswerIndex: 0,
  },
  //   {
  //     question: "What is the largest mammal?",
  //     options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  //     correctAnswerIndex: 1,
  //   },
  //   {
  //     question: "Who painted the Mona Lisa?",
  //     options: [
  //       "Pablo Picasso",
  //       "Vincent van Gogh",
  //       "Leonardo da Vinci",
  //       "Michelangelo",
  //     ],
  //     correctAnswerIndex: 2,
  //   },
  //   {
  //     question: "Which gas do plants use for photosynthesis?",
  //     options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  //     correctAnswerIndex: 1,
  //   },
  //   {
  //     question: "What is the smallest prime number?",
  //     options: ["1", "2", "3", "5"],
  //     correctAnswerIndex: 1,
  //   },
  // Add more questions here
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [resultMessage, setResultMessage] = useState("");

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentQuestion].correctAnswerIndex) {
        setScore(score + 1);
      }

      setSelectedAnswer(null);
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    }
    if (currentQuestion === questions.length - 1) {
      const finalScore =
        selectedAnswer === questions[currentQuestion].correctAnswerIndex
          ? score + 1
          : score;
      const percentageCorrect = (finalScore / questions.length) * 100;
      setResultMessage(
        `Thank you for your answers. You got ${percentageCorrect}% correct answers.`
      );
    }
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h1>Quiz App</h1>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  checked={selectedAnswer === index}
                  onChange={() => handleAnswerSelect(index)}
                />
                {option}
              </label>
            </div>
          ))}
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h2>{resultMessage}</h2>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
