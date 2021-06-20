import React, { SyntheticEvent, useEffect, useRef } from 'react'


const noop = () => { }

interface Props extends Omit<React.ComponentProps<'video'>, 'children'> {
	src: string
	type: string
	play: boolean
	onToggle?: (isPlaying: boolean) => void
	playbackRate?: number
}

export const Video = ({
	src,
	type,
	play,
	onPlay = noop,
	onPause = noop,
	onToggle = noop,
	playbackRate = 1,
	...props
}: Props) => {

	const ref = useRef<HTMLVideoElement | null>(null)

	usePlay(play, ref)
	usePlaybackRate(playbackRate, ref)

	function handlePlay(e: SyntheticEvent<HTMLVideoElement, Event>) {
		onPlay(e)
		onToggle(true)
	}

	function handlePause(e: SyntheticEvent<HTMLVideoElement, Event>) {
		onPause(e)
		onToggle(false)
	}

	return (
		<video ref={ref} onPlay={handlePlay} onPause={handlePause} {...props}>
			<source src={src} type={type} />
		</video>
	)
}

function usePlay(play: boolean, videoRef: React.MutableRefObject<HTMLVideoElement | null>) {
	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		if (play && video.paused)
			video.play()
		if (!play && !video.paused)
			video.pause()
	}, [ play ])
}

function usePlaybackRate(rate: number, videoRef: React.MutableRefObject<HTMLVideoElement | null>) {
	useEffect(() => {
		const video = videoRef.current
		if (!video) return
		video.defaultPlaybackRate = rate
		video.playbackRate = rate
	}, [ rate ])
}