async function fetchQuote(): Promise<[string, string]> {
    const quote: any = await fetch('https://favqs.com/api/qotd').then((r: any) => r.json());

    return [quote.quote.body, quote.quote.author];
}

async function setQuote(quote_field: HTMLElement, author_field: HTMLElement) {
    const quote: [string, string] = await fetchQuote();

    quote_field.innerText = '"' + quote[0] + '"';
    author_field.innerText = '- ' + quote[1];
}

export {setQuote};
