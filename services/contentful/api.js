import { createClient } from '@/plugins/contentful'

const client = createClient()
const api = {
	 async getPage(clientID) {
		try {
			return await client.getEntry(clientID)
		} catch(error) {
			console.log(error)
		}
	},

	async getPosts(slug = null) {
		try {
			let args = {
				content_type: 'blogPost',
				...(slug ? {'fields.slug': slug} : {})
			}

			return await client.getEntries(args)
		} catch(error) {
			console.log(error)
		}
	},

	async getAllPages() {
		try {
			return await client.getEntries({})
		} catch(error) {
			console.log(error)
		}
	},
}

export default api