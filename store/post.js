import contentful from '@/services/contentful/api'

export const state = () => ({
	currentPost: {}
})

export const mutations = {
	setCurrentPost(state, payload) {
		state.currentPost = payload
	}
}

export const actions = {
	async getPostByTitle({commit}, payload) {
		const data = await contentful.getPosts(payload)
		commit('setCurrentPost', data.items[0])
	}
}