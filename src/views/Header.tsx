import { Button } from 'components/Button'
import { HeaderImage } from 'components/HeaderImage'
import { useEffect, useRef, useState } from 'react'
import css from './Header.module.css'


export const Header = () => {

	const [ isHeaderLoading, setIsHeaderLoading ] = useState(true)
	const imgRef = useRef<HTMLImageElement | null>(null)

	useEffect(() => {
		imgRef.current?.complete && setIsHeaderLoading(false)
	}, [ imgRef.current ])

	return (
		<header className={`grid grid-flow-row grid-rows-2 pt-28 md:pt-0 md:grid-flow-col md:grid-cols-2 md:grid-rows-none md:gap-0 lg:gap-12 xl:gap-20 ${css.header}`}>
			<HeaderPreloader isLoading={isHeaderLoading} />

			<div className='flex items-center justify-center md:justify-end p-6 md:pr-7 lg:pr-14 xl:pr-16 md:pb-12 lg:pb-24'>
				<div className='h-full flex flex-col justify-center'>
					<h1 className='mb-3'>
						Building Solid<br />
						Data Driven<br />
						Web Applications
					</h1>

					<h3 className='mb-10 md:mb-12 opacity-80'>
						Taking clean, reusable and<br />
						maintainable code as a requirement.<br />
						Making user experience a priority.
					</h3>

					<div className='flex flex-col md:flex-row-reverse md:justify-end gap-2.5 md:gap-4'>
						<Button className='mx-auto w-full md:mx-0 md:w-auto'>
							JUMP TO PROJECTS
						</Button>
						<Button className='mx-auto w-full md:mx-0 md:w-auto' outlined>
							LEARN MORE
						</Button>
					</div>
				</div>
			</div>
			<div className='h-full w-full flex items-center py-0'>
				<div className='relative h-full w-full md:flex md:items-center xl:-ml-4 mt-4 xs:mt-0 xl:mt-4 pb-10 md:pb-0'>
					<HeaderImage
						onLoad={() => setIsHeaderLoading(false)}
						src="/graphnew.jpg"
						alt=""
						style={{ maxHeight: '480px', maxWidth: '660px' }}
						className='w-full h-full object-right-top object-contain sm:object-top md:object-left md:object-cover'
						loading='lazy'
					/>
				</div>
			</div>
		</header>
	)
}

interface HeaderPreloaderProps {
	isLoading: boolean
}

function HeaderPreloader({
	isLoading
}: HeaderPreloaderProps) {

	const [ display, setDisplay ] = useState(true)

	useEffect(() => {
		setTimeout(() => setDisplay(false), 1000)
	}, [ isLoading ])

	const notLoadingClass = 'animate-fadeout pointer-events-none'

	if (!display) return null

	return (
		<div className={`fixed inset-0 bg-white z-10 flex items-center justify-center ${isLoading ? '' : notLoadingClass}`} />
	)
}