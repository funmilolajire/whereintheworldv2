import './Countries.components.scss'
import { Country } from '../Country/Country.components';

export const Countries = props => {
    return (
        <div className="flex flex-wrap justify-between w-full pb-20 sm:justify-center gap-x-8 gap-y-28 Countries">
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
        </div>
    )
}