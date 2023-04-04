import {render, screen} from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { server } from '../../../../mocks/server';
import SearchBar from '../../../SearchBar.vue';

describe('Search bar component', () => {

  test('It should render Search bar component', () => {
    render(SearchBar);
    
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  test('User can use the search bar', async () => {
    const user = userEvent.setup();
    render(SearchBar);

    const input = screen.getByRole('textbox');
    await user.type(input, "github");

    expect(input).toHaveValue("github");
  });

  test('Display an error message if no user is found', async () => {
    server.use(
      rest.get('https://api.github.com/users/:user', (req, res, ctx) => {
        return res.once(
          ctx.status(404),
          ctx.json({ message: 'Not found' }),
        )
      }),
    )

    const user = userEvent.setup();
    render(SearchBar);
    
    const input = screen.getByRole('textbox');
    await user.type(input, "github&");

    const button = screen.getByRole("button");
    await user.click(button);

    const errorMessage = await screen.findByText(/no results/i);
    expect(errorMessage).toBeInTheDocument();
  })
})
