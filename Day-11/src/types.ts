export interface User {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: boolean
	name: string
	company: string
	blog: string
	location: string
	email: any
	hireable: any
	bio: string
	twitter_username: any
	public_repos: number
	public_gists: number
	followers: number
	following: number
	created_at: string
	updated_at: string
}

export type Event = {
	id: string
	type: string
	actor: {
		id: number
		login: string
		display_login: string
		gravatar_id: string
		url: string
		avatar_url: string
	}
	repo: {
		id: number
		name: string
		url: string
	}
	payload: {
		action?: string
		push_id?: number
		size?: number
		distinct_size?: number
		ref?: string
		head?: string
		before?: string
		commits?: Array<{
			sha: string
			author: {
				email: string
				name: string
			}
			message: string
			distinct: boolean
			url: string
		}>
		ref_type?: string
		master_branch?: string
		description?: string
		pusher_type?: string
	}
	public: boolean
	created_at: string
	org?: {
		id: number
		login: string
		gravatar_id: string
		url: string
		avatar_url: string
	}
}

export interface separateEvent {
	type: string | undefined,
	name: string | undefined,
	date: string | undefined
}

