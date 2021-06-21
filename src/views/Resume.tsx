import { Button } from 'components/Button'


export const Resume = () => {



	return (
		<section className='my-20 py-12 text-white text-center' style={{ background: '#1a6575' }}>
			<div className='container flex flex-col gap-6'>
				<h1 className='opacity-90'>Like What you see?</h1>
				<p className='opacity-80 text-lg'>Check out my resume to learn more.</p>
				<Button
					className='self-center pl-5 pr-5 mt-1.5 leading-6 text-white text-opacity-85'
					style={{ backgroundColor: '#8fe5ff33', borderColor: 'transparent', fontSize: '18px', paddingBottom: '0.45rem' }}>
					View Resume
				</Button>
			</div>
		</section>
	)
}