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

  afterEach(() => {
    cleanup();
  });
  it('should render the components correctly', () => {
    const searchIcon = screen.getByTestId('search-icon');
    const micIcon = screen.getByTestId('mic-icon');
    const searchField = screen.getByTestId('search-input');
    const googleSearchButton = screen.getByRole('button', {
      name: /google search/i,
    });
    const feelingLuckyButton = screen.getByRole('button', {
      name: /i'm feeling lucky/i,
    });

    expect(searchField).toHaveValue('');
    expect(searchIcon).toBeInTheDocument();
    expect(micIcon).toBeInTheDocument();
    expect(searchField).toBeInTheDocument();
    expect(googleSearchButton).toBeInTheDocument();
    expect(feelingLuckyButton).toBeInTheDocument();
  });
  it('should update the url when something is typed and form is updated', () => {
    const searchField = screen.getByTestId('search-input');
    const googleSearchButton = screen.getByRole('button', {
      name: /google search/i,
    });

    userEvent.type(searchField, 'tesla');
    expect(searchField).toHaveValue('tesla');

    userEvent.click(googleSearchButton);
    expect(window.location.search).toBe('?tesla');
  });
});

describe('SearchInput component', () => {
  it('should not show buttons if the showButtons flag is set to false', () => {
    render(
      <BrowserRouter>
        <SearchInput showButtons={false} />
      </BrowserRouter>,
    );

    const googleSearchButton = screen.queryByRole('button', {
      name: /google search/i,
    });
    const feelingLuckyButton = screen.queryByRole('button', {
      name: /i'm feeling lucky/i,
    });

    expect(googleSearchButton).not.toBeInTheDocument();
    expect(feelingLuckyButton).not.toBeInTheDocument();
  });
});
