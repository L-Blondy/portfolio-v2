export interface BaseProjectProps {
	title: string
	description: string
	technologies?: any
	githubUrl: string
	projectUrl: string
}

export interface ProjectConfig {
	TITLE: string
	DESCRIPTION: string
	URL: {
		PROJECT: string
		GITHUB: string
	}
	VIDEO: {
		TABLET: string
		PHONE: string
	}
	IMAGES: [ string, string, string ]
}