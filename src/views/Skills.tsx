import { useState } from 'react'
import { Skill } from 'components/Skill'
import { SectionHeaderWithTabs } from 'components/SectionHeaderWithTabs'
import { InView } from 'react-intersection-observer'
import { cn } from 'utils/cn'
import { SKILLS } from 'config'
import { SECTION_ID } from 'types'
import { getObserverRootElement } from 'utils/getObserverRootElement'
import { useWindowWidth } from '@react-hook/window-size';


enum TAB {
	FRONTEND = 'frontend',
	BACKEND = 'backend',
}

export const Skills = () => {

	const [ activeTab, setActiveTab ] = useState<TAB>(TAB.FRONTEND)
	const windowWidth = useWindowWidth()

	return (
		<article className='overflow-hidden pb-10'>
			<div className='container'>

				<SectionHeaderWithTabs
					title='My Skills'
					id={SECTION_ID.SKILLS}
					className='flex flex-col items-center pt-8 mb-16 mt-12 md:mt-16 md:mb-20 lg:mt-24 lg:mb-20'
					disableBE={true}
					onTabChange={setActiveTab}
					tab={activeTab}
				/>

				<section className='flex flex-wrap justify-center gap-y-12 sm:gap-y-14 md:gap-y-16'>
					{SKILLS.map((SKILL, i) => (
						<InView key={`skill-${activeTab}-${SKILL.TITLE}`} rootMargin={`${windowWidth > 768 ? '99999px' : '0px'} 0px 0px 0px`} root={getObserverRootElement()}>
							{({ ref, inView }) => (
								<Skill
									icon={SKILL.ICON}
									title={SKILL.TITLE}
									content={SKILL.CONTENT}
									className={cn`
										w-1/2 md:w-1/3 px-4 xs:px-2 sm:px-6 md:px-4 lg:px-8
										opacity-0
										${inView && `
											${i % 2 === 0 && 'animate-from-left-sm'}
											${i % 2 === 1 && 'animate-from-right-sm'}
											${i + SKILLS.length % 2 >= SKILLS.length && 'animate-from-bottom-sm'}
											${i % 3 === 0 && 'md:animate-from-left-sm'}
											${i % 3 === 1 && 'md:animate-from-bottom-sm'}
											${i % 3 === 2 && 'md:animate-from-right-sm'}
											${i + SKILLS.length % 3 >= SKILLS.length && 'md:animate-from-bottom-sm'}
										`}
									`}
									ref={ref}
								/>
							)}
						</InView>
					))}
				</section>
			</div>
		</article>
	)
}
