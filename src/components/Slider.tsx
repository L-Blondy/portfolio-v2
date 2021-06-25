import { SLIDER_INTERVAL } from 'config'
import { useInterval } from 'hooks/useInterval'
import Image from 'next/image'
import { forwardRef, useState } from 'react'
import { cn } from 'utils/cn'


interface Props {
	images: [ string, string, string ]
	height: number
	width: number
	canPlay: boolean
	className?: string
}

export const Slider = forwardRef<HTMLDivElement, Props>(({
	images,
	height,
	width,
	canPlay,
	className = '',
}, ref) => {

	const [ playSlider, setPlaySlider ] = useState(true)
	const [ idx, setIdx ] = useState(0)

	useInterval(next, canPlay && playSlider ? SLIDER_INTERVAL : 0)

	function next() {
		setIdx(i => (i + 1) % 3)
	}

	function handleClick() {
		setPlaySlider(false)
		next()
	}

	return (
		<div ref={ref} className={`relative pt-1/2 overflow-hidden rounded slider ${className}`} onMouseEnter={() => setPlaySlider(false)} onMouseLeave={() => setPlaySlider(true)} onClick={handleClick}>
			<div className={cn`slider-image ${getTransform(0, idx)} ${getZIndex(0, idx)} ${getDelay(0, idx)}`}>
				<Image src={images[ 0 ]} layout='responsive' width={width} height={height} alt='slider-1' loading='eager' />
			</div>
			<div className={cn`slider-image ${getTransform(1, idx)} ${getZIndex(1, idx)} ${getDelay(1, idx)}`}>
				<Image src={images[ 1 ]} layout='responsive' width={width} height={height} alt='slider-2' />
			</div>
			<div className={cn`slider-image ${getTransform(2, idx)} ${getZIndex(2, idx)} ${getDelay(2, idx)}`}>
				<Image src={images[ 2 ]} layout='responsive' width={width} height={height} alt='slider-3' />
			</div>
		</div>
	)
})

export function isBefore(selfIdx: number, idx: number): boolean {
	return (idx + 3 - selfIdx) % 3 === 1
}

export function isAfter(selfIdx: number, idx: number): boolean {
	return (idx + 3 - selfIdx) % 3 === 2
}

/**
 * @param selfIdx 
 * @param idx 
 * @returns translation className
 */
function getTransform(selfIdx: number, idx: number): string {
	if (isBefore(selfIdx, idx))
		return '-translate-x-full'
	if (isAfter(selfIdx, idx))
		return 'translate-x-full'
	return ''
}

/** 
 * @param selfIdx 
 * @param idx 
 * @returns z-index className
 */
function getZIndex(selfIdx: number, idx: number): string {
	if (isBefore(selfIdx, idx))
		return 'z-10'
	if (isAfter(selfIdx, idx))
		return 'z-0'
	return 'z-20'
}

/**
 * @param selfIdx 
 * @param idx 
 * @returns delay className
 */
function getDelay(selfIdx: number, idx: number): string {
	if (isBefore(selfIdx, idx))
		return 'delay-700'
	return 'delay-0'
}