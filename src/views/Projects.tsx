import { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { useWindowWidth } from '@react-hook/window-size';
import { cn } from 'utils/cn';
import { ImageProjects } from 'components/ImageProjects'
import { VideoProjects } from 'components/VideoProjects'
import { useIsMountedState } from 'hooks/useIsMountedState';
import { SECTION_ID } from 'types';


enum TAB {
	FRONTEND = 'frontend',
	BACKEND = 'backend',
}


export const Projects = () => {

	const isMounted = useIsMountedState()
	const [ activeTab, setActiveTab ] = useState<TAB>(TAB.FRONTEND)

	const width = useWindowWidth()


	return (
		<section id={SECTION_ID.PROJECTS} className='overflow-hidden'>
			<div className='container'>
				<header className='flex flex-col items-center pb-16 pt-8 mt-12 md:mt-16 md:pb-0 lg:mt-20'>
					<InView>
						{({ ref, inView }) => (<>
							<h1 ref={ref} className={cn`opacity-0 ${inView && 'animate-fadein'} await-100 speed-1500`}>My Projects</h1>
							<div className='flex items-center mt-4'>
								<button
									onClick={() => setActiveTab(TAB.FRONTEND)}
									className={cn`
										link
										px-3
										py-1
										${activeTab === TAB.FRONTEND && 'active font-semibold'} 
										${inView && 'animate-from-left-sm'} 
										await-300 
										opacity-0
										transition-none
									`}>
									Frontend
								</button>
								<div className={`w-px h-5 bg-current opacity-70 transform scale-0 ${inView && 'animate-scalein-full'} await-500`} />
								<button
									onClick={() => setActiveTab(TAB.BACKEND)}
									className={cn`
										link
										px-3
										py-1
										font-medium 
										${activeTab === TAB.BACKEND && 'active font-semibold'}
										${inView && 'animate-from-right-sm'}
										await-300
										transition-none
										filter
										brightness-150
										text-gray-500
									`}
									style={{ opacity: 0 }}
									disabled>
									Backend
								</button>
							</div>
						</>)}
					</InView>
				</header>


				{width >= 768 || !isMounted
					? <VideoProjects />
					: <ImageProjects />
				}
			</div>
		</section>
	)
}
