import { HomePage } from '../pages/Home.pages';
import { MoreInformationPage } from '../pages/MoreInformation.pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/:params' component={MoreInformationPage} />
            </Switch>
        </Router>
    )
}