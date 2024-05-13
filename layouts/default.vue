<template>
    <header>
        <div class="container header-content">
            <div><b>SolidMatrix</b></div>
            <nav>
                <ul>
                    <li>
                        <nuxt-link to="/">主页</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/articles">日志</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/projects">项目</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/resources">资源</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <main class="container">
        <slot></slot>
    </main>
    <footer>
        <div class="container">
            <p>
                <strong>SolidMatrix</strong>
            </p>
            <p class="copyright">
                Copyright © solid-matrix.com All Rights Reserved.
            </p>
        </div>
    </footer>
</template>
<style lang="scss" scoped>

.container {
    max-width: var(--size-container-max-width);
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
}

header {
    font-size: 1rem;
    line-height: 3rem;
    background-color: var(--color-primary);
    color: var(--color-primary-text);

    .header-content {
        display: flex;
    }
}

nav {
    padding: 0 0.5rem;

    ul {
        display: flex;

        a {
            color: inherit;
            display: block;
            padding: 0 0.5rem;
        }

        a:hover {
            background-color: var(--color-primary-darken);
        }
    }
}

footer {
    font-size: 1rem;
    line-height: 2rem;
    background-color: var(--color-dark);
    color: var(--color-dark-text);
    padding-top: 2rem;
    padding-bottom: 1rem;

    .copyright {
        border-top: 1px solid var(--color-grey-default);
        color: var(--color-grey-default);
    }
}

main {
    padding-top: 1rem;
    padding-bottom: 1rem;
}
</style>