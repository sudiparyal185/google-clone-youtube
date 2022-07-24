import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import SearchInput from '../SearchInput';

describe('SearchInput', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <BrowserRouter>
        <SearchInput showButtons={true} />
      </BrowserRouter>,
    );
  });
  it('should render the componets correctly', () => {
    const searchIcon = screen.getByTestId('search-icon');
    const micIcon = screen.getByTestId('mic-icon');
    const searchField = screen.getByTestId('search-input');
    const googleSearchButton = screen.getByRole('button', {
      name: /google search/i,
    });
    const feelingLuckyButton = screen.getByRole('button', {
      name: /i'm feeling lucky/i,
    });

    expect(searchIcon).toBeInTheDocument();
    expect(micIcon).toBeInTheDocument();
    expect(searchField).toBeInTheDocument();
    expect(googleSearchButton).toBeInTheDocument();
    expect(feelingLuckyButton).toBeInTheDocument();
  });
  it.todo('should update the url when something is typed and form is updated');
});
