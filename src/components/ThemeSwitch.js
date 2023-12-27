import { PiSun } from "react-icons/pi";
import { IoIosMoon } from "react-icons/io";
import { useTheme } from "../context/ThemeContext";
import '../styles/themeSwitch.css';

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className='theme-switch' onClick={toggleTheme}>
            {theme === 'light' && (
                <PiSun size='28px' />
            )}
            {theme === 'dark' && (
                <IoIosMoon size='28px' />
            )}
        </div>
    )
}
