import { useCallback, useState } from 'react'
import { InView } from 'react-intersection-observer'
import { Video } from 'components/Video'
import { Button } from 'components/Button'
import { GithubIcon } from 'components/icons/GithubIcon'
import Link from 'next/link'
import { cn } from 'utils/cn'
import { BaseProjectProps, ProjectConfig } from 'types'
import { VIDEO_PLAYBACK_RATE } from 'config'
import { getObserverRootElement } from 'utils/getObserverRootElement'
import { useWindowWidth } from '@react-hook/window-size'


enum DEVICE {
	PHONE = 'phone',
	TABLET = 'tablet',
}

interface Props extends BaseProjectProps {
	canPlay: boolean
	onObserverEntry: (e: IntersectionObserverEntry) => void
	srcTablet: ProjectConfig[ 'VIDEO' ][ 'TABLET' ]
	srcPhone: ProjectConfig[ 'VIDEO' ][ 'PHONE' ]
}

export const VideoProject = ({
	title,
	description,
	technologies,
	githubUrl,
	projectUrl,
	canPlay,
	onObserverEntry,
	srcTablet,
	srcPhone,
}: Props) => {

	const [ device, setDevice ] = useState<DEVICE>(DEVICE.TABLET)
	const [ wasPaused, setWasPaused ] = useState(false)
	const windowWidth = useWindowWidth()

	const handledEnded = useCallback((device: DEVICE) => () => setDevice(device), [])
	const handlePause = useCallback(() => () => setWasPaused(true), [])
	const handlePlay = useCallback((device: DEVICE) => () => {
		setDevice(device)
		setWasPaused(false)
	}, [])

	return (
		<InView
			as='article'
			id={title}
			threshold={[ 0.01, 0.2, 0.4, 0.6, 0.8, 0.99 ]}
			onChange={(_, e) => e && onObserverEntry(e)}>

			<div className='grid grid-cols-2 gap-24 lg:gap-32 place-items-center'>

				<InView rootMargin='99999px 0px 0px 0px' root={getObserverRootElement()}>
					{({ ref, inView }) => (
						<div ref={ref} className={cn`relative opacity-0 speed-700 ${inView && 'animate-from-left-sm'}`} style={{ margin: '35% 0' }}>
							<div className={cn`
									transform
									transition-all
									duration-1000
									${(wasPaused || !canPlay) && '-translate-x-8 lg:-translate-x-12'}
									${!wasPaused && canPlay && device === DEVICE.PHONE && '-translate-x-12 opacity-0'}
									${!wasPaused && canPlay && device === DEVICE.TABLET && 'scale-110'}
								`}>
								<Video
									className='video tablet'
									src={srcTablet}
									type='video/mp4'
									play={canPlay && device === DEVICE.TABLET}
									onEnded={handledEnded(DEVICE.PHONE)}
									playbackRate={VIDEO_PLAYBACK_RATE}
									onPause={handlePause()}
									onPlay={handlePlay(DEVICE.TABLET)}
									preloadWhen={windowWidth > 768}
									muted
								/>
							</div>

							<div
								className={cn`
									absolute 
									inset-0
									flex-center
									transform
									scale-75
									transition-all
									duration-1000
									${(wasPaused || !canPlay) && 'translate-x-1/3 translate-y-1/3'}
									${!wasPaused && canPlay && device === DEVICE.TABLET && 'translate-x-2/5 translate-y-1/3 opacity-0 pointer-events-none'}
									${!wasPaused && canPlay && device === DEVICE.PHONE && 'scale-90'}
								`}>
								<Video
									className='video phone'
									src={srcPhone}
									type='video/mp4'
									play={canPlay && device === DEVICE.PHONE}
									onEnded={handledEnded(DEVICE.TABLET)}
									playbackRate={VIDEO_PLAYBACK_RATE}
									onPause={handlePause()}
									onPlay={handlePlay(DEVICE.PHONE)}
									preloadWhen={windowWidth > 768}
									muted
								/>
							</div>
						</div>
					)}
				</InView>

				<InView rootMargin='99999px 0px 0px 0px' root={getObserverRootElement()}>
					{({ ref, inView }) => (
						<div ref={ref} className='flex flex-col'>
							<div className='opacity-85'>
								<h2 className={cn`mb-2 text-3xl opacity-0 speed-500 ${inView && 'animate-from-right-sm'}`}>
									{title}
								</h2>
							</div>
							<div>
								<div className='pb-1 opacity-90'>
									<p className={cn`opacity-0 await-75 speed-500 ${inView && 'animate-from-right-sm'}`}>
										{description}
									</p>
								</div>
								<div className='opacity-90'>
									<h3 className={cn`text-lg mb-1.5 mt-1.5 opacity-0 await-150 speed-500 ${inView && 'animate-from-right-sm'}`}>
										Technology
									</h3>
								</div>
								<div className='opacity-90'>
									<p className={cn`opacity-0 await-250 speed-500 ${inView && 'animate-from-right-sm'}`}>
										{technologies}
									</p>
								</div>
							</div>
							<div className={cn`flex mt-4 gap-3 py-1 opacity-0 await-250 speed-700 ${inView && 'animate-from-right-sm'}`}>
								<Link href={projectUrl}>
									<a hrefLang='en' target='_blank' rel='noopener noreferrer'>
										<span className='absolute invisible pointer-events-none'>VISIT WEBSITE</span>
										<Button>
											Visit website
										</Button>
									</a>
								</Link>
								<Link href={githubUrl}>
									<a hrefLang='en' target='_blank' rel='noopener noreferrer'>
										<span className='absolute invisible pointer-events-none'>GITHUB</span>
										<Button className='lg:w-32' outlined>
											Github
											<GithubIcon className='pb-px' />
										</Button>
									</a>
								</Link>
							</div>
						</div>
					)}
				</InView>
			</div >
		</InView >
	)
}