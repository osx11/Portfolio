import {QUOTE_FIELD, AUTHOR_FIELD} from "./consts";

function fetchQuote() {
    return fetch('https://favqs.com/api/qotd').then(r => r.json());
}

window.onload = async function (e) {
    const quote = await fetchQuote();

    QUOTE_FIELD.innerText = '"' + quote.quote.body + '"';
    AUTHOR_FIELD.innerText = '- ' + quote.quote.author;
}
