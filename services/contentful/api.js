import { createClient } from '@/plugins/contentful'

const client = createClient()
const api = {
	 async get(clientID) {
		try {
			let response = await client.getEntry(clientID)
			return await response
		} catch(error) {
			console.log(error)
		}
	}
}

export default api