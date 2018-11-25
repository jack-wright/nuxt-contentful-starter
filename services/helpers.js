import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const helpers = {
	/**
	 * This property is used as an optional param for the documentToHtmlString
	 * function that is called within contentDisplay method. It defines how we want
	 * to handle certain elements returned from Contentful's rich text box.
	 */
	options: {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				return `<figure class="c-page__image-container">
					<img
						class="c-page__image js-lazy-loading"
						data-src="${node.data.target.fields.file.url}"
						alt="${node.data.target.fields.description}"
						title="${node.data.target.fields.title}">
					</figure>`
			},
		}
	},

	/**
	 * A method provided by the rich-text-html-renderer package,
	 * that converts the contentful rich text box content object into a html string
	 * @param {*} body 
	 */
	contentDisplay(body) {
		return documentToHtmlString(body, this.options)
	},

	/**
	 * Small method to toggle the menu is open class.
	 * Called when the hamburger mobile button is clicked
	 */
	toggleOpenMenu() {
		let body = document.querySelector('body')
		body.classList.toggle('menu-is-open')
	},

	/**
	 * Checks to see whether or not the menu is open class is present.
	 * If yes, it removes it. This is used when navigating to a new route
	 * as we don't want the menu to remain open when this happens
	 */
	closeMenu() {
		let body = document.querySelector('body')
		if (body.classList.contains('menu-is-open')) {
			body.classList.remove("menu-is-open")
		}
	},

	/**
     * Throttle Function
     * @param  {Function} callback
     * @param  {Int}   delay
     * @return {Function}
     */
	throttle(callback, delay) {
		let isThrottled = false;
		let args;
		let context;

		function wrapper() {
			if (isThrottled) {
				args = arguments;
				context = this;
				return;
			}

			isThrottled = true;
			callback.apply(this, arguments);

			setTimeout(() => {
				isThrottled = false;
				if (args) {
					wrapper.apply(context, args);
					args = context = null;
				}
			}, delay);
		}

		return wrapper;
	}
}

export default helpers