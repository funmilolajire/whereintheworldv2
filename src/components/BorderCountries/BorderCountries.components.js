import './BorderCountries.components.scss';
import { Link } from 'react-router-dom';

export const BorderCountries = props => {
    return (
        <>
            {props.borderCountries &&
                props.borderCountries.length !== 0 &&
                <div className="pb-10 text-2xl BorderCountries">
                    <span className="pr-2 font-semibold">Border Countries: </span>
                    <span className="borders">
                        {props.borderCountries && props.borderCountries.map(borderCountry => (
                            <Link to={"/" + borderCountry} key={borderCountry}>
                                <button className="w-40 mb-4 mr-4 font-light truncate bg-white rounded-lg shadow-lg h-11 focus:outline-none focus:ring focus:border-gray-300 dark:bg-gray-800">
                                    {borderCountry.split('(')[0]}
                                </button>
                            </Link>
                        ))}
                    </span>
                </div>}
        </>
    )
}