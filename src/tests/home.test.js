import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/configureStore';
import Home from '../components/home';

// Home component tests
describe('Home snapshot', () => {
  afterEach(cleanup);

  it('should render Home correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(asFragment(<Home />)).toMatchSnapshot();
  });
});
