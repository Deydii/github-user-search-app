import {render, screen} from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { server } from '../../../../mocks/server';
import App from '../../../../App.vue';

describe('App component', () => {
  
  test('Toggle theme', async () => {
    const user = userEvent.setup();
    render(App);

    const darkTheme = screen.getByText(/dark/i);
    expect(darkTheme).toBeInTheDocument();

    const darkIcon = screen.getByTestId("icon");
    expect(darkIcon).toHaveClass("fill-gray-500 group-hover:fill-cyan-blue-950");

    const button = screen.getByRole('button', {name: ""});
    await user.click(button);

    const lightTheme = await screen.findByText(/light/i);
    expect(lightTheme).toBeInTheDocument();
    
    const lightIcon = await screen.findByTestId("icon");
    expect(lightIcon).toHaveClass("fill-white group-hover:fill-gray-500");    
  });

  test('User can use the search bar', async () => {
    const user = userEvent.setup();
    render(App);

    const input = screen.getByRole('textbox');
    await user.type(input, "deydii");

    expect(input).toHaveValue("deydii");

    const button = screen.getByRole("button", {name: /search/i})
    await user.click(button);

    const login = await screen.findByText(/@deydii/i);
    expect(login).toBeInTheDocument();
    await userEvent.clear(input);
  });

  test('Display an error message if no user is found', async () => {
    const user = userEvent.setup();

    server.use(
      rest.get('https://api.github.com/users/:user', (req, res, ctx) => {
        return res.once(
          ctx.status(404),
          ctx.json({ message: 'Not found' }),
        )
      }),
    )
    render(App);
    
    const button = screen.getByRole("button", {name: /search/i});
    await user.click(button);

    const errorMessage = await screen.findByText(/no results/i);
    expect(errorMessage).toBeInTheDocument();
  })
})