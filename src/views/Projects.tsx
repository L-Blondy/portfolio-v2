import { useUpdatedRef } from 'hooks/useUpdatedRef'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { useInView, InView } from 'react-intersection-observer'

enum TAB {
	FRONTEND = 'frontend',
	BACKEND = 'backend',
}

enum PROJECT_TITLE {
	H2O = 'H2O.ai',
	TINA = 'Tina Ponticelli',
	WEATHER = 'AccuWeather',
}

const MINIMUN_INTERSECTION_RATIO_TO_PLAY_VIDEO = 0.99;

export const Projects = () => {

	const [ activeTab, setActiveTab ] = useState<TAB>(TAB.FRONTEND)
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
	}

	return (
		<section>
			<div className='container'>
				<header className='flex flex-col items-center  mb-16 mt-20 md:mt-24 md:mb-20 lg:mt-32 lg:mb-20'>
					<h1>My Projects</h1>
					<div className='flex items-center mt-4'>
						<button
							onClick={() => setActiveTab(TAB.FRONTEND)}
							className={`link px-3 py-1 ${activeTab === TAB.FRONTEND ? 'active font-semibold' : ''}`}>
							Frontend
						</button>
						<div className='w-px h-5 bg-current opacity-70' />
						<button
							onClick={() => setActiveTab(TAB.BACKEND)}
							className={`link px-3 py-1 font-medium ${activeTab === TAB.BACKEND ? 'active font-semibold' : ''}`}
							disabled>
							Backend
						</button>
					</div>
				</header>

				<section className=''>
					<Project
						title={PROJECT_TITLE.H2O}
						description='Some description'
						srcTablet='/videos/H2O-tablet.mp4'
						srcPhone='/videos/H2O-phone.mp4'
						onObserverEntry={handleObserverEntry}
						canPlay={canPlayProjectTitle === PROJECT_TITLE.H2O}
					/>
					<Project
						title={PROJECT_TITLE.TINA}
						description='Some description'
						srcTablet='/videos/tina-tablet.mp4'
						srcPhone='/videos/tina-phone.mp4'
						onObserverEntry={handleObserverEntry}
						canPlay={canPlayProjectTitle === PROJECT_TITLE.TINA}
					/>
					<Project
						title={PROJECT_TITLE.WEATHER}
						description='Some description'
						srcTablet='/videos/weather-tablet.mp4'
						srcPhone='/videos/weather-phone.mp4'
						onObserverEntry={handleObserverEntry}
						canPlay={canPlayProjectTitle === PROJECT_TITLE.WEATHER}
					/>
				</section>
			</div>
		</section>
	)
}


interface ProjectProps {
	srcTablet: string
	srcPhone: string
	title: string
	description: string
	onObserverEntry: (entry: IntersectionObserverEntry) => void
	canPlay: boolean
	technologies?: any
	links?: any
}

const Project = ({
	title,
	description,
	technologies,
	links,
	canPlay,
	onObserverEntry,
	srcTablet,
	srcPhone,
}: ProjectProps) => {

	const sectionRef = useRef<HTMLElement | null>(null)

	useEffect(() => {
		const section = sectionRef.current
		if (!section) return
		canPlay
			? handlePlay(section)
			: handlePause(section)
	}, [ canPlay ])

	function handlePlay(section: HTMLElement) {
		const tablet = section.querySelectorAll('video')[ 0 ]
		const phone = section.querySelectorAll('video')[ 1 ]
		tablet.play()
	}

	function handlePause(section: HTMLElement) {
		const tablet = section.querySelectorAll('video')[ 0 ]
		const phone = section.querySelectorAll('video')[ 1 ]
		tablet.pause()
	}

	return (
		<InView
			as='section'
			ref={(inView: any) => { sectionRef.current = inView?.node || null }}
			className='grid grid-cols-2 gap-10 place-items-center'
			id={title}
			threshold={[ 0.01, 0.2, 0.4, 0.6, 0.8, 0.99 ]}
			onChange={(_, e) => e && onObserverEntry(e)}>

			<div className='relative my-20'>
				<video className='video tablet' muted>
					<source src={srcTablet} type="video/mp4" />
				</video>
				<div className='absolute inset-0 flex-center transform translate-x-2/5 translate-y-1/3 scale-85'>
					<video className='video phone' muted>
						<source src={srcPhone} type="video/mp4" />
					</video>
				</div>
			</div>

			<div>
				<h2 className='text-3xl'>{title}</h2>
				<p>{description}</p>
			</div>
		</InView>
	)
}