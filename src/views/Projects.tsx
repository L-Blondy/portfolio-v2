import { useWindowWidth } from '@react-hook/window-size';
import { ImageProjects } from 'components/ImageProjects'
import { VideoProjects } from 'components/VideoProjects'
import { useIsMountedState } from 'hooks/useIsMountedState';
import { SECTION_ID } from 'types';
import { SectionHeaderWithTabs } from 'components/SectionHeaderWithTabs'
import { useState } from 'react';


enum TAB {
	FRONTEND = 'frontend',
	BACKEND = 'backend',
}


export const Projects = () => {

	const [ activeTab, setActiveTab ] = useState<TAB>(TAB.FRONTEND)
	const isMounted = useIsMountedState()
	const width = useWindowWidth()

	return (
		<section id={SECTION_ID.PROJECTS} className='overflow-hidden'>
			<div className='container'>

				<SectionHeaderWithTabs
					title='My Projects'
					id={SECTION_ID.PROJECTS}
					className='pb-16 pt-8 mt-12 md:mt-16 md:pb-0 lg:mt-20'
					disableBE={true}
					onTabChange={setActiveTab}
					tab={activeTab}
				/>

				{width >= 768 || !isMounted
					? <VideoProjects />
					: <ImageProjects />
				}
			</div>
		</section>
	)
}
