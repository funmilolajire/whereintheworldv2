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
            {props.countries.length !== 0 && <div className="grid flex-wrap justify-between w-full grid-flow-row pb-20 xl:justify-items-center mmmd:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 mxl:grid-cols-4 lg:grid-cols-3 sm:justify-center gap-y-28 Countries">
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