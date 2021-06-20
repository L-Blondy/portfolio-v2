export enum PROJECT_TITLE {
	H2O = 'H2O.ai',
	TINA = 'Tina Ponticelli',
	WEATHER = 'AccuWeather',
}

export interface BaseProjectProps {
	title: string
	description: string
	technologies?: any
	githubUrl: string
	projectUrl: string

}

