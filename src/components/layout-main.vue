<template>
    <header>
        <div class="container header-content">
            <h1>SolidMatrix</h1>
            <nav>
                <ul>
                    <li>
                        <router-link :to="{ name: 'home' }">主页</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'articles' }">日志</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'projects' }">项目</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'resources' }">资源</router-link>
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
<style lang="scss">
header {
    font-size: 1rem;
    line-height: 3rem;
    background-color: var(--color-primary);
    color: var(--color-primary-text);

    .header-content {
        display: flex;
    }
}

h1 {
    font-size: inherit;
    margin: 0;
    padding: 0;
    font-weight: bold;
    user-select: none;
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
    margin-top: 2rem;

    .copyright {
        border-top: 1px solid var(--color-grey-default);
        color: var(--color-grey-default);
    }
}

main {}
</style>