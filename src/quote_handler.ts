async function fetchQuote(): Promise<[string, string]> {
    const quote: any = await fetch('https://favqs.com/api/qotd').then((r: any) => r.json());

    return [quote.quote.body, quote.quote.author];
}

async function setQuote() {
    const quote: [string, string] = await fetchQuote();
    const QUOTE_FIELD: HTMLElement = document.getElementById("quote-quote");
    const AUTHOR_FIELD: HTMLElement = document.getElementById("quote-author");

    QUOTE_FIELD.innerText = '"' + quote[0] + '"';
    AUTHOR_FIELD.innerText = '- ' + quote[1];
}

export {setQuote};
