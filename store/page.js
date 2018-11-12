import contentful from '@/services/contentful/api'

export const state = () => ({

})

export const mutations = () => ({

})

export const actions = () => ({
	getPageData() {
		contentful.get('65ETPH2ShqwaoAqGaWe8sO')
        .then(result => {
            return { data: result.fields}
            //return { title: result.data.title }
        })
	}
})