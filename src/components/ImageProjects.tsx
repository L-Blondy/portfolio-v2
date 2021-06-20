import { PROJECT_TITLE } from 'data'
import { ImageProject } from 'components/ImageProject'


export const ImageProjects = () => {



	return (
		<section className=''>
			<ImageProject
				title={PROJECT_TITLE.H2O}
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				projectUrl='https://l-blondy.github.io/H2O/'
				githubUrl='https://github.com/L-Blondy/H2O'
			/>
			<ImageProject
				title={PROJECT_TITLE.TINA}
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				projectUrl='https://l-blondy.github.io/Tina-Ponticelli/'
				githubUrl='https://github.com/L-Blondy/Tina-Ponticelli'
			/>
			<ImageProject
				title={PROJECT_TITLE.WEATHER}
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				projectUrl='https://l-blondy.github.io/weather/'
				githubUrl='https://github.com/L-Blondy/weather'
			/>
		</section>
	)
}