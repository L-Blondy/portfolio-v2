import { useRef, useEffect } from 'react'

/**
 * Updates the reference everytime the value changes
 * @param val 
 * @returns valRef
 */
export const useUpdatedRef = <T extends unknown>(val: T) => {
	const valRef = useRef<T>(val)

	useEffect(() => {
		valRef.current = val
	})

	return valRef
}