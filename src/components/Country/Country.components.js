import './Country.components.scss'
import Iceland from './flag of iceland.svg';
import { Link } from 'react-router-dom';

export const Country = props => {
    return (
        <Link to="/Iceland">
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800 Country">
                <figure className="w-full overflow-hidden rounded-t-lg">
                    <img src={Iceland} alt="" className="object-cover w-full h-full" />
                </figure>
                <section className="p-10 Country-details">
                    <h2 className="text-3xl font-extrabold pb-7">Iceland</h2>
                    <div className="space-y-3 text-2xl Country-details-main">
                        <div className="population">
                            <span className="mr-2 font-semibold detail-title">Population:</span>
                            <span className="font-light detail">303,246</span>
                        </div>
                        <div className="region">
                            <span className="mr-2 font-semibold detail-title">Region:</span>
                            <span className="font-light detail">Europe</span>
                        </div>
                        <div className="capital">
                            <span className="mr-2 font-semibold detail-title">Capital:</span>
                            <span className="font-light detail">Reykjavik</span>
                        </div>
                    </div>
                </section>
            </div>
        </Link>
    )
}