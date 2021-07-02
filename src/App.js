import Router from './router/Routes';
import GlobalStyle from './styles/globalStyles'

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Router />
    </div>
  );
}

export default App;