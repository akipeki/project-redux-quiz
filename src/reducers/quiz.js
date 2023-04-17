import { createSlice } from '@reduxjs/toolkit'

// Questions array, containing the questions and their answer options
const questions = [
  { id: 1, questionText: 'What covers one third of the land’s surface and helps our planet?', options: ['Forests', 'Deserts', 'Grasslands', 'Rivers'], correctAnswerIndex: 0, fact: 'Forests cover one-third of the Earth’s land surface and are essential for maintaining the planet’s health by absorbing carbon dioxide.' },
  { id: 2, questionText: 'Why are bees essential to life on earth?', options: ['Provide oxygen', 'Turn over soil', 'Reduce pests', 'Provide food'], correctAnswerIndex: 3, fact: 'Bees are essential because they pollinate flowers, which helps plants produce fruits and seeds, providing food for humans and animals.' },
  { id: 3, questionText: 'Where are rainforests found?', options: ['Northern hemisphere', 'Equator', 'Southern hemisphere', 'South Pole'], correctAnswerIndex: 1, fact: 'Rainforests are found near the equator, where the climate is warm and humid, which is ideal for the growth of diverse plant and animal species.' },
  { id: 4, questionText: 'What is the second heaviest land animal?', options: ['Rhinoceros', 'Bison', 'Hippopotamus', 'Gorilla'], correctAnswerIndex: 0, fact: 'The second heaviest land animal is the rhinoceros, with some species weighing over 2,500 kg (5,500 lb). The heaviest land animal is the African elephant.' },
  { id: 5, questionText: 'What is a simple way to save energy at home?', options: ['Leaving lights on', 'Unplugging chargers', 'Using oven', 'Long showers'], correctAnswerIndex: 1, fact: 'Unplugging chargers when not in use is a simple way to save energy at home. Chargers continue to draw power even when they are not charging devices.' },
  { id: 6, questionText: 'How many hearts does an octopus have?', options: ['1', '2', '3', '4'], correctAnswerIndex: 2, fact: 'An octopus has three hearts. Two hearts pump blood through the gills, and the third pumps blood through the rest of the body.' },
  { id: 7, questionText: 'What percentage of an iceberg is underwater?', options: ['10%', '40%', '70%', '90%'], correctAnswerIndex: 3, fact: 'About 90% of an iceberg is underwater, which is due to the density of ice being slightly less than that of water.' },
  { id: 9, questionText: 'Which bird can fly backwards?', options: ['Eagle', 'Hummingbird', 'Penguin', 'Ostrich'], correctAnswerIndex: 1, fact: 'Hummingbirds can fly backwards due to their unique ball-and-socket joint at the shoulder, allowing them to rotate their wings in a full circle.' },
  { id: 11, questionText: 'Main cause of deforestation?', options: ['Natural disasters', 'Human activities', 'Animal migration', 'Melting ice'], correctAnswerIndex: 1, fact: 'Human activities, such as logging, agriculture, and urbanization, are the main causes of deforestation.' },
  { id: 13, questionText: 'Largest living structure on Earth?', options: ['Amazon Rainforest', 'Great Barrier Reef', 'Mount Everest', 'Sahara Desert'], correctAnswerIndex: 1, fact: 'The Great Barrier Reef is the largest living structure on Earth, stretching over 2,300 kilometers (1,400 miles) and consisting of more than 2,900 individual reefs.' }

]
// The initial state of the quiz slice
const initialState = {
  currentStep: 'welcome', // The current step in the quiz ('welcome', 'quiz', 'summary')
  questions, // The questions array defined earlier
  answers: [], // An array to store the user's answers
  currentQuestionIndex: 0, // The index of the current question
  quizOver: false // A boolean to track if the quiz is over
};

// Define the quiz slice using the createSlice function
export const quiz = createSlice({
  name: 'quiz', // Name of the slice
  initialState, // The initial state
  reducers: {
    // This action is triggered when the user submits an answer
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.');
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`);
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      });
    },

    // This action is triggered when the user moves to the next question
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    // This action is triggered when the user restarts the quiz
    restart: () => {
      return initialState;
    },

    // This action is used to update the current step of the quiz
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    }
  }
});

// Export the actions generated by createSlice
export const { submitAnswer, goToNextQuestion, restart, setCurrentStep } = quiz.actions;

// Export the quiz reducer
export default quiz.reducer;

// We are exporting quiz.reducer instead of the entire quiz object
// because the reducer is the part that will be used in the store configuration.
// The reducer is responsible for managing and updating the state of the quiz slice.

// When you set up your Redux store, you'll need to provide a rootReducer that combines
// all the individual reducers. By exporting only the reducer from quiz.js,
// you can easily import and use it when you create your store:

// import { configureStore } from '@reduxjs/toolkit';
// import quizReducer from './quiz';

// const rootReducer = {
//  quiz: quizReducer,
// };

// const store = configureStore({
//  reducer: rootReducer,
// });

// export default store;

// Meanwhile, the actions that are exported (submitAnswer,
// goToNextQuestion, restart, and setCurrentStep) are used
// throughout the application to dispatch actions
// and update the state of the quiz slice.
// By separating the exports like this, you can import
// only the parts of the quiz slice that are needed in
// different components, making the code more organized and efficient.