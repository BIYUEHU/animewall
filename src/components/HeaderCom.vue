<script setup lang="ts">
import { ref } from 'vue';

const drawerState = ref(false);
</script>

<template>
	<div class="container">
		<div class="content">
			<div>
				<img class="text-center" src="https://imlolicon.tk/favicon.ico" width="40" height="40" />
				<span>
					<strong>蛍的收藏列表</strong>
				</span>
			</div>
			<div>
				<n-space>
					<n-button type="default" @click="drawerState = !drawerState"> 关于 </n-button>
				</n-space>
			</div>
		</div>
	</div>
	<n-drawer v-model:show="drawerState" placement="top" :trap-focus="false" :block-scroll="false">
		<n-drawer-content title="关于"> xxx </n-drawer-content>
	</n-drawer>
</template>

<style scoped>
.container {
	top: 0;
	left: 0;
	height: 60px;
	background-color: #0dcaf0;
	font-size: 1.3rem;
	color: #ffffff;
}

.content {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: auto;
	width: 1000px;
	max-width: 90vw;
	--bs-gutter-x: 7%;
	padding-right: calc(var(--bs-gutter-x) * 0.5);
	padding-left: calc(var(--bs-gutter-x) * 0.5);
}
</style>
