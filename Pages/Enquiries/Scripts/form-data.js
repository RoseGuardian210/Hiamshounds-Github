const formDataModule = (() => {
  const questions = [
    { id: 1, type: 'text', text: 'What is your name?', answer: '' },
    { id: 2, type: 'radio', text: 'Select your gender:', options: ['Male', 'Female', 'Other'], answer: '' },
    { id: 3, type: 'checkbox', text: 'Select hobbies:', options: ['Reading', 'Gaming', 'Traveling'], answer: [] },
  ];

  let currentIndex = 0;

  function getCurrentQuestion() {
    return questions[currentIndex];
  }

  function goToNextQuestion() {
    if (currentIndex < questions.length - 1) currentIndex++;
  }

  function isLastQuestion() {
    return currentIndex >= questions.length - 1;
  }

  return {
    getCurrentQuestion,
    goToNextQuestion,
    isLastQuestion,
  };
})();
