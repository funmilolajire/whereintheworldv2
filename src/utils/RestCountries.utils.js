import axios from 'axios';

const getPopulation = (population) => {
    const num_parts = population.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}

export const CountriesApi = {
    async getAllCountries() {
        const url = 'https://restcountries.com/v3.1/all';
        const countries = await axios.get(url).then(response => response.data.map(data => ({
            name: data.name,
            population: getPopulation(data.population),
            region: data.region,
            capital: data.capital,
            flag: data.flag
        })))
        return countries;
    },
    async getMoreInformation(countryName) {
        const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        const country = await axios.get(url).then(response => response.data.map(data => ({
            name: data.name,
            population: getPopulation(data.population),
            region: data.region,
            capital: data.capital,
            flag: data.flag,
            nativeName: data.nativeName,
            subRegion: data.subregion,
            currencies: data.currencies.map(currency => currency.name).join(', '),
            languages: data.languages.map(language => language.name).join(', '),
            topLevelDomain: data.topLevelDomain.map(domain => domain).join(', '),
            borderCountries: data.borders
        })))
        return country;
    },
    async getCountriesBySearch(name) {
        const url = `https://restcountries.com/v3.1/name/${name}`;
        if (name !== '') {
            const countries = await axios.get(url).then(response => response.data.map(data => ({
                name: data.name,
                population: getPopulation(data.population),
                region: data.region,
                capital: data.capital,
                flag: data.flag
            })))
            return countries;
        }
    },
    async getCountriesByRegion(region) {
        const url = `https://restcountries.com/v3.1/region/${region}`;
        const countries = await axios.get(url).then(response => response.data.map(data => ({
            name: data.name,
            population: getPopulation(data.population),
            region: data.region,
            capital: data.capital,
            flag: data.flag
        })))
        return countries;
    },
    async getBorderCountries(code) {
        const url = `https://restcountries.com/v3.1/alpha/${code}`;
        const countryName = await axios.get(url).then(response => response.data.name);
        return countryName
    }
}
