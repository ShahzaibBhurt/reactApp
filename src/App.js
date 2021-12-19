
import { Provider } from 'react-redux';
import UsersForm from './components/userForm';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
      <UsersForm />
      </Provider>
    </>
  );
}

export default App;
