const quoteContainer = document.getElementById('quote-container');

function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://api.quotable.io/quotes?limit=20')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data.');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

async function displayQuotes() {
    try {
        const data = await fetchData();
        const quotesHTML = data.results.map(quote => {
            return `<div>
                <p><strong>Author:</strong> ${quote.author}</p>
                <p><strong>Quote:</strong> ${quote.content}</p>
              </div>`;
        }).join('');
        quoteContainer.innerHTML = quotesHTML;
    } catch (error) {
        console.error(error.message);
        quoteContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

displayQuotes();