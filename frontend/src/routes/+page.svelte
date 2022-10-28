<script>
import {onMount} from 'svelte';
import axios from 'axios'

let output= '';
let num1 = '';
let num2 = '';

let add = (operator) => {
	console.log('http://localhost:3000/' + operator + '/' + num1 + '/' + num2)
	axios.get(`http://localhost:3000/${operator}/${num1}/${num2}`)		
		.then(response => {
			output = response.data
			num1 = '';
			num2 = '';
		})
		.catch(error => {
			alert(error.message)
		})				
};
onMount(async () => {
		await fetch("http://localhost:3000/")
			.then(response => response.json())			
});
</script>
<div>
    <input type="text" bind:value={output} id="text" readonly>
    <br>
		<input type="text" name="num1" bind:value={num1}>
		<input type="text" name="num2" bind:value={num2}>
		<button on:click={() => add('add')}>+</button>
		<button on:click={() => add('subtract')}>-</button>
		<button on:click={() => add('multiply')}>*</button>
		<button on:click={() => add('divide')}>/</button>
</div>