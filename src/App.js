
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
