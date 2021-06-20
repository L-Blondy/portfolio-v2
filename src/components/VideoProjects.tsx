import { VideoProject } from 'components/VideoProject'
import { useRef, useState } from 'react';
import { PROJECT_TITLE } from 'data'

const MINIMUN_INTERSECTION_RATIO_TO_PLAY_VIDEO = 0.99;



export const VideoProjects = () => {

	const [ canPlayProjectTitle, setCanPlayProjectTitle ] = useState<PROJECT_TITLE | ''>('')

	const mostVisibleEntryRef = useRef<IntersectionObserverEntry | null>(null)

	function handleObserverEntry(e: IntersectionObserverEntry) {
		const noVisibleEntry = !mostVisibleEntryRef.current
		const isSameTarget = e.target === mostVisibleEntryRef.current?.target
		const hasHigherIntersectionRatio = e.intersectionRatio > (mostVisibleEntryRef.current?.intersectionRatio || 0)

		if (noVisibleEntry || isSameTarget || hasHigherIntersectionRatio) {
			mostVisibleEntryRef.current = e
		}
		if (!mostVisibleEntryRef.current) return

		if (mostVisibleEntryRef.current.intersectionRatio >= MINIMUN_INTERSECTION_RATIO_TO_PLAY_VIDEO)
			setCanPlayProjectTitle(mostVisibleEntryRef.current.target.id as PROJECT_TITLE)
		else
			setCanPlayProjectTitle('')
	}


	return (
		<section className=''>
			<VideoProject
				title={PROJECT_TITLE.H2O}
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				srcTablet='/videos/H2O-tablet.mp4'
				srcPhone='/videos/H2O-phone.mp4'
				onObserverEntry={handleObserverEntry}
				canPlay={canPlayProjectTitle === PROJECT_TITLE.H2O}
				projectUrl='https://l-blondy.github.io/H2O/'
				githubUrl='https://github.com/L-Blondy/H2O'
			/>
			<VideoProject
				title={PROJECT_TITLE.TINA}
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				srcTablet='/videos/tina-tablet.mp4'
				srcPhone='/videos/tina-phone.mp4'
				onObserverEntry={handleObserverEntry}
				canPlay={canPlayProjectTitle === PROJECT_TITLE.TINA}
				projectUrl='https://l-blondy.github.io/Tina-Ponticelli/'
				githubUrl='https://github.com/L-Blondy/Tina-Ponticelli'
			/>
			<VideoProject
				title={PROJECT_TITLE.WEATHER}
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				srcTablet='/videos/weather-tablet.mp4'
				srcPhone='/videos/weather-phone.mp4'
				onObserverEntry={handleObserverEntry}
				canPlay={canPlayProjectTitle === PROJECT_TITLE.WEATHER}
				projectUrl='https://l-blondy.github.io/weather/'
				githubUrl='https://github.com/L-Blondy/weather'
			/>
		</section>
	)
}