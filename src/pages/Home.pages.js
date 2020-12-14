import { App } from "../components/App/App.components"

export const HomePage = props => {
    return <App countries={props.countries} getCountries={props.getCountries} search={props.search} region={props.region} />
}