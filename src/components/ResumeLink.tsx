import Link from 'next/link'

interface Props {
	className?: string
}


export const ResumeLink: React.FC<Props> = ({
	children = null,
	className = '',
}) => (
	<Link href='/CV-Blondy_Laurent-ENG.pdf'><a className={className} rel='noopener noreferrer' target='_blank'>{children}</a></Link>
)