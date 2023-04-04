import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.github.com/users/:user', (req, res, ctx) => {
    const { user } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
        name: "The Octocat",
        login: user,
        created_at: "2011-01-25T18:44:36Z",
        bio: null,
        repos: 8,
        followers: 8796,
        following: 9,
        location: "San Francisco",
        twitter: null,
        blog: "https://github.blog",
        company: "@github"
      })
    )
  })
];

