import { Button } from 'components/Button'
import { SECTION_ID } from 'types'
import { ResumeLink } from 'components/ResumeLink'


export const Resume = () => {



	return (
		<section id={SECTION_ID.RESUME} className='mt-24 py-14 md:py-20 bg-primary-xdark text-white text-center md:text-left'>
			<div className='container flex flex-col md:flex-row md:justify-between gap-6'>
				<div className='flex flex-col gap-6 xl:gap-8'>
					<h1 className='opacity-90'>Like What you see?</h1>
					<p className='opacity-80 text-lg md:text-xl'>Check out my resume to learn more.</p>
				</div>
				<ResumeLink className='self-center'>
					<Button
						className='pl-5 pr-5 mt-1.5 leading-6 text-white text-opacity-85 md:w-44'
						style={{ backgroundColor: '#4fd6ff61', borderColor: 'transparent', fontSize: '18px', paddingBottom: '0.5rem' }}>
						View Resume
					</Button>
				</ResumeLink>
			</div>
		</section>
	)
}