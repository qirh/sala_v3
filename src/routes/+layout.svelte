<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { title } from '$lib/paraglide/messages';

	let { children } = $props();
</script>

<svelte:head>
	<title>{title()}</title>
</svelte:head>

<ParaglideJS {i18n}>
	<nav>
		<a href="/">Home</a>
		<a href="/blog">Blog</a>
		<a href="/til">TIL</a>
	</nav>

	{@render children()}
</ParaglideJS>
