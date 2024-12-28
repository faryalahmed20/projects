const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  ];
  
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const generateButton = document.getElementById("generate-quote");
  
  generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote.text;
    authorElement.textContent = `- ${randomQuote.author}`;
  });
  