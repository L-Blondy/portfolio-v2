import Link from 'next/link'
import { LinkedinIcon } from 'components/icons/LinkedinIcon'
import { GithubIcon } from 'components/icons/GithubIcon'
import { TypeWriter } from 'components/TypeWriter'
import { FOOTER_BACKGROUND_COLOR } from 'config'
import { useInView } from 'react-intersection-observer'
import { cn } from 'utils/cn'
import { useEffect, useRef, useState } from 'react'

export const Footer = () => {

	const { ref, inView } = useInView()

	const [ isDoneTyping1, setIsDoneTyping1 ] = useState(false)
	const [ isDoneAnimating, setIsDoneAnimating ] = useState(false)

	useEffect(() => {
		if (inView) return
		setIsDoneTyping1(false)
		setIsDoneAnimating(false)
	}, [ inView ])

	useEffect(() => {
		if (!isDoneTyping1) return
		setIsDoneAnimating(true)
	}, [ isDoneTyping1 ])


	return (
		<footer className='mt-24 pt-12 pb-16 text-white md:pt-8 md:pb-12 overflow-hidden' style={{ background: FOOTER_BACKGROUND_COLOR }}>
			<div className='container'>
				<div className='flex flex-col gap-6 md:gap-4 lg:gap-6 md:flex-row md:justify-between'>
					<h2 ref={ref} className='h1 flex items-center justify-center gap-3 md:justify-start md:order-1'>
						<div className={cn`text-primary filter brightness-110 ${isDoneTyping1 && ''}`}>
							<div className={cn`md:invisible ${inView && 'animate-from-left-sm md:animate-none'}`}>
								Laurent
							</div>
							<TypeWriter className='absolute inset-0 hidden md:block' disabled={!inView} startDelay={150} cursor={{ show: false }} onTypingDone={() => inView && setIsDoneTyping1(true)}>
								Laurent
							</TypeWriter>
						</div>
						<div className={cn`text-primary filter brightness-75 opacity-0 ${inView && 'animate-from-right-sm md:animate-none'} ${isDoneTyping1 && 'md:animate-scalein'}`}>
							Blondy
						</div>
					</h2>

					<div className='flex-center gap-6 md:row-span-2 md:justify-end md:order-3 md:-mb-1' style={{ color: '#d5e3e6' }}>
						<Link href='https://it.linkedin.com/in/laurent-blondy-72b364172'>
							<a
								className={cn`rounded-full opacity-0 await-400 md:await-0 speed-1500 origin-right md:origin-center ${inView && 'animate-scalein'}`}
								hrefLang='en'
								rel='noopener noreferrer'
								target='_blank'>
								<LinkedinIcon
									className={cn`${inView && 'animate-scalein'}`}
									fill='currentColor'
									color={FOOTER_BACKGROUND_COLOR}
									width={36}
								/>
							</a>
						</Link>
						<Link href='https://github.com/L-Blondy'>
							<a
								className={cn`rounded-full opacity-0 await-400 md:await-0 speed-1500 origin-left md:origin-center ${inView && 'animate-scalein'}`}
								hrefLang='en'
								rel='noopener noreferrer'
								target='_blank'>
								<GithubIcon width={36} fill='currentColor' />
							</a>
						</Link>
					</div>

					<footer className='flex justify-center items-end flex-grow opacity-60 text-sm md:text-base md:order-2 md:justify-start'>
						<TypeWriter disabled={!isDoneAnimating} avgTypingDelay={50} startDelay={750}>
							Copyright &copy; 2021. All rights reserved.
						</TypeWriter>
					</footer>
				</div>
			</div>
		</footer >
	)
}