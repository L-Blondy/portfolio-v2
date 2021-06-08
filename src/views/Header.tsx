import Image from 'next/image'
import { Button } from 'components/Button'
import css from './Header.module.css'


export const Header = () => {

	return (
		<header className={`grid md:grid-cols-2 ${css.header}`}>
			<div className='flex flex-col justify-center p-3'>
				<h1>
					Building solid<br />
					Data Driven<br />
					Web Applications
				</h1>

				<h3>
					Taking clean, reusable and<br />
					maintainable code as a requirement.<br />
					Making user experience a priority.
				</h3>

				<div className='flex flex-col md:flex-row-reverse md:justify-end gap-2'>
					<Button className='mx-auto w-full md:mx-0 md:w-auto'>JUMP TO PROJECTS</Button>
					<Button className='mx-auto w-full md:mx-0 md:w-auto' outlined>LEARN MORE</Button>
				</div>
			</div>
			<div className='h-full overflow-hidden'>
				<Image src='/graph.jpg' width={809} height={700} layout='fixed' />
			</div>
		</header>
	)
}