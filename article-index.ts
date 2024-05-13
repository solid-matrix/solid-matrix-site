interface Article {
    name: string,
    title: string,
    tags: string[],
    author: string,
    component: any,
}
export const articleDict: { [name: string]: Article } = {};

export const articleList: Article[] = [];

export function addArticle(article: Article) {
    articleList.push(article);
    articleDict[article.name] = article;
}

export function getArticle(name: string): Article {
    return articleDict[name]
}

/* Add articles below */

addArticle({
    name: 'blazor-hybrid-app-dev',
    title: 'Blazor Hybrid 多平台应用开发',
    tags: ['Blazor', 'Blazor Hybrid'],
    author: 'solid-matrix',
    component: () => import('./articles/blazor-hybrid-app-dev.vue')
})

addArticle({
    name: 'solid-blazor',
    title: 'SolidMatrix.SolidBlazor',
    tags: ['Blazor', 'Blazor Hybrid'],
    author: 'solid-matrix',
    component: () => import('./articles/solid-blazor.vue')
})

addArticle({
    name: 'normal-ui',
    title: '[Draft] Normal UI',
    tags: ['ui',],
    author: 'solid-matrix',
    component: () => import('./articles/normal-ui.vue')
})