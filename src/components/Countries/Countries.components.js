import './Countries.components.scss'
import { Country } from '../Country/Country.components';
import LazyLoad from 'react-lazyload';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const Spinner = () => (
    <div className="Countries loading">
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
)

export const Countries = props => {
    return (
        <>
            {props.countries.length !== 0 && <div className="flex flex-wrap justify-between w-full pb-20 sm:justify-center gap-x-8 gap-y-28 Countries">
                {props.countries.length && props.countries.map(country =>
                    <LazyLoad key={country.name} height={200} offset={100} placeholder={<Spinner />}>
                        <Country key={country.name} country={country} />
                    </LazyLoad>
                )}
            </div>}
            {props.countries.length === 0 && <div className="flex items-center justify-center w-full h-full">
                <Loader type="Bars" color="#00BFFF" height={80} width={80} />
            </div>}
        </>
    )
}