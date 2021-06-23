import { useWindowWidth } from '@react-hook/window-size'
import { Burger } from 'components/Burger'
import { ResumeLink } from 'components/ResumeLink'
import { TypeWriter } from 'components/TypeWriter'
import { ALIGN, SECTION_ID } from 'types'
import { cn } from 'utils/cn'
import { scrollsToSection } from 'utils/scrollsToSection'


interface Props {
	onBurgerMenuClick: () => void
	isBurgerMenuOpen: boolean
	isPageLoaded: boolean
}


export const Navbar = ({
	onBurgerMenuClick,
	isBurgerMenuOpen,
	isPageLoaded,
}: Props) => {

	const windowWidth = useWindowWidth()

	return (
		<nav className='absolute top-0 left-0 w-full flex items-center justify-between px-6 md:pr-12 py-2 z-10'>
			<h2 className='text-lg opacity-90 z-10 tracking-wider'>
				<TypeWriter startDelay={windowWidth > 768 ? 750 : 350} avgTypingDelay={100} disabled={!isPageLoaded}>
					Laurent Blondy
				</TypeWriter>
			</h2>

			<Burger isPageLoaded={isPageLoaded} onClick={onBurgerMenuClick} isOpen={isBurgerMenuOpen} className={`md:hidden z-10 ${isPageLoaded && 'animate-fadein'}`}>
				<Links isPageLoaded={isPageLoaded} />
			</Burger>

			<div className='hidden md:flex items-center gap-6 lg:gap-10'>
				<Links isPageLoaded={isPageLoaded} />
			</div>
		</nav >
	)
}


const Links = ({ isPageLoaded }: { isPageLoaded: boolean }) => {

	const sharedClassNames = cn`tracking-wider p-2 opacity-0 ${isPageLoaded && 'animate-scalein-fast md:animate-from-left-sm'} md:speed-1000`
	const smallDeviceContactButtonClassNames = cn`tracking-wider p-2 md:hidden opacity-0 ${isPageLoaded && 'md:animate-from-left-sm'}`
	const bigDeviceContactButtonClassNames = cn`tracking-wider hidden opacity-0 md:speed-1000 ${isPageLoaded && 'md:animate-from-left-sm'} md:inline-block px-3 pt-1.5 pb-1 border border-primary rounded text-primary animate-scalein-fast`


	return (
		<>
			<button className={`${sharedClassNames} md:await-400`} onClick={scrollsToSection(SECTION_ID.PROFILE, ALIGN.CENTER)}>Profile</button>
			<button className={`${sharedClassNames} md:await-300`} onClick={scrollsToSection(SECTION_ID.SKILLS)}>Skills</button>
			<button className={`${sharedClassNames} md:await-200`} onClick={scrollsToSection(SECTION_ID.PROJECTS)}>Projects</button>
			<ResumeLink className={`${sharedClassNames} md:await-100`}>Resume</ResumeLink>
			{/* Contact: Small devices */}
			<button className={smallDeviceContactButtonClassNames} onClick={scrollsToSection(SECTION_ID.CONTACT)}>Contact</button>
			{/* Contact: Big devices */}
			<button className={bigDeviceContactButtonClassNames} onClick={scrollsToSection(SECTION_ID.CONTACT)}>
				<div className='filter brightness-90'>Contact</div>
			</button>
		</>
	)
}