<script>
    import Button from 'sveltestrap/src/Button.svelte';
    import Col from 'sveltestrap/src/Col.svelte';
    import Row from 'sveltestrap/src/Row.svelte';
    let you = 'a dumbass';
    export let name;
</script>

<div class="container-flex">
 	<Row>
		<Col>
			<Button color="primary" outline>Hello World!</Button>
		</Col>
	</Row>
	<p class="h2 text-success">You are {you}</p>

	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</div>