export interface ISolucitudes {
	id: any;
	cliente: string;
	email: string;
	date: Date;
	isSupport?: boolean;
	isRetiro?: boolean;
	isOther?: boolean;
	description: string;
}