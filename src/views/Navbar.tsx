import { Burger } from 'components/Burger'


export const Navbar = () => {

	return (
		<nav className='fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2'>
			<h2 className='text-base'>Laurent Blondy</h2>

			<Burger />
		</nav>
	)
}