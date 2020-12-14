import './Country.components.scss'
import { Link } from 'react-router-dom';

export const Country = props => {
    const country = props.country;

    return (
        <Link to={`/${country.name}`}>
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800 Country">
                <figure className="w-full overflow-hidden rounded-t-lg">
                    <img src={country.flag} alt="" className="object-cover w-full h-full" />
                </figure>
                <section className="p-10 Country-details">
                    <h2 className="text-3xl font-extrabold sm:text-2xl pb-7">{country.name}</h2>
                    <div className="space-y-3 text-2xl Country-details-main">
                        <div className="population">
                            <span className="mr-2 font-semibold detail-title">Population:</span>
                            <span className="font-light detail">{country.population}</span>
                        </div>
                        <div className="region">
                            <span className="mr-2 font-semibold detail-title">Region:</span>
                            <span className="font-light detail">{country.region}</span>
                        </div>
                        <div className="capital">
                            <span className="mr-2 font-semibold detail-title">Capital:</span>
                            <span className="font-light detail">{country.capital}</span>
                        </div>
                    </div>
                </section>
            </div>
        </Link>
    )
}