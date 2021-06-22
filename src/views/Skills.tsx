import { useState } from 'react'
import { Skill } from 'components/Skill'
import { SECTION_ID } from 'types'
import { InView } from 'react-intersection-observer'
import { cn } from 'utils/cn'


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

				<section className='grid grid-cols-2 gap-x-3 gap-y-16 md:grid-cols-6 md:gap-x-20 md:gap-y-20'>
					<Skill
						icon='/icons/typescript.svg'
						title='Languages'
						content='Typescript, Javascript ES5+, HTML, CSS'
						className='md:col-span-2'
					/>
					<Skill
						icon='/icons/react.svg'
						title='Frameworks'
						content='React.js, Next.js'
						className={`md:col-span-2`}
					/>
					<Skill
						icon='/icons/webpack.svg'
						title='Tooling'
						content='Webpack, Babel, Git, NPM, Yarn'
						className='md:col-span-2'
					/>
					<Skill
						icon='/icons/jest.svg'
						title='Testing'
						content='Jest, Testing library'
						className={`md:col-span-2`}
					/>
					<Skill
						icon='/icons/redux.svg'
						title='State management'
						content='Redux, Zustand'
						className='md:col-span-2'
					/>
					<Skill
						icon='/icons/axios.svg'
						title='Async'
						content='Axios, Swr, Websockets'
						className={`md:col-span-2`}
					/>
					<Skill
						icon='/icons/sass.svg'
						title='Styling'
						content='SASS, Tailwind, Bootstrap, Styled Components'
						className='md:col-span-3 md:justify-end'
					/>
					<Skill
						icon='/icons/figma.svg'
						title='Design'
						content='Figma'
						className={`md:col-span-3 md:justify-start`}
					/>
				</section>
			</div>
		</article>
	)
}
