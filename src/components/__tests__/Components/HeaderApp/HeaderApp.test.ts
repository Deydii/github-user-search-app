import {render, screen} from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import HeaderAppVue from '../../../HeaderApp.vue';

describe('Header component', () => {

  test('It should render header component', () => {
    render(HeaderAppVue);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('Toggle theme', async () => {
    const user = userEvent.setup();
    render(HeaderAppVue);

    const darkTheme = screen.getByText(/dark/i);
    expect(darkTheme).toBeInTheDocument();

    const darkIcon = screen.getByTestId("icon");
    expect(darkIcon).toHaveClass("fill-gray-500 group-hover:fill-cyan-blue-950");

    const button = screen.getByRole('button');
    await user.click(button);

    const lightTheme = await screen.findByText(/light/i);
    expect(lightTheme).toBeInTheDocument();
    
    const lightIcon = await screen.findByTestId("icon");
    expect(lightIcon).toHaveClass("fill-white group-hover:fill-gray-500");    
  })
});
