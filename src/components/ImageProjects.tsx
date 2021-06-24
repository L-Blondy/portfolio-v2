import { ImageProject } from 'components/ImageProject'
import { PROJECTS } from 'config'


export const ImageProjects = () => {

	return (
		<section className='flex flex-col gap-24'>
			{PROJECTS.map(PROJECT => (
				<ImageProject
					title={PROJECT.TITLE}
					description={PROJECT.DESCRIPTION}
					projectUrl={PROJECT.URL.PROJECT}
					githubUrl={PROJECT.URL.GITHUB}
					images={PROJECT.IMAGES}
					key={`img-project-${PROJECT.TITLE}`}
				/>
			))}
		</section>
	)
}