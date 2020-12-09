import './BorderCountries.components.scss';

export const BorderCountries = props => {
    const borderCountries = ['France', 'Spain', 'Germany', 'Canada']
    return (
        <div className="text-2xl BorderCountries">
            <span className="pr-2 font-semibold">Border Countries: </span>
            <span className="borders">
                {borderCountries && borderCountries.map(borderCountry => <button key={borderCountry} className="w-40 mb-4 mr-4 font-light bg-white rounded-lg shadow-lg h-11 focus:outline-none focus:ring focus:border-gray-300 dark:bg-gray-800">{borderCountry}</button>)}
            </span>
        </div>
    )
}