import contentful from '@/services/contentful/api'

export const state = () => ({
    pageData: {}
})

export const mutations = {
    setPageData(state, payload) {
        state.pageData[payload.page] = payload.data
    }
}

export const actions = {
	async getPageData({commit}, payload) {
        const data = {}
        data.data = await contentful.getPage(payload.id)
        data.page = payload.page

        commit('setPageData', data)
    },
    
    async getAllPages() {
        await contentful.getAllPages()
    }
}