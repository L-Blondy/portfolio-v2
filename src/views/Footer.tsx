import Link from 'next/link'
import { LinkedinIcon } from 'components/icons/LinkedinIcon'
import { GithubIcon } from 'components/icons/GithubIcon'
import { FOOTER_BACKGROUND_COLOR } from 'config'

export const Footer = () => {

	return (
		<footer className='mt-24 pt-12 pb-16 text-white md:pt-8 md:pb-12' style={{ background: FOOTER_BACKGROUND_COLOR }}>
			<div className='container'>
				<div className='flex flex-col gap-6 md:gap-4 lg:gap-6 md:flex-row md:justify-between'>
					<h1 className='flex items-center justify-center gap-2.5 md:justify-start md:order-1'>
						<div className='text-primary filter brightness-110'>Laurent</div>
						<div className='text-primary filter brightness-75'>Blondy</div>
					</h1>

					<div className='flex-center gap-6 md:row-span-2 md:justify-end md:order-3 md:-mb-1' style={{ color: '#d5e3e6' }}>
						<Link href='https://it.linkedin.com/in/laurent-blondy-72b364172'>
							<a className='rounded-full' rel='noopener noreferrer' target='_blank'>
								<LinkedinIcon fill='currentColor' color={FOOTER_BACKGROUND_COLOR} width={36} />
							</a>
						</Link>
						<Link href='https://github.com/L-Blondy'>
							<a className='rounded-full' rel='noopener noreferrer' target='_blank'>
								<GithubIcon width={36} fill='currentColor' />
							</a>
						</Link>
					</div>

					<footer className='flex justify-center items-end flex-grow opacity-60 text-sm md:text-base md:order-2 md:justify-start'>
						Copyright &copy; 2021. All rights reserved.
					</footer>
				</div>
			</div>
		</footer >
	)
}