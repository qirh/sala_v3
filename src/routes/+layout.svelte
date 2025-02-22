<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { title } from '$lib/paraglide/messages';
	import { Moon, Sun, Languages, Book, FileText, Linkedin, Mail, Github } from 'lucide-svelte';
	import { theme } from '$lib/stores/theme';

	let { children } = $props();
</script>

<svelte:head>
	<title>{title()}</title>
</svelte:head>

<ParaglideJS {i18n}>
	<nav class="nav-container">
		<!-- Navigation Links -->
		<div class="nav-section">
			<a href="/" class="nav-link">Home</a>
			<a href="/blog" class="nav-link">Blog</a>
		</div>

		<!-- Settings -->
		<div class="nav-section">
			<button class="icon-button" on:click={() => alert('Language switcher')}>
				<Languages size={20} />
			</button>
			<button class="icon-button" on:click={theme.toggle}>
				{#if $theme}
					<Sun size={20} />
				{:else}
					<Moon size={20} />
				{/if}
			</button>
		</div>

		<!-- Social Icons -->
		<div class="nav-section">
			<a href="/rc" class="icon-link" title="RC">RC</a>
			<a href="https://goodreads.com/your-profile" class="icon-link" title="Goodreads">
				<Book size={20} />
			</a>
			<a href="/resume" class="icon-link" title="Resume">
				<FileText size={20} />
			</a>
			<a href="https://linkedin.com/in/your-profile" class="icon-link" title="LinkedIn">
				<Linkedin size={20} />
			</a>
			<a href="mailto:your@email.com" class="icon-link" title="Email">
				<Mail size={20} />
			</a>
			<a href="https://github.com/your-username" class="icon-link" title="GitHub">
				<Github size={20} />
			</a>
		</div>
	</nav>

	{@render children()}
</ParaglideJS>

<style>
	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background-color: var(--bg-nav);
		border-bottom: 1px solid var(--border-color);
	}

	.nav-section {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.nav-link {
		text-decoration: none;
		color: var(--text-color);
		font-weight: 500;
		padding: 0.5rem;
		border-radius: 0.25rem;
		transition: background-color 0.2s;
	}

	.nav-link:hover {
		background-color: var(--hover-bg);
	}

	.icon-button,
	.icon-link {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		border-radius: 0.25rem;
		color: var(--text-color);
		background: none;
		border: none;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.icon-button:hover,
	.icon-link:hover {
		background-color: var(--hover-bg);
	}
</style>
