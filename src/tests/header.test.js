import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/header/Header';
import store from '../redux/configureStore';

// Header component tests
describe('Header snapshot', () => {
  afterEach(cleanup);

  it('should render Header correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment(<Header />)).toMatchSnapshot();
  });
});
