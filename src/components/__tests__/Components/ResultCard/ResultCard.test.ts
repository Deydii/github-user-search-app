import {render, screen} from '@testing-library/vue';
import ResultCard from '../../../ResultCard.vue';

describe('Result card component', () => {

  test('It should render result card component', async () => {
    render(ResultCard);

    const login = await screen.findByText(/@octocat/i);
    expect(login).toBeInTheDocument();
  })
})