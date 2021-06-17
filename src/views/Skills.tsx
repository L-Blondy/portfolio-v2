import { useState } from 'react'
import Image from 'next/image'


enum TAB {
	FRONTEND = 'frontend',
	BACKEND = 'backend',
}

// const transformSMClass = ''// 'transform translate-y-28 md:translate-y-0'

export const Skills = () => {

	const [ activeTab, setActiveTab ] = useState<TAB>(TAB.FRONTEND)

	return (
		<article className='overflow-hidden'>
			<div className='container'>
				<header className='flex flex-col items-center mb-16 mt-20 md:mt-24 md:mb-20 lg:mt-32 lg:mb-20'>
					<h1>My Skills</h1>
					<div className='flex items-center mt-4'>
						<button
							onClick={() => setActiveTab(TAB.FRONTEND)}
							className={`link px-3 py-1 ${activeTab === TAB.FRONTEND ? 'active font-semibold' : ''}`}>
							Frontend
						</button>
						<div className='w-px h-5 bg-current opacity-70' />
						<button
							onClick={() => setActiveTab(TAB.BACKEND)}
							className={`link px-3 py-1 font-medium ${activeTab === TAB.BACKEND ? 'active font-semibold' : ''}`}>
							Backend
						</button>
					</div>
				</header>

				<section className='grid grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-6 md:gap-x-20 md:gap-y-20'>
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

interface SkillProps {
	icon: string
	title: string
	content: string
	className: string
}

function Skill({
	icon,
	title,
	content,
	className
}: SkillProps) {

	return (
		<div className={`flex justify-center ${className}`}>
			<div className='inline-flex flex-col text-center w-52'>
				<Image src={icon} height={48} width={48} loading='eager' />
				<h2 className='text-xl mt-3.5 mb-1.5 text-gray-700'>{title}</h2>
				<p className='opacity-90'>{content}</p>
			</div>
		</div>
	)
}