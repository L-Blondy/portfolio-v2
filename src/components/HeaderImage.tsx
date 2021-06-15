import { useEffect, useRef, useState } from 'react'


interface Props extends Omit<React.ComponentProps<'img'>, 'onLoad'> {
	onLoad: () => void
}

export const HeaderImage = ({
	onLoad,
	...props
}: Props) => {

	const [ isLoading, setIsLoading ] = useState(true)
	const imgRef = useRef<HTMLImageElement | null>(null)

	useEffect(() => {
		imgRef.current?.complete && setIsLoading(false)
	}, [ imgRef.current ])

	useEffect(() => {
		if (isLoading) return
		onLoad()
	}, [ isLoading ])

	return (

		<img
			ref={imgRef}
			onLoad={() => setIsLoading(false)}
			{...props}
		/>
	)
}