<script>
  import { Button } from "smelte";
  import GlobalStyle from "../components/GlobalStyle.svelte";
</script>

<GlobalStyle />

<style>
	h1, figure, p {
		@apply text-center my-0 mx-auto;
	}

	h1 {
    @apply text-3xl uppercase font-bold m-0 mb-4 text-orange-500 font-sans;
	}

	figure {
		@apply m-0 mb-4;
	}

	img {
    @apply w-full max-w-5xl m-0 mb-4;
	}

	p {
		@apply my-0 mx-auto;
	}

  @screen md {
    h1 {
      @apply text-5xl;
    }
  }
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<h6 class="mb-3 mt-6">Basic</h6>
<div class="py-2">
  <Button>Button</Button>
</div>

<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
