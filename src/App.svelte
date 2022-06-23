<script lang="ts">
	import AboutMe from "./AboutMe.svelte";
	import Portfolio from "./Portfolio.svelte";
	import Quotes from "./Quotes.svelte";

	import {scrollToAnchor} from './anchor_handler';
</script>

<body>
	<header>
		<nav>
			<ul>
				<li><a on:click={scrollToAnchor} href="#about-me" class="nav-link active">About Me</a></li>
				<li><a on:click={scrollToAnchor} href="#portfolio" class="nav-link">Portfolio</a></li>
				<li><a href="https://vk.com/osx_11" target="_blank"><i class="fa-brands fa-vk"></i></a></li>
				<li class="margin-5" ><a href="https://github.com/osx_11" target="_blank"><i class="fa-brands fa-github"></i></a></li>
				<li class="margin-5"><a href="https://t.me/osx11" target="_blank"><i class="fa-brands fa-telegram"></i></a></li>
			</ul>
		</nav>
	</header>
	<main>
		<AboutMe></AboutMe>
		<Portfolio></Portfolio>
	</main>

	<footer>
		<Quotes/>

		<div class="contact-me">
			<a href="https://t.me/osx11" target="_blank" class="link-blue contact-me-link">Contact me</a>
		</div>
	</footer>
</body>
