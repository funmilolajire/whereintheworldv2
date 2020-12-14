import { MoreInformation } from '../components/MoreInformation/MoreInformation.components'

export const MoreInformationPage = props => {
    return <MoreInformation getBorderNames={props.getBorderCountries} countryInformation={props.countryInformation} />
}