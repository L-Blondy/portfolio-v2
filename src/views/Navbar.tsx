import { Burger } from 'components/Burger'
import { ResumeLink } from 'components/ResumeLink'
import { ALIGN, SECTION_ID } from 'types'
import { scrollsToSection } from 'utils/scrollsToSection'


interface Props {
	onBurgerMenuClick: () => void
	isBurgerMenuOpen: boolean
}


export const Navbar = ({
	onBurgerMenuClick,
	isBurgerMenuOpen,
}: Props) => {


	return (
		<nav className='absolute top-0 left-0 w-full flex items-center justify-between px-6 md:pr-12 py-2 z-10'>
			<h2 className='text-lg font-semibold opacity-80 z-10 tracking-wider'>Laurent Blondy</h2>

			<Burger onClick={onBurgerMenuClick} isOpen={isBurgerMenuOpen} className='md:hidden z-10'>
				<Links />
			</Burger>

			<div className='hidden md:flex items-center gap-6 lg:gap-10'>
				<Links />
			</div>
		</nav >
	)
}

const Links = () => (
	<>
		<button className='tracking-wider p-2 animate-scalein-fast' onClick={scrollsToSection(SECTION_ID.PROFILE, ALIGN.CENTER)}>Profile</button>
		<button className='tracking-wider p-2 animate-scalein-fast' onClick={scrollsToSection(SECTION_ID.SKILLS)}>Skills</button>
		<button className='tracking-wider p-2 animate-scalein-fast' onClick={scrollsToSection(SECTION_ID.PROJECTS)}>Projects</button>
		<ResumeLink className='tracking-wider p-2 animate-scalein-fast'>Resume</ResumeLink>
		<button className='tracking-wider p-2 md:hidden animate-scalein-fast' onClick={scrollsToSection(SECTION_ID.CONTACT)}>Contact</button>
		<button className='tracking-wider hidden md:inline-block px-3 pt-1.5 pb-1 border border-primary rounded text-primary animate-scalein-fast' onClick={scrollsToSection(SECTION_ID.CONTACT)}>
			<div className='filter brightness-90'>Contact</div>
		</button>
	</>
)