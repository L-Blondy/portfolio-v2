import { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { Video } from 'components/Video'
import { Button } from 'components/Button'
import { GithubIcon } from 'components/icons/GithubIcon'
import Link from 'next/link'
import { cn } from 'utils/cn'
import { BaseProjectProps, ProjectConfig } from 'types'
import { VIDEO_PLAYBACK_RATE } from 'config'


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

	return (
		<InView
			as='article'
			id={title}
			threshold={[ 0.01, 0.2, 0.4, 0.6, 0.8, 0.99 ]}
			onChange={(_, e) => e && onObserverEntry(e)}>
			<div className='grid grid-cols-2 gap-24 lg:gap-32 place-items-center'>

				<div className={cn`relative`} style={{ margin: '41% 0' }}>
					<Video
						className={cn`
						video
						tablet
						transform
						transition-all
						duration-1000
						${!canPlay && '-translate-x-8 lg:-translate-x-12'}
						${canPlay && device === DEVICE.PHONE && '-translate-x-12 opacity-0'}
						${canPlay && device === DEVICE.TABLET && 'scale-110'}
					`}
						src={srcTablet}
						type='video/mp4'
						play={canPlay && device === DEVICE.TABLET}
						onEnded={() => setDevice(DEVICE.PHONE)}
						playbackRate={VIDEO_PLAYBACK_RATE}
						controls={false}
						muted
					/>
					<div
						className={`
						absolute 
						inset-0
						flex-center
						transform
						scale-75
						transition-all
						duration-1000
						${!canPlay && 'translate-x-1/3 translate-y-1/3'}
						${canPlay && device === DEVICE.TABLET && 'translate-x-2/5 translate-y-1/3 opacity-0'}
						${canPlay && device === DEVICE.PHONE && 'scale-90'}
					`}>
						<Video
							className='video phone'
							src={srcPhone}
							type='video/mp4'
							play={canPlay && device === DEVICE.PHONE}
							onEnded={() => setDevice(DEVICE.TABLET)}
							playbackRate={VIDEO_PLAYBACK_RATE}
							controls={false}

							muted
						/>
					</div>
				</div>

				<div className='flex flex-col gap-4'>
					<h2 className='text-3xl'>{title}</h2>
					<p>{description}</p>
					<div className='flex gap-3 py-1'>
						<Link href={projectUrl}>
							<a target='_blank' rel='noopener noreferrer'>
								<Button>
									VISIT WEBSITE
								</Button>
							</a>
						</Link>
						<Link href={githubUrl}>
							<a target='_blank' rel='noopener noreferrer'>
								<Button className='lg:w-32' outlined>
									GITHUB
									<GithubIcon className='pb-px' />
								</Button>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</InView>
	)
}