import Helpers from "@/services/helpers"

/**
 * Class for LazyLoading within the site.
 * If an image has the class name 'js-lazy-loading'
 * it will be lazy loaded
 */
export default class LazyLoading {
    constructor() {
        return this.init()
    }

    /**
     * init() - Check the ready state of the page
     * before calling the lazyload and eventlisteners methods
     */
    init() {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
                this.lazyLoad()
                this.eventListeners()
            })
        } else {
            this.lazyLoad()
            this.eventListeners()
            }
    }

    /**
     * lazyLoad() - Get the picture elements with the class of js-lazy-loading
     * and for each one, if the conditions are met, get the source and img
     * elements, and then run the loadImage method
     */
    lazyLoad() {
        let lazyImages = [].slice.call(
            document.querySelectorAll(".js-lazy-loading")
        )
        
        if (lazyImages.length > 0) {
            lazyImages.forEach(lazyImage => {
                if (
                    lazyImage.getBoundingClientRect().top <= window.innerHeight &&
                    lazyImage.getBoundingClientRect().bottom >= 0 &&
                    getComputedStyle(lazyImage).display !== "none"
                ) {
                    this.loadImage({
                        selected: lazyImage
                    })
                }
            })
        }
    }

    /**
     * loadImage() - set the elements srcset and src from their
     * data-src attribute. Then calls the imageLoadCheck method
     * to set the loading Class
     * @param {html} lazyImage
     */
    loadImage(lazyImage) {
            lazyImage.selected.src = lazyImage.selected.getAttribute("data-src")
            lazyImage.selected.alt = lazyImage.selected.getAttribute("data-alt")
            lazyImage.selected.title = lazyImage.selected.getAttribute("data-title")

            this.imageLoadCheck(lazyImage.selected)
    }

  /**
   * eventListeners() - Add event listeners for when the user interacts
   * with either the page or the browser.
   */
    eventListeners() {
        document.addEventListener(
            "scroll",
            Helpers.throttle(() => {
                this.lazyLoad()
            }, 50)
        )
        window.addEventListener(
            "resize",
            Helpers.throttle(() => {
                this.lazyLoad()
            }, 50)
        )
        window.addEventListener(
            "orientationchange",
            Helpers.throttle(() => {
                this.lazyLoad()
            }, 50)
        )
    }

    /**
     * imageLoadCheck() - Called when an image hasn't yet loaded.
     * Sets an interval and then adds class and clears interval when image has loaded
     *
     * @param {html} lazyImage - the image to check
     */
    imageLoadCheck(lazyImage) {
            if (lazyImage.complete) {
                lazyImage.classList.add("c-page__image--loaded")
            } else {
                let checkForLoad = setInterval(() => {
                        if (lazyImage.complete) {
                            lazyImage.classList.add("c-page__image--loaded")
                            clearInterval(checkForLoad)
                        }
                }, 200)
            }
    }
}
