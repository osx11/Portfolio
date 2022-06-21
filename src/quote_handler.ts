import {QUOTE_FIELD, AUTHOR_FIELD} from "./consts";

async function fetchQuote(): Promise<[string, string]> {
    const quote: any = await fetch('https://favqs.com/api/qotd').then((r: any) => r.json());

    return [quote.quote.body, quote.quote.author];
}

window.onload = async function (e: Event) {
    const quote: [string, string] = await fetchQuote();

    QUOTE_FIELD.innerText = '"' + quote[0] + '"';
    AUTHOR_FIELD.innerText = '- ' + quote[1];
}
