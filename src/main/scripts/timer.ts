export class Timer {
	static soon(time: number): number {
		const now = Date.now();
		const newRefresh = now + time * 1000;
		return newRefresh;
	}
}
