import { VideoProject } from 'components/VideoProject'
import { useRef, useState } from 'react';
import { PROJECTS } from 'config';


const MINIMUN_INTERSECTION_RATIO_TO_PLAY_VIDEO = 0.99;

export const VideoProjects = () => {

	const [ canPlayProjectTitle, setCanPlayProjectTitle ] = useState<string>('')

	const mostVisibleEntryRef = useRef<IntersectionObserverEntry | null>(null)

	function handleObserverEntry(e: IntersectionObserverEntry) {
		const noVisibleEntry = !mostVisibleEntryRef.current
		const isSameTarget = e.target === mostVisibleEntryRef.current?.target
		const hasHigherIntersectionRatio = e.intersectionRatio > (mostVisibleEntryRef.current?.intersectionRatio || 0)

		if (noVisibleEntry || isSameTarget || hasHigherIntersectionRatio) {
			mostVisibleEntryRef.current = e
		}
		if (!mostVisibleEntryRef.current) return

		if (mostVisibleEntryRef.current.intersectionRatio >= MINIMUN_INTERSECTION_RATIO_TO_PLAY_VIDEO) {
			setCanPlayProjectTitle(mostVisibleEntryRef.current.target.id)
		}
		else {
			setCanPlayProjectTitle('')
		}
	}


	return (
		<section className=''>
			{PROJECTS.map(PROJECT => (
				<VideoProject
					title={PROJECT.TITLE}
					description={PROJECT.DESCRIPTION}
					technologies={PROJECT.TECHNOLOGIES}
					srcTablet={PROJECT.VIDEO.TABLET}
					srcPhone={PROJECT.VIDEO.PHONE}
					onObserverEntry={handleObserverEntry}
					canPlay={canPlayProjectTitle === PROJECT.TITLE}
					projectUrl={PROJECT.URL.PROJECT}
					githubUrl={PROJECT.URL.GITHUB}
					key={`video-project-${PROJECT.TITLE}`}
				/>
			))}

		</section>
	)
}