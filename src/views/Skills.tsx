import { useState } from 'react'
import { Skill } from 'components/Skill'
import { SECTION_ID } from 'types'
import { InView } from 'react-intersection-observer'
import { cn } from 'utils/cn'
import { SKILLS } from 'config'


enum TAB {
	FRONTEND = 'frontend',
	BACKEND = 'backend',
}

export const Skills = () => {

	const [ activeTab, setActiveTab ] = useState<TAB>(TAB.FRONTEND)

	return (
		<article className='overflow-hidden'>
			<div className='container'>
				<header id={SECTION_ID.SKILLS} className='flex flex-col items-center pt-8 mb-16 mt-12 md:mt-16 md:mb-20 lg:mt-24 lg:mb-20'>
					<InView>
						{({ ref, inView }) => (<>
							<h1 ref={ref} className={cn`opacity-0 ${inView && 'animate-fadein'} await-100 speed-1500`}>My Skills</h1>
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

				<section className='flex flex-wrap justify-center gap-y-12 sm:gap-y-14 md:gap-y-16'>
					{SKILLS.map(SKILL => (
						<Skill
							icon={SKILL.ICON}
							title={SKILL.TITLE}
							content={SKILL.CONTENT}
							className='w-1/2 md:w-1/3 px-4 xs:px-2 sm:px-6 md:px-4 lg:px-8'
							key={`skill-${activeTab}-${SKILL.TITLE}`}
						/>
					))}
				</section>
			</div>
		</article>
	)
}
