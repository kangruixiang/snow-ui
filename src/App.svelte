<script>
	import Button from "./Button.svelte";
	import Input from "./Input.svelte";
	import Select from "./Select.svelte";
</script>

<main>
	<div class="container border-2 border-solid border-zinc-900 max-w-4xl p-24 mt-24 mb-24 rounded-lg">
		<h1>Tailwind Components</h1>
		<div class=" flex flex-col space-y-4">
		<Button />
		<Input />
		<Select />
		<p class="">This is example of body paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra tellus in hac habitasse platea. Fermentum leo vel orci porta non. Quisque egestas diam in arcu cursus euismod quis. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Ultricies mi quis hendrerit dolor magna eget est lorem. </p>
		<p>
			Donec enim diam vulputate ut pharetra sit. Id venenatis a condimentum vitae sapien. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Augue neque gravida in fermentum et sollicitudin. Dui vivamus arcu felis bibendum ut tristique. Lacus sed viverra tellus in hac habitasse. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Donec pretium vulputate sapien nec sagittis aliquam. Arcu dui vivamus arcu felis bibendum ut. Egestas diam in arcu cursus.
		</p>
		</div>
		
	</div>

</main>

<style global>
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
font-family: 'Concourse';
src: url('fonts/concourse_3_regular.woff2') format('woff2');
font-style: normal;
}
@font-face {
font-family: 'Equity';
src: url('fonts/equity_a_regular.woff2') format('woff2');
font-style: normal;
}
@layer components {
	h1 {
		@apply text-xl font-bold uppercase mb-4
	}
	h2 {
		@apply text-lg font-bold uppercase mb-2
	}
	p {
		@apply font-serif text-xl text-zinc-800
	}
	p::selection {
		@apply bg-slate-200
	}
	.btn {
		@apply py-4 px-4 shadow  font-semibold rounded-lg border-2 border-solid border-zinc-800 bg-zinc-50
		font-sans hover:bg-white text-zinc-800 hover:text-black;
	}
	.btn-primary {
		@apply bg-zinc-800 text-zinc-50 hover:bg-zinc-900 hover:text-white
	}
	.btn-disabled {
		@apply text-zinc-500 hover:bg-zinc-50 hover:text-zinc-500 border-zinc-500
	}
	.select {
		@apply font-semibold  focus:outline-none focus:bg-white focus:border-zinc-800 border-zinc-800 border-2 border-solid bg-zinc-50 text-zinc-800 rounded-md   outline-none focus:ring-0
	}
	.label {
		@apply mb-2 text-sm font-semibold
	}
	.input-text {
		@apply px-3 focus:bg-white focus:ring-0  focus:border-zinc-800  py-2 rounded-md bg-zinc-50 text-zinc-800 border-2 border-solid border-zinc-800
	}
	.input-checkbox {
		@apply rounded-sm border-2 border-solid w-4 h-4 focus:ring-0  text-zinc-800 border-zinc-800
	}
	
}

</style>