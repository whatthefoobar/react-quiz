import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentQuestion,
  setSelectedAnswer,
  incrementScore,
  setResultMessage,
} from "../../store";
import questions from "../../questions"; // Import your questions data
import "./Quiz.css";

const Quiz = () => {
  const { currentQuestion, selectedAnswer, score, resultMessage } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();

  const handleAnswerSelect = (index) => {
    dispatch(setSelectedAnswer(index));
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentQuestion].correctAnswerIndex) {
        dispatch(incrementScore());
      }

      dispatch(setSelectedAnswer(null));
      dispatch(setCurrentQuestion(currentQuestion + 1));
    }
  };

  useEffect(() => {
    const percentageCorrect = (score / questions.length) * 100;
    const message = `Thank you for your answers. You got ${percentageCorrect}% correct answers.`;
    dispatch(setResultMessage(message));
  }, [currentQuestion, selectedAnswer, score, dispatch]);

  return (
    <div className="quiz">
      {currentQuestion < questions.length ? (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <div className="answer" key={index}>
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

export default Quiz;
