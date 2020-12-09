import { useState, useEffect } from 'react';
import './Header.components.scss'
import lightPath from './LightModePath.svg';
import { Link } from 'react-router-dom';

export const Header = props => {
    const [darkMode, setDarkMode] = useState([...document.querySelector('html').classList].includes('dark') || (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark'))
    const handleModeChange = () => {
        setDarkMode(prev => {
            let current = !prev;
            if (current) {
                document.querySelector('html').classList.add('dark')
                localStorage.setItem('theme', 'dark');
            } else {
                document.querySelector('html').classList.remove('dark')
                localStorage.setItem('theme', 'light')
            }
            console.log(localStorage.getItem('theme'))
            return current;
        })
    }
    useEffect(() => {
        const mode = document.getElementById('mode')
        if (darkMode) {
            mode.innerText = 'Light Mode'
            document.querySelector('html').classList.add('dark')
        } else {
            mode.innerText = 'Dark Mode'
            document.querySelector('html').classList.remove('dark')
        }
    }, [darkMode])
    return (
        <header className="flex justify-between px-32 bg-white shadow-sm sm:px-7 dark:bg-gray-800 py-9">
            <Link to='/'><h1 className="text-4xl font-extrabold cursor-pointer sm:text-2xl">Where in the world?</h1></Link>
            <div onClick={handleModeChange} className="flex items-center cursor-pointer">
                <img src={lightPath} alt="" className="mb-1 mr-3" />
                <span id="mode" className="text-2xl font-semibold sm:text-xl"></span>
            </div>
        </header>
    )
}