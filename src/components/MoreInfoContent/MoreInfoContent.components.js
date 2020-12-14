import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import './MoreInfoContent.components.scss';
import { BorderCountries } from '../BorderCountries/BorderCountries.components';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

export const MoreInfoContent = (props) => {
    const [country, setCountry] = useState([])
    const match = useRouteMatch().params.param
    const getBorderNames = async code => {
        const borderCountries = await props.getBorderNames(code)
        return borderCountries
    }
    const getCountry = async () => {
        setCountry([])
        const country = await props.countryInformation(match);
        if (country.borderCountries.length !== 0) {
            const borderNames = await Promise.all(country.borderCountries.map(border => getBorderNames(border)))
            country.borderCountries = borderNames
        }
        setCountry(country)
    }
    useEffect(() => {
        getCountry();
    }, [match])
    return (
        <>
            {country.length === 0 &&
                <div className="flex items-center justify-center w-full h-full">
                    <p className="text-7xl" style={{ fontFamily: 'Big Shoulders Inline Display, cursive', }}>Loading...</p>
                    <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                </div>
            }
            {country.length !== 0 && <div className="flex lg:flex-wrap sm:pb-72 MoreInfoContent">
                <figure className="relative flex items-center justify-center w-1/2 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl sm:rounded-xl md:w-full">
                    <Loader style={{ zIndex: '0' }} className="absolute z" type="TailSpin" color="#00BFFF" height={80} width={80} />
                    <img src={country.flag} style={{ zIndex: 1 }} alt="country-flag" className="object-cover w-full h-full" />
                </figure>
                <section className="w-1/2 py-16 pl-48 sm:pt-20 sm:pb-8 lg:w-3/4 lg:pl-0 MoreInfoContent-details md:w-full">
                    <h2 className="text-5xl font-extrabold pb-9">{country.name}</h2>
                    <div className="flex justify-between w-full pb-20 text-2xl sm:flex-wrap sm:pb-14 details-section">
                        <div className="left-details-section sm:pb-14">
                            <div className="detail-wrapper">
                                <span className="detail-title">Native Name:</span>
                                <span className="detail">{country.nativeName}</span>
                            </div>
                            <div className="detail-wrapper">
                                <span className="detail-title">Population:</span>
                                <span className="detail">{country.population}</span>
                            </div>
                            <div className="detail-wrapper">
                                <span className="detail-title">Region:</span>
                                <span className="detail">{country.region}</span>
                            </div>
                            <div className="detail-wrapper">
                                <span className="detail-title">Sub Region:</span>
                                <span className="detail">{country.subRegion}</span>
                            </div>
                            <div className="detail-wrapper">
                                <span className="detail-title">Capital:</span>
                                <span className="detail">{country.capital}</span>
                            </div>
                        </div>
                        <div className="right-details-section">
                            <div className="detail-wrapper">
                                <span className="detail-title">Top Level Domain:</span>
                                <span className="detail">{country.topLevelDomain}</span>
                            </div>
                            <div className="detail-wrapper">
                                <span className="detail-title">Currencies:</span>
                                <span className="detail">{country.currencies}</span>
                            </div>
                            <div className="detail-wrapper">
                                <span className="detail-title">Languages:</span>
                                <span className="detail">{country.languages}</span>
                            </div>
                        </div>
                    </div>
                    <BorderCountries getBorderNames={getBorderNames} borderCountries={country.borderCountries} />
                </section>
            </div>
            }
        </>
    )
} 