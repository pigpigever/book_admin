<template lang="html">
	<div id="app">
		<router-view/>
	</div>
</template>

<script lang="ts">
export default {
	name: 'App'
}
</script>

<style lang="less">
html, body, #app {
	width: 100%;
	height: 100%;
}
body {
	/* font-family: 'Source Sans Pro', sans-serif; */
	font-family: 宋体;
	color: white;
	font-weight: 300;
}
*{
	box-sizing: border-box;
}
</style>
