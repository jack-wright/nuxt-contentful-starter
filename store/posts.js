import contentful from '@/services/contentful/api'

export const state = () => ({
	posts: []
})

export const mutations = {
	setPosts(state, payload) {
		state.posts = payload
	}
}

export const actions = {
	async getPosts({commit}) {
		const data = await contentful.getPosts()
		commit('setPosts', data.items)
	}
}