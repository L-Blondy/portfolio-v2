import css from './Profile.module.css'
import Image from 'next/image'
import { SECTION_ID } from 'types'
import { scrollsToSection } from 'utils/scrollsToSection'
import { TypeWriter } from 'components/TypeWriter';
import { InView, useInView } from 'react-intersection-observer';
import { cn } from 'utils/cn';
import { useEffect, useRef, useState } from 'react';
import { PROFILE } from 'config';


export const Profile = () => {

	const { ref: titleRef, inView: titleInView } = useInView()
	const { ref: chatRef, inView: chatInView } = useInView({ triggerOnce: true })
	const [ isTitleTyped, setIsTitleTyped ] = useState(false)
	const cancelTokenRef = useRef<NodeJS.Timeout>()

	function handleTypingDone() {
		cancelTokenRef.current = setTimeout(() => setIsTitleTyped(true), 3500)
	}

	useEffect(() => {
		if (titleInView || chatInView) return
		reset()
	}, [ titleInView, chatInView ])

	function reset() {
		cancelTokenRef.current && clearTimeout(cancelTokenRef.current)
		setIsTitleTyped(false)
	}

	return (
		<article id={SECTION_ID.PROFILE} className='relative -mt-10 2xs:my-0 overflow-hidden'>
			<div className='container py-14 md:py-16 lg:py-20 xl:py-24'>
				<div className='md:w-2/3 xs:text-lg'>

					<h2 className='h1 pb-6 opacity-85'>
						<div ref={titleRef}>
							<TypeWriter startDelay={0} avgTypingDelay={100} disabled={!titleInView} onTypingDone={handleTypingDone} >
								{PROFILE.TITLE}
							</TypeWriter>
						</div>
					</h2>

					<div className='flex flex-col gap-4' >
						{PROFILE.PARAGRAPHS.map(PARAGRAPH => (
							<p className='filter brightness-110' key={PARAGRAPH}>
								{PARAGRAPH}
							</p>
						))}

						<button
							ref={chatRef}
							className={cn`link text-primary self-start leading-9 pr-4`}
							aria-label="Let's have a chat."
							onClick={scrollsToSection(SECTION_ID.CONTACT)}>
							<TypeWriter startDelay={350} avgTypingDelay={70} disabled={!chatInView || !isTitleTyped}>
								{PROFILE.CONTACT_TEXT}
							</TypeWriter>
						</button>
					</div>
				</div>
			</div>
			<div className='absolute inset-0 -z-1'>
				<div className='absolute inset-y-0 right-0' style={{ width: '500%' }}>
					<Image
						src='/binary.jpg'
						alt='Background image for the Profile section'
						objectFit='contain'
						objectPosition='right'
						layout='fill'
						className='min-h-full'
						loading='eager'
					/>
				</div>
				<div className={css.gradient} />
			</div>
		</article >
	)
}