import axios from 'axios';
import { subjectType as subjectTypes } from '../func/types';
import config from '../config';

const http = (offset: number = 0, subjectType: subjectTypes = subjectTypes.anime) => {
	const result = axios.get(`https://api.bgm.tv/v0/users/${config.userName}/collections`, {
		params: {
			limit: 50,
			offset,
			subject_type: subjectType,
		},
		/* 		headers: {
			'User-Agent': 'czy0729/Bangumi/6.4.0 (Android) (http://github.com/czy0729/Bangumi)',
		}, */
	});
	return result;
};

export default http;
