import { ElMessage } from 'element-plus';
import { subjectType } from './types';

export const subjectTypeList = [
	{
		value: subjectType.anime,
		label: 'Anime',
	},
	{
		value: subjectType.game,
		label: 'Galgame',
	},
];

export const noMoreData = () => {
	ElMessage.warning('已经没有更多了...');
};
