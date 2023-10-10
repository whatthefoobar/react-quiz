import { configureStore, createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    currentQuestion: 0,
    selectedAnswer: null,
    score: 0,
    resultMessage: "",
  },
  reducers: {
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    incrementScore: (state) => {
      state.score += 1;
    },
    setResultMessage: (state, action) => {
      state.resultMessage = action.payload;
    },
  },
});

export const {
  setCurrentQuestion,
  setSelectedAnswer,
  incrementScore,
  setResultMessage,
} = quizSlice.actions;

const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
  },
});

export default store;
