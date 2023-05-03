import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/slices/themeSlice';
import styles from "../scss/ThemeChanger.module.scss"

export default function ThemeChanger({ classname }) {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch();

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    const handleThemeChange = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark'
        dispatch(setTheme(nextTheme))
    }

    return (
        <>
            <div 
                className={cn(
                    classname,
                    styles.root,
                    theme === 'dark' ? styles.dark : styles.light
                )}
                onClick={handleThemeChange}
            />
        </>
    );
}