import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

const range = (start: number, stop: number, step: number = 1): number[] =>
	Array.from(
		{ length: Math.floor((stop - start) / step) + 1 },
		(value, index) => start + index * step
	)
export default range
