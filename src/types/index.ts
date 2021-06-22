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

export enum CONTACT_FORM_FIELD {
	EMAIL = 'email',
	FULLNAME = 'fullname',
	MESSAGE = 'message',
}

export interface MailData {
	from: string
	to: string
	subject: string
	text: string
}

export type Intent = "none" | "primary" | "success" | "warning" | "danger"