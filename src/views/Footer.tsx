import Link from 'next/link'
import { LinkedinIcon } from 'components/icons/LinkedinIcon'
import { GithubIcon } from 'components/icons/GithubIcon'
import { FOOTER_BACKGROUND_COLOR } from 'config'

export const Footer = () => {

	return (
		<footer className='mt-24 pt-12 pb-16 text-white md:pt-20 md:pb-24' style={{ background: FOOTER_BACKGROUND_COLOR }}>
			<div className='container'>
				<div className='flex flex-col gap-y-6 md:grid md:grid-cols-2'>
					<h1 className='flex items-center justify-center gap-2.5 md:justify-start'>
						<div className='text-primary filter brightness-110'>Laurent</div>
						<div className='text-primary filter brightness-75'>Blondy</div>
					</h1>

					<div className='flex-center gap-6 md:row-span-2 md:justify-end' style={{ color: '#d5e3e6' }}>
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

					<footer className='text-center opacity-60 text-sm md:text-base md:text-left'>
						Copyright &copy; 2021. All rights reserved.
					</footer>
				</div>
			</div>
		</footer >
	)
}