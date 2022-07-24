import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

describe('Home component', () => {
  it('should render with correct contents', () => {
    render(<Home />, { wrapper: BrowserRouter });
    const aboutLinkTag = screen.getByText(/about/i);
    const aboutStoreTag = screen.getByText(/store/i);
    const aboutGmailTag = screen.getByText(/gmail/i);
    const aboutImagesTag = screen.getByText(/images/i);
    const appIcon = screen.getByTestId('app-icon');
    const avatarIcon = screen.getByTestId('header-avatar');
    expect(aboutLinkTag).toBeInTheDocument();
    expect(aboutStoreTag).toBeInTheDocument();
    expect(aboutGmailTag).toBeInTheDocument();
    expect(aboutImagesTag).toBeInTheDocument();
    expect(appIcon).toBeInTheDocument();
    expect(avatarIcon).toBeInTheDocument();
  });
});
