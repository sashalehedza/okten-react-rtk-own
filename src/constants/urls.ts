const baseUrl = 'https://jsonplaceholder.typicode.com'

const urls = {
  users: {
    base: '/users',
    byId: (id: number): string => urls.users.base + `${id}`,
  },
  posts: {
    base: '/posts',
    byId: (id: number): string => urls.posts.base + `${id}`,
    byUserId: (id: number): string => urls.posts.base + `?userId=${id}`,
  },
  comments: {
    base: '/comments',
    byId: (id: number): string => urls.comments.base + `${id}`,
    byPostId: (id: number): string => urls.comments.base + `?postId=${id}`,
  },
}

export { urls, baseUrl }
