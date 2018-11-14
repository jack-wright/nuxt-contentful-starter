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

	async getPosts(title = null) {
		try {
			let args = {
				content_type: 'blogPost',
				...(title ? {'fields.title': title} : {})
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