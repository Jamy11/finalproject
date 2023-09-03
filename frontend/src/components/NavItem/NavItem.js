import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavItem = ({ givenUrl, NavItemName}) => {
    const active = "flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6"
    const deactivate = 'flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6'
    const { pathname } = useLocation()


    return (
        <li className={ pathname === givenUrl ? active : deactivate}>
            <div className="flex items-center">
                <Link to={givenUrl}>
                    <span className="text-sm  ml-2">{NavItemName}</span>
                </Link>
            </div>
        </li>
    )
}

export default NavItem