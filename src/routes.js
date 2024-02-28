export default [
  {
    path: '/',
    component: 'home-page',
    pageId: 'home'
  },
  {
    path: '/blog',
    component: 'blog-page',
    pageId: 'blog'
  },
  {
    path: '/resources',
    component: 'resources-page',
    pageId: 'resources'
  },
  {
    path: '/about',
    component: 'about-page',
    pageId: 'about'
  },
  {
    path: '*',
    component: 'notfound-page',
    pageId: ''
  }
]
