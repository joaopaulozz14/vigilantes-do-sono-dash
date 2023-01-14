export interface IClientJSON {
	data?: IData;
}

export interface IData {
	user: IUser[];
}

export interface IUser {
	points: number;
	dayGoal: number;
	nightGoal: number;
	userProgramSessions: IUserProgramSession[];
	sleepDiaries: ISleepDiary[];
	ratings: IRating[];
	isi: IIsi[];
	gad: IGad[];
	phq: IGad[];
	productivity: IProductivity[];
}

export interface IGad {
	q1: number;
	q2: number;
	createdAt: Date;
}

export interface IIsi {
	q1: number;
	q2: number;
	q3: number;
	q4: number;
	q5: number;
	q6: number;
	q7: number;
	createdAt: Date;
}

export interface IProductivity {
	createdAt: Date;
	q1: number;
	q2: number;
	q3: number;
	q4: number;
}

export interface IRating {
	label: string;
	grade: number;
	created: Date;
}

export interface ISleepDiary {
	autogenicTraining: boolean | null;
	behaviorActivation: boolean | null;
	challengeCatastrophicThinking: boolean | null;
	concentration: number | null;
	createdAt: Date;
	date: Date;
	deepBreath: boolean | null;
	energy: number | null;
	getUp: string;
	goBed: string;
	goSleep: string;
	grade: number | null;
	gratitude: boolean | null;
	humor: number | null;
	imagery: boolean | null;
	lightTherapy: boolean | null;
	meditation: boolean | null;
	paradoxicalIntention: boolean | null;
	parkingLot: boolean | null;
	pmr: boolean | null;
	relationships: number | null;
	stimulusControl: boolean | null;
	tags: ITag[];
	thoughtBlock: boolean | null;
	timeToSleep: number;
	timezone: number;
	wakeUp: string;
	wakeUpCount: number;
	wakeUpDuration: number;
}

export interface ITag {
	sleepTag: TSleepTag;
}

export interface IUserProgramSession {
	sessionID: number;
	state: IState;
	createdAt: Date;
}

export type IState = "FINISHED" | "STARTED" | "SEEN";

export type TSleepTag =
	| "bathroom"
	| "medicine"
	| "dream"
	| "exercise"
	| "alcohol"
	| "pain"
	| "temperature"
	| "meal"
	| "partner"
	| "noise"
	| "light"
	| "nap"
	| "nicotine"
	| "caffeine";
