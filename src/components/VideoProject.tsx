import { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { Video } from 'components/Video'
import { Button } from 'components/Button'
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
									<svg className='pb-px' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M18.6584 5.22511C17.7642 3.69297 16.5513 2.47997 15.0193 1.58584C13.487 0.691664 11.8143 0.24469 9.99984 0.24469C8.18563 0.24469 6.51234 0.691801 4.98042 1.58584C3.44828 2.47992 2.23537 3.69297 1.34115 5.22511C0.447065 6.75721 0 8.43027 0 10.2443C0 12.4233 0.635733 14.3827 1.90752 16.123C3.17917 17.8635 4.82195 19.0678 6.83572 19.7361C7.07013 19.7797 7.24366 19.7491 7.35649 19.6451C7.46936 19.541 7.52573 19.4107 7.52573 19.2547C7.52573 19.2286 7.52349 18.9943 7.51916 18.5516C7.51469 18.1088 7.51259 17.7225 7.51259 17.3929L7.2131 17.4447C7.02216 17.4797 6.78127 17.4945 6.49045 17.4903C6.19976 17.4863 5.898 17.4558 5.58556 17.3992C5.27298 17.343 4.98225 17.2128 4.71313 17.0088C4.44416 16.8048 4.25321 16.5378 4.14034 16.2082L4.01013 15.9086C3.92335 15.7091 3.78671 15.4875 3.60005 15.2446C3.41339 15.0015 3.22463 14.8367 3.03369 14.7499L2.94252 14.6846C2.88178 14.6413 2.82541 14.5889 2.77328 14.5282C2.7212 14.4675 2.68221 14.4068 2.65617 14.346C2.63008 14.2851 2.6517 14.2351 2.72125 14.196C2.79079 14.1568 2.91648 14.1378 3.09886 14.1378L3.35917 14.1767C3.53279 14.2115 3.74754 14.3154 4.0037 14.4891C4.25973 14.6627 4.4702 14.8883 4.63515 15.166C4.8349 15.522 5.07556 15.7932 5.3578 15.9799C5.63983 16.1666 5.92417 16.2597 6.21057 16.2597C6.49697 16.2597 6.74433 16.238 6.95275 16.1948C7.16093 16.1514 7.35626 16.0862 7.53863 15.9994C7.61675 15.4176 7.82946 14.9706 8.17655 14.6582C7.68183 14.6062 7.23705 14.5279 6.84197 14.4238C6.44712 14.3195 6.0391 14.1503 5.61816 13.9157C5.197 13.6815 4.84762 13.3905 4.56993 13.0435C4.2922 12.6963 4.06427 12.2404 3.88645 11.6763C3.70855 11.112 3.61957 10.461 3.61957 9.72322C3.61957 8.67271 3.96252 7.77876 4.64828 7.04087C4.32704 6.25109 4.35737 5.36571 4.73936 4.38484C4.9911 4.30663 5.36442 4.36532 5.85914 4.56056C6.35395 4.75588 6.71624 4.92321 6.94636 5.06194C7.17648 5.20062 7.36087 5.31815 7.49978 5.41346C8.30721 5.18785 9.14046 5.07503 9.99975 5.07503C10.859 5.07503 11.6925 5.18785 12.4999 5.41346L12.9947 5.10111C13.3331 4.8927 13.7326 4.70171 14.1924 4.52809C14.6525 4.35456 15.0043 4.30677 15.2474 4.38498C15.6379 5.3659 15.6727 6.25122 15.3514 7.04101C16.0371 7.7789 16.3802 8.67307 16.3802 9.72336C16.3802 10.4612 16.2909 11.1142 16.1132 11.6828C15.9354 12.2516 15.7055 12.707 15.4235 13.05C15.1411 13.393 14.7895 13.6816 14.3686 13.9159C13.9475 14.1503 13.5394 14.3195 13.1445 14.4237C12.7495 14.528 12.3047 14.6063 11.81 14.6584C12.2612 15.0489 12.4869 15.6652 12.4869 16.5072V19.2543C12.4869 19.4103 12.5411 19.5406 12.6498 19.6448C12.7583 19.7487 12.9296 19.7793 13.164 19.7357C15.1781 19.0675 16.8208 17.8631 18.0924 16.1226C19.3639 14.3823 19.9999 12.4229 19.9999 10.2439C19.9994 8.43014 19.5521 6.75721 18.6584 5.22511Z" fill="currentColor" />
									</svg>
								</Button>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</InView>
	)
}