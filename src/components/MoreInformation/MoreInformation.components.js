import './MoreInformation.components.scss';
import { MoreInfoContent } from '../MoreInfoContent/MoreInfoContent.components';
import { Link } from 'react-router-dom';

export const MoreInformation = () => {
    return (
        <div className="min-h-screen sm:px-4 MoreInformation">
            <div className="w-56 sm:w-40 BackButtonWrapper">
                <Link to='/'>
                    <button className="flex items-center justify-center w-full h-16 my-32 text-2xl font-light bg-white rounded-lg shadow sm:mt-16 sm:mb-28 dark:bg-gray-800 BackButton focus:outline-none focus:ring focus:border-gray-300">
                        <svg className="w-10 pr-4 text-gray-900 dark:text-gray-50" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z" fill="currentColor" />
                        </svg>
                Back
                </button>
                </Link>
            </div>
            <MoreInfoContent />
        </div>
    )
}