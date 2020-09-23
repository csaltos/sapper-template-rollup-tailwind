<script>
  import { Button, Icon, TextField } from "smelte";
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

<h6 class="mb-3 mt-6">Light</h6>
<div class="py-2">
  <Button light>Button</Button>
</div>

<h6 class="mb-3 mt-6">Dark</h6>
<div class="py-2">
  <Button dark>Button</Button>
</div>

<h6 class="mb-3 mt-6">Block</h6>
<div class="py-2">
  <Button color="alert" dark block>Button</Button>
</div>

<h6 class="mb-3 mt-6">Outlined</h6>
<div class="py-2">
  <Button color="secondary" light block outlined>Button</Button>
</div>

<h6 class="mb-3 mt-6">Text</h6>
<div class="py-2">
  <Button text>Button</Button>
</div>

<h6 class="mb-3 mt-6">Disabled</h6>
<div class="py-2">
  <Button block disabled>Button</Button>
</div>

<h6 class="mb-3 mt-6">FAB <a href="https://material.io/components/buttons-floating-action-button/">(Floating action button)</a></h6>
<div class="py-2">
  <Button color="alert" icon="change_history" />
</div>

<h6 class="mb-3 mt-6">Fab flat</h6>
<div class="py-2">
  <Button color="error" icon="change_history" text light flat />
</div>
<h6 class="mb-3 mt-6">Basic</h6>
<TextField label="Test label" />

<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
