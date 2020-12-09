import './MoreInfoContent.components.scss';
import { BorderCountries } from '../BorderCountries/BorderCountries.components';
import Iceland from '../Country/flag of iceland.svg';

export const MoreInfoContent = props => {
    return (
        <div className="flex lg:flex-wrap sm:pb-72 MoreInfoContent">
            <figure className="w-1/2 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl sm:rounded-xl md:w-full">
                <img src={Iceland} alt="country-flag" className="object-cover object-center w-full h-full" />
            </figure>
            <section className="w-1/2 py-16 pl-48 sm:pt-20 sm:pb-8 lg:w-3/4 lg:pl-0 MoreInfoContent-details md:w-full">
                <h2 className="text-5xl font-extrabold pb-9">Iceland</h2>
                <div className="flex justify-between w-full pb-20 text-2xl sm:flex-wrap sm:pb-14 details-section">
                    <div className="left-details-section sm:pb-14">
                        <div className="detail-wrapper">
                            <span className="detail-title">Native Name:</span>
                            <span className="detail">Belgie</span>
                        </div>
                        <div className="detail-wrapper">
                            <span className="detail-title">Population:</span>
                            <span className="detail">11,319,511</span>
                        </div>
                        <div className="detail-wrapper">
                            <span className="detail-title">Region:</span>
                            <span className="detail">Europe</span>
                        </div>
                        <div className="detail-wrapper">
                            <span className="detail-title">Sub Region:</span>
                            <span className="detail">Western Europe</span>
                        </div>
                        <div className="detail-wrapper">
                            <span className="detail-title">Capital:</span>
                            <span className="detail">Brussels</span>
                        </div>
                    </div>
                    <div className="right-details-section">
                        <div className="detail-wrapper">
                            <span className="detail-title">Top Level Domain:</span>
                            <span className="detail">.be</span>
                        </div>
                        <div className="detail-wrapper">
                            <span className="detail-title">Currencies:</span>
                            <span className="detail">Euro</span>
                        </div>
                        <div className="detail-wrapper">
                            <span className="detail-title">Languages:</span>
                            <span className="detail">Dutch, French, German</span>
                        </div>
                    </div>
                </div>
                <BorderCountries />
            </section>
        </div>
    )
} 