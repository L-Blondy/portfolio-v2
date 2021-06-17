import css from './Profile.module.css'
import Image from 'next/image'

export const Profile = () => {

	return (
		<article className='relative -mt-10 2xs:my-0 overflow-hidden'>
			<div className='container py-14 md:py-16 lg:py-20 xl:py-24'>
				<div className='md:w-2/3 xs:text-lg'>
					<h1 className='pb-6'>Hi, I’m Laurent.</h1>
					<p className='pb-4 md:opacity-90'>I am a front-end software developer currently working at Cenozai where I build web applications for data visualization and processing. </p>
					<p className='pb-4 md:opacity-90'>Well organized person, problem solver, independant employee and strong team player, I love working on ambitious projects with positive people.</p>
					<p className='pb-4 md:opacity-90'>I strive for clean, reusable and maintainable code. A healthy code base is key to making great products!</p>
					<a className='link text-primary' href="#">Let’s have a chat.</a>
				</div>
			</div>
			<div className='absolute inset-0 -z-1'>
				<div className='absolute inset-y-0 right-0' style={{ width: '500%' }}>
					<Image
						src='/binary.jpg'
						objectFit='contain'
						objectPosition='right'
						layout='fill'
						className='min-h-full'
						loading='eager'
					/>
				</div>
				<div className={css.gradient} />
			</div>
		</article>
	)
}