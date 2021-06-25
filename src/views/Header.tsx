import { Button } from 'components/Button'
import { HeaderImage } from 'components/HeaderImage'
import { HEADER, META } from 'config'
import { useUpdatedRef } from 'hooks/useUpdatedRef'
import { useEffect, useRef, useState } from 'react'
import { ALIGN, SECTION_ID } from 'types'
import { cn } from 'utils/cn'
import { scrollsToSection } from 'utils/scrollsToSection'

const title = () => ({ __html: HEADER.TITLE })
const description = () => ({ __html: HEADER.DESCRIPTION })


interface Props {
	isBurgerMenuOpen: boolean
	onLoad: () => void
}

export const Header = ({
	isBurgerMenuOpen,
	onLoad
}: Props) => {

	const onLoadRef = useUpdatedRef(onLoad)
	const [ isLoaded, setIsLoaded ] = useState(false)
	const imgRef = useRef<HTMLImageElement | null>(null)

	useEffect(() => {
		imgRef.current?.complete && setIsLoaded(true)
	}, [ imgRef.current ])

	useEffect(() => {
		isLoaded && onLoadRef.current()
	}, [ isLoaded ])

	return (
		<header
			className={cn`
				grid
				grid-flow-row
				grid-rows-2
				pt-28
				md:pt-0
				md:grid-flow-col
				md:grid-cols-2
				md:grid-rows-none
				md:gap-0
				lg:gap-12
				xl:gap-20
				min-h-screen
			`}>

			<HeaderPreloader isLoading={!isLoaded} />

			<div
				className={cn`
					flex
					items-center
					justify-center
					md:justify-end
					p-6
					md:pr-7
					lg:pr-14
					xl:pr-16
					md:pb-12
					lg:pb-24
					transform
					transition-transform
					duration-2000
					${isLoaded ? 'scale-100' : 'scale-98'}
				`}>
				<div className={`h-full flex flex-col justify-center transition-opacity  ${isBurgerMenuOpen ? 'animate-fadeout-fast md:animate-fadein-fast' : 'animate-fadein-fast'}`}>
					<h1 className='mb-3' dangerouslySetInnerHTML={title()} />

					<h3 className='mb-10 md:mb-12 opacity-80' dangerouslySetInnerHTML={description()} />

					<div className='flex flex-col md:flex-row-reverse md:justify-end gap-2.5 md:gap-4'>
						<Button
							className='mx-auto w-full md:mx-0 md:w-auto'
							onClick={scrollsToSection(SECTION_ID.PROJECTS)}>
							JUMP TO PROJECTS
						</Button>
						<Button
							className='mx-auto w-full md:mx-0 md:w-auto'
							onClick={scrollsToSection(SECTION_ID.PROFILE, ALIGN.CENTER)}
							outlined>
							LEARN MORE
						</Button>
					</div>
				</div>
			</div>
			<div className='h-full w-full flex items-center py-0'>
				<div className='relative h-full w-full md:flex md:items-center xl:-ml-4 mt-4 xs:mt-0 xl:mt-4 pb-10 md:pb-0'>
					<HeaderImage
						onLoad={() => setIsLoaded(true)}
						src='/graphnew.jpg'
						alt='Background image for the Landing page'
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
		!isLoading && setTimeout(() => setDisplay(false), 1000)
	}, [ isLoading ])

	const notLoadingClass = 'animate-fadeout pointer-events-none'

	if (!display) return null

	return (
		<div className={`fixed inset-0 bg-white z-50 flex items-center justify-center ${isLoading ? '' : notLoadingClass}`} />
	)
}