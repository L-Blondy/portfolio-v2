import { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { Video } from 'components/Video'
import { Button } from 'components/Button'
import { GithubIcon } from 'components/icons/GithubIcon'
import Link from 'next/link'
import { cn } from 'utils/cn'
import { BaseProjectProps, ProjectConfig } from 'types'
import { VIDEO_PLAYBACK_RATE } from 'config'
import { getObserverRootElement } from 'utils/getObserverRootElement'


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
	console.log(wasPaused, canPlay)

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
									onEnded={() => setDevice(DEVICE.PHONE)}
									playbackRate={VIDEO_PLAYBACK_RATE}
									onPause={() => { setWasPaused(true) }}
									onPlay={() => { setDevice(DEVICE.TABLET); setWasPaused(false) }}
									muted
								/>
							</div>

							<div
								className={`
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
									onEnded={() => setDevice(DEVICE.TABLET)}
									playbackRate={VIDEO_PLAYBACK_RATE}
									onPause={() => { setWasPaused(true) }}
									onPlay={() => { setDevice(DEVICE.PHONE); setWasPaused(false) }}
									muted
								/>
							</div>
						</div>
					)}
				</InView>

				<InView rootMargin='99999px 0px 0px 0px' root={getObserverRootElement()}>
					{({ ref, inView }) => (
						<div ref={ref} className='flex flex-col gap-4'>
							<h2 className={cn`text-3xl opacity-0 speed-500 ${inView && 'animate-from-right-sm'}`}>{title}</h2>
							<p className={cn`opacity-0 await-100 speed-500 ${inView && 'animate-from-right-sm'}`}>{description}</p>
							<div className='flex gap-3 py-1'>
								<Link href={projectUrl}>
									<a className={cn`opacity-0 await-200 speed-500 ${inView && 'animate-from-right-sm'}`} target='_blank' rel='noopener noreferrer'>
										<Button>
											VISIT WEBSITE
										</Button>
									</a>
								</Link>
								<Link href={githubUrl}>
									<a className={cn`opacity-0 await-300 speed-500 ${inView && 'animate-from-right-sm'}`} target='_blank' rel='noopener noreferrer'>
										<Button className='lg:w-32' outlined>
											GITHUB
											<GithubIcon className='pb-px' />
										</Button>
									</a>
								</Link>
							</div>
						</div>
					)}
				</InView>
			</div>
		</InView>
	)
}