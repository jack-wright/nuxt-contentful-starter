import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const helpers = {
	options: {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: (node) => `<img src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.description}" title="${node.data.target.fields.title}">`
		}
	},

	contentDisplay(body) {
		return documentToHtmlString(body, this.options)
	}
}

export default helpers