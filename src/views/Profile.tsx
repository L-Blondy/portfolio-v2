import css from './Profile.module.css'
import Image from 'next/image'
import { SECTION_ID } from 'types'
import { scrollsToSection } from 'utils/scrollsToSection'
import { TypeWriter } from 'components/TypeWriter';
import { InView } from 'react-intersection-observer';
import { cn } from 'utils/cn';
import { useState } from 'react';


export const Profile = () => {

	const [ isTitleTyped, setIsTitleTyped ] = useState(false)

	return (
		<article id={SECTION_ID.PROFILE} className='relative -mt-10 2xs:my-0 overflow-hidden'>
			<div className='container py-14 md:py-16 lg:py-20 xl:py-24'>
				<div className='md:w-2/3 xs:text-lg'>

					<h2 className='h1 pb-6'>
						<InView triggerOnce>
							{({ ref, inView }) => (
								<div ref={ref}>
									<TypeWriter startDelay={0} avgTypingDelay={100} disabled={!inView} onTypingDone={() => setTimeout(() => setIsTitleTyped(true), 3500)} >
										Hi, I’m Laurent.
									</TypeWriter>
								</div>
							)}
						</InView>
					</h2>

					<div className='flex flex-col gap-4' >
						<p className='filter brightness-110'>
							I am a front-end software developer currently working at Cenozai where I build web applications for data visualization and processing.
						</p>
						<p className='filter brightness-110'>
							Well organized person, problem solver, independent employee and strong team player, I love working on ambitious projects with positive people.
						</p>
						<p className='filter brightness-110'>
							I strive for clean, reusable and maintainable code. A healthy code base is key to making great products!
						</p>
						<InView triggerOnce>
							{({ ref, inView }) => (
								<button
									ref={ref}
									className={cn`link text-primary self-start leading-9 pr-4`}
									onClick={scrollsToSection(SECTION_ID.CONTACT)}>
									<TypeWriter startDelay={350} avgTypingDelay={70} disabled={!inView || !isTitleTyped}>
										Let’s have a chat.
									</TypeWriter>
								</button>
							)}
						</InView>
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