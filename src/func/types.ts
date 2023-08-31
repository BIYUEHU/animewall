export interface bangumiData {
	updated_at: string;
	comment: string | null;
	tags: tags[];
	subject: {
		date: string;
		images: {
			small: string;
			grid: string;
			large: string;
			medium: string;
			common: string;
		};
		name: string;
		name_cn: string;
		short_summary: string;
		tags: {
			name: string;
			count: number;
		}[];
		score: number;
		type: number;
		id: number;
		eps: number;
		volumes: number;
		collection_total: number;
		rank: number;
	};
	subject_id: number;
	vol_status: number;
	ep_status: number;
	subject_type: subjectType;
	type: collectionType;
	rate: number;
	private: boolean;
}

export interface tags {
	name: string;
	count: number;
}

export type collectionType = 1 | 2 | 3 | 4 | 5;

export const enum subjectType {
	book = 1,
	anime,
	music,
	game,
	real = 6,
}
