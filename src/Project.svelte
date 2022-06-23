<script lang="ts">
    export let date: string = null;
    export let header: string;
    export let description: string;
    export let used_technologies: string = null;
    export let github_link: string = null;
</script>

<div class="project">
    <h2>{#if date} {date} <br>{/if} {header}</h2>
    <p>
        {description} <br><br>

        {#if used_technologies}
            <span class="color-grey">Used technologies: {used_technologies}</span><br>
            <a href="{github_link}" target="_blank" class="link-orange">See on github</a>
        {/if}
    </p>
</div>
