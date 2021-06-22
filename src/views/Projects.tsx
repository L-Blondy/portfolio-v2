import { useState } from 'react'
import { cn } from 'utils/cn';
import { useWindowWidth } from '@react-hook/window-size';
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
		<section id={SECTION_ID.PROJECTS}>
			<div className='container'>
				<header className='flex flex-col items-center pb-16 pt-8 mt-12 md:mt-16 md:pb-0 lg:mt-20'>
					<h1>My Projects</h1>
					<div className='flex items-center mt-4'>
						<button
							onClick={() => setActiveTab(TAB.FRONTEND)}
							className={cn`link px-3 py-1 ${activeTab === TAB.FRONTEND && 'active font-semibold'}`}>
							Frontend
						</button>
						<div className='w-px h-5 bg-current opacity-70' />
						<button
							onClick={() => setActiveTab(TAB.BACKEND)}
							className={cn`link px-3 py-1 font-medium ${activeTab === TAB.BACKEND && 'active font-semibold'}`}
							disabled>
							Backend
						</button>
					</div>
				</header>


				{width >= 768 || !isMounted
					? <VideoProjects />
					: <ImageProjects />
				}
			</div>
		</section>
	)
}
