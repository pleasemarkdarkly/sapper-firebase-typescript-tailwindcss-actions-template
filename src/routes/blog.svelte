<script>
    import ExampleComponent from "../components/ExampleComponent.svelte";
</script>

<style>
    .centerer {
        @apply flex-1 flex flex-col items-center justify-center;
    }
</style>

<div class:centerer={true}>
    <!-- Here's how you could extract conditional class groups with @apply -->
    <ExampleComponent
        title="🌐 Example Blog Page"
        paragraph="Example Blog Page" />
    <a
        class="mt-10 p-3 rounded-lg shadow-md text-pink-800 bg-pink-200 transition
		duration-200 ease-in-out hover:bg-pink-300 focus:bg-pink-300
		focus:outline-none focus:shadow-outline"
        href="/">
        Index
    </a>
</div>
