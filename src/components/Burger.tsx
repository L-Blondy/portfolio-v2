

interface Props {

}

export const Burger = ({
	...props
}: Props) => {



	return (
		<button className='px-1.5 py-2.5 rounded-lg bg-transparent hover:bg-gray-100 transition-colors'>
			<div className='flex flex-col justify-between w-6 h-4'>
				<div className='h-0.5 w-full bg-current' />
				<div className='h-0.5 w-full bg-current' />
				<div className='h-0.5 w-full bg-current' />
			</div>
		</button>
	)
}