<script lang="ts">
    import {onMount} from "svelte";
    import {setQuote} from './quote_handler';

    let quote_quote;
    let quote_author;

    onMount(() => {
        setQuote(quote_quote, quote_author);
    });
</script>

<div class="quote">
    <p bind:this={quote_quote} id="quote-quote" class="quote-quote">Quote</p>
    <p bind:this={quote_author} id="quote-author" class="quote-author">- Author</p>
</div>
