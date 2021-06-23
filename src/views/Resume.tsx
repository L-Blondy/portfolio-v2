import { Button } from 'components/Button'
import { SECTION_ID } from 'types'
import { ResumeLink } from 'components/ResumeLink'
import { TypeWriter } from 'components/TypeWriter'
import { InView, useInView } from 'react-intersection-observer'
import { cn } from 'utils/cn'
import { useEffect, useState } from 'react'


export const Resume = () => {

	const [ isDoneWriting, setIsDoneWriting ] = useState(false)
	const [ hasButtonStartedGrowing, setHasButtonStartedGrowing ] = useState(false)
	const { ref, inView } = useInView({ triggerOnce: true })

	useEffect(() => {
		inView && setTimeout(() => setHasButtonStartedGrowing(true), 2500)
	}, [ inView ])

	return (
		<section ref={ref} id={SECTION_ID.RESUME} className='mt-24 py-14 md:py-20 bg-primary-xdark text-white text-center md:text-left overflow-hidden'>
			<div className='container flex flex-col md:flex-row md:justify-between gap-6'>
				<div className='flex flex-col gap-6 xl:gap-8'>
					<div className={cn`transform md:origin-left transition-all duration-1000 ${inView ? 'scale-100 opacity-100 translate-x-0' : 'opacity-0 md:-translate-x-6 scale-90'}`}>
						<h1 className='opacity-90'>Like What you see?</h1>
					</div>
					<div className={cn`opacity-80 text-lg md:text-xl ${isDoneWriting && 'pr-3.5'}`}>
						<TypeWriter startDelay={1000} cursor={{ hideWhenDoneDelay: 0 }} onTypingDone={() => setIsDoneWriting(true)} disabled={!inView}>
							Check out my resume to learn more.
						</TypeWriter>
					</div>
				</div>
				<div className={cn`self-center relative mt-1.5 z-10 opacity-50 transform scale-25 transition-all duration-2000 delay-2500 ease-in-out ${inView && 'scale-100 opacity-100'}`}>
					<ResumeLink className={`transition-opacity duration-300 ${!hasButtonStartedGrowing && 'animate-pulse'}`}>
						<Button
							className='pl-5 pr-5 leading-6 text-white text-opacity-85 md:w-40'
							style={{ backgroundColor: '#4fd6ff61', borderColor: 'transparent', fontSize: '18px', paddingBottom: '0.5rem' }}>
							View Resume
						</Button>
					</ResumeLink>
				</div>
			</div>
		</section>
	)
}