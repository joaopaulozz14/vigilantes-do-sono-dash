import { IGeneral } from "@types";

export const arithmeticAverage = (a: IGeneral, b: IGeneral): IGeneral => {
	const res: IGeneral = {
		currentSessions: (a.currentSessions + b.currentSessions) / 2,
		reportedNights: (a.reportedNights + b.reportedNights) / 2,
		appliedTechniques: (a.appliedTechniques + b.appliedTechniques) / 2,
	};
	return res;
};
