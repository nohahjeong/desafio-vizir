import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ResultPage from '../pages/ResultPage';
import ErrorPage from '../pages/ErrorPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                
                <Route exact path='/result'>
                    <ResultPage />
                </Route>
                
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;