<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import http from '../http';
import { subjectTypeList, noMoreData, bangumiData, subjectType as subjectTypes } from '../func';
import { ElMessage } from 'element-plus';

const data = ref<bangumiData[]>([]);
const cols = computed(() => (window.outerWidth > 900 ? 2 : 1));
const isLoading = ref(true);
const isShow = ref(false);
const subjectType = ref<subjectTypes>(subjectTypes.anime);
let offset = 0;

const getData = async () => {
	isLoading.value = true;
	try {
		const newData = await http(offset, subjectType.value);
		if (!newData.data || !newData.data.data || !Array.isArray(newData.data.data)) throw Error;
		if (newData.data.data.length < 1) noMoreData();
		data.value.push(...(newData.data.data as bangumiData[]));
	} catch (err) {
		if (err instanceof Error) err = err.toString();
		if (typeof err !== 'string') err = JSON.stringify(err);
		if ((err as string).includes('400')) {
			noMoreData();
		} else {
			ElMessage.error(err as string);
		}
	}
	isLoading.value = false;
	isShow.value = true;
	offset += 50;
};

watch(subjectType, () => {
	data.value = [];
	offset = 0;
	getData();
});

getData();
</script>

<template>
	<n-space class="container" vertical>
		<n-radio-group v-model:value="subjectType" name="radiobuttongroup1">
			<n-radio-button
				class="text-center"
				v-for="item in subjectTypeList"
				:key="item.value"
				:value="item.value"
				:label="item.label"
			/>
		</n-radio-group>
	</n-space>
	<n-spin class="container min-height" :show="isLoading">
		<template #description> {{ '努力记载中<(＿　＿)>...' }} </template>
		<n-grid x-gap="12" :cols="cols">
			<n-gi class="card-list" v-if="isShow" v-for="item in data" :key="item">
				<div class="card">
					<div class="card-header">
						<img :src="item.subject.images.medium" width="180" />
					</div>
					<div class="card-body">
						<div>
							<a class="title" target="_blank" :href="`https://bgm.tv/subject/${item.subject_id}`">{{
								item.subject.name
							}}</a>
						</div>
						<span class="orange">标签：{{ item.tags.join('、') }} </span><br />
						{{ item.subject.short_summary }}<br />
						<i>
							<strong v-show="item.subject.eps"> 全{{ item.subject.eps }}话 </strong>
							<small>{{ item.subject.date }}</small>
						</i>
					</div>
				</div>
			</n-gi>
		</n-grid>
	</n-spin>
	<div class="center">
		<n-button class="text-center" type="info" dashed @click="getData"> View More... </n-button>
	</div>
</template>

<style scoped>
.container {
	--bs-gutter-x: 1.5rem;
	--bs-gutter-y: 0;
	margin: 20px auto;
	width: 900px;
	max-width: 80vw;
	padding: 25px 30px;
	height: auto;
	background-color: rgb(255, 255, 255, 0.9);
}
</style>
../assets/types ../func/method
