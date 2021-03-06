import { useState } from 'react';
import './Search.components.scss'

export const Search = props => {
    const [dropdown, setDropdown] = useState(false)
    const [region, setRegion] = useState(sessionStorage.getItem('region') || 'Filter By Region')
    const [name, setName] = useState(sessionStorage.getItem('name') || '')
    const handleDropdownDisplay = () => {
        setDropdown(prev => {
            let current = !prev;
            !current ? document.getElementById('dropdown').classList.add('hidden') : document.getElementById('dropdown').classList.remove('hidden')
            return current;
        })
    }
    const handleRegionChange = ({ target }) => {
        document.querySelector(".RegionBox #options-menu span").innerText = target.innerText;
        setRegion(prev => {
            let current = target.innerText;
            sessionStorage.setItem('region', current)
            if (current !== 'All Regions') {
                props.region(current);
            } else {
                props.getCountries()
            }
            return current;
        })
    }
    const handleNameChange = ({ target }) => {
        setName(prev => {
            let current = target.value;
            sessionStorage.setItem('name', current)
            if (current !== '') {
                props.search(current);
            } else {
                props.getCountries()
            }
            return current
        })
    }


    return (
        <div className="flex justify-between py-20 mmd:flex-wrap Search">
            <div className="flex items-center bg-white rounded-lg shadow mmd:mb-16 mmd:w-full dark:bg-gray-800 SearchBar px-14 py-7">
                <svg className="w-10 text-gray-700 dark:text-gray-300" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="currentColor" />
                </svg>
                <input value={name} onChange={handleNameChange} className="py-1 ml-10 text-2xl placeholder-gray-500 rounded-lg outline-none w-96 dark:bg-gray-800 dark:placeholder-gray-300" type="text" placeholder="Search for a country..." />
                <input type="hidden" name="hidden" value={dropdown} />
            </div>
            <div onClick={handleDropdownDisplay} className="relative inline-block text-left RegionBox">
                <div>
                    <button type="button" className="inline-flex items-center justify-between h-24 px-4 py-2 text-2xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow dark:text-gray-100 dark:bg-gray-800 dark:border-gray-600 w-80 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-gray-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                        <span>{region}</span>
                        <svg className="ml-2 -mr-1 h-7 w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div onClick={handleRegionChange} id="dropdown" className="absolute right-0 hidden py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg cursor-pointer h-80 dark:divide-gray-700 dark:bg-gray-800 w-80 ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <span id="africa" className="block px-5 py-2 text-2xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-50" role="menuitem">Africa</span>
                    <span id="america" className="block px-5 py-2 text-2xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-50" role="menuitem">Americas</span>
                    <span id="asia" className="block px-5 py-2 text-2xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-50" role="menuitem">Asia</span>
                    <span id="europe" className="block px-5 py-2 text-2xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-50" role="menuitem">Europe</span>
                    <span id="oceania" className="block px-5 py-2 text-2xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-50" role="menuitem">Oceania</span>
                    <span id="allRegions" className="block px-5 py-3 text-2xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-50" role="menuitem">All Regions</span>
                </div>
            </div>

        </div>
    )
}