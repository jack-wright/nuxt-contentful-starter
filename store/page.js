import contentful from '@/services/contentful/api'

export const state = () => ({
    pageData: {}
})

export const mutations = {
    setPageData(state, payload) {
        state.pageData = payload
    }
}

export const actions = {
	async getPageData({commit}, payload) {
        const data = await contentful.getPage(payload)
        commit('setPageData', data)
    },
    
    async getAllPages() {
        await contentful.getAllPages()
    }
}