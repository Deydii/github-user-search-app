import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.github.com/users/:user', (req, res, ctx) => {
    const { user } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        login: user
      })
    )
  })
];

