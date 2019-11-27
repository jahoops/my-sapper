<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
</script>

<Nav {segment}/>

<div class="container-flex">
	<slot></slot>
</div>