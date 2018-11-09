<template>
    <header class="c-header">
        <nav class="c-nav">
            <ul class="c-nav__links">
                <li class="c-nav__item--brand">
                    <nuxt-link 
                        to="/" 
                        title="The home page of the site"
                        class="c-nav__link">
                        <div class="c-nav__logo"></div>
                    </nuxt-link>
                </li>
                <li class="c-nav__item">
                    <nuxt-link 
                        to="/about"
                        title="About the site"
                        class="c-nav__link">
                        About
                    </nuxt-link>
                </li>
                <li class="c-nav__item">
                    <nuxt-link
                        to="/contact"
                        title="Contact the site for any enquiries"
                        class="c-nav__link">
                        Contact
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>