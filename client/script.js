async function generateQuote() {
    try {
        const response = await fetch('http://localhost:3000/api/random-quote');
        const data = await response.json();
        const quoteBox = document.getElementById('quote-box');
        quoteBox.textContent = data.quote;
    } catch (error) {
        console.error('Error fetching the quote:', error);
    }
}