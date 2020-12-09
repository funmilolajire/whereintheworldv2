import { HomePage } from '../pages/Home.pages';
import { MoreInformationPage } from '../pages/MoreInformation.pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header/Header.components';

export const MainRouter = () => {

    return (
        <div className="relative text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white MainRouter data-scroll-container">
            <Router>
                <Header />
                <main className="px-32 sm:px-7">
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/:param' component={MoreInformationPage} />
                    </Switch>
                </main>
            </Router>
        </div>
    )
}