import { useState, useEffect } from 'react';
import { HomePage } from '../pages/Home.pages';
import { MoreInformationPage } from '../pages/MoreInformation.pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header/Header.components';

import { CountriesApi } from '../utils/RestCountries.utils';

export const MainRouter = props => {
    const [countries, setCountries] = useState([]);
    const getCountries = async () => {
        const allCountries = await CountriesApi.getAllCountries();
        setCountries(allCountries);
    }
    const getCountriesBySearch = async (name) => {
        setCountries([])
        const allCountries = await CountriesApi.getCountriesBySearch(name);
        setCountries(allCountries);
    }
    const getCountriesByRegion = async (region) => {
        setCountries([])
        const allCountries = await CountriesApi.getCountriesByRegion(region);
        setCountries(allCountries);
    }
    const getMoreInformation = async country => {
        const countryInformation = await CountriesApi.getMoreInformation(country);
        return countryInformation[0];
    }
    const getBorderCountries = async code => {
        const borderFullNames = await CountriesApi.getBorderCountries(code);
        return borderFullNames;
    }
    useEffect(() => {
        getCountries();
    }, [])

    return (
        <div className="relative text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white MainRouter data-scroll-container">
            <Router>
                <Header />
                <main className="px-32 sm:px-7">
                    <Switch>
                        <Route exact path='/' render={() => <HomePage {...props} countries={countries} getCountries={getCountries} search={getCountriesBySearch} region={getCountriesByRegion} />} />
                        <Route exact path='/:param' render={() => <MoreInformationPage {...props} getBorderCountries={getBorderCountries} countryInformation={getMoreInformation} />} />
                    </Switch>
                </main>
            </Router>
        </div>
    )
}