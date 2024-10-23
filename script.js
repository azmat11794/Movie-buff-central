// Quotes array
const quotes = [
    "It’s not our abilities that show what we truly are… it is our choices. - Dumbledore",
    "I am inevitable. - Thanos",
    "Do or do not. There is no try. - Yoda",
    "With great power comes great responsibility. - Uncle Ben"
  ];
  
  // Function to generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerText = quotes[randomIndex];
  }
  
  // Function for trivia quiz (basic version)
  function checkAnswer(option) {
    const question = document.getElementById('question');
    if (option === 'A') {
      alert('Correct!');
    } else {
      alert('Incorrect! Try again.');
    }
  }
  