




// function getStock() {

//     let response = fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${key}`)
//         .then((response) => response.json())
//         .then((responseJson) => {
//             console.log(responseJson);
//             displayInfo(responseJson);
//         })


// }

function searchForQuote() {
    let input = document.getElementById('ticker-input')
    console.log(input.innerText);
    let ticker = input.value;
    let key = 'RL2T37F5J0TOG2C2';

    let response = fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${key}`)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            displayInfo(responseJson);
        })

}

function displayInfo(stockInfo) {


    let globalQuote = stockInfo['Global Quote'];
    const tickerDisplay = document.getElementById('ticker-symbol');
    tickerDisplay.innerText = 'Ticker: ' + globalQuote['01. symbol'];

    const dateDisplay = document.getElementById('date');
    dateDisplay.innerText = 'Last Trading Day: ' + globalQuote['07. latest trading day'];
    const price = document.getElementById('price');
    price.innerText = 'Latest Price: $' + globalQuote['05. price'];
    const previousClose = document.getElementById('previous-close');
    previousClose.innerText = 'Previous Closing Price: $' + globalQuote['08. previous close'];
    const change = document.getElementById('change');
    change.innerText = 'Change for Day: ' + globalQuote['10. change percent'];



}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById("search-button")

    searchButton.addEventListener("click", (event) => {
        event.preventDefault();
        searchForQuote();
        console.log("Clicked")
    });



});
