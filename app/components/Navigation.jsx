import Link from 'next/link'
import React from 'react'
import styles from './Navigation.module.css'

const links = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Items',
        route: '/items'
    },
    {
        label: 'Ordes',
        route: '/orders'
    }
]
const Navigation = () => {
    return (
        <header>
            <nav>
                <ul className={styles.navigation}>
                    {links.map(({ label, route }) => (
                        <li key={route}>
                            <Link href={route}> {label}  </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
export default Navigation 