import React, { useState, useEffect } from 'react';
import * as CONSTANTS from '../constants';
import { Navbar, Dropdown } from 'flowbite-react'

export default function Header() {
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <img
                        src="https://assets.icliniq.com/v2/assets/images/iCliniq-logo/ic-white-logo.svg"
                        className="mx-3 h-10 sm:h-9 my-2"
                        alt="iCliniq Logo"
                    />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='mr-4'>
                    {CONSTANTS.NAV_MENU.map((options) => {
                        return (

                            typeof options === 'object' ?
                                Object.keys(options).map((result) => {
                                    return (
                                        <>
                                            <Dropdown
                                                arrowIcon={false}
                                                inline={true}
                                                label={<div className='flex items-center'>
                                                <Navbar.Link>
                                                    {result}
                                                </Navbar.Link>
                                                    {/* <MdOutlineArrowDropDown className="ml-2 text-xl" /> */}
                                                </div>}
                                            >
                                                {options[result].map((hiddenMenu) => {
                                                    return (
                                                        <Dropdown.Item>
                                                            {hiddenMenu}
                                                        </Dropdown.Item>
                                                    )
                                                })}
                                            </Dropdown>
                                        </>
                                    )
                                })
                                :
                                <Navbar.Link>
                                    {options}
                                </Navbar.Link>
                        )
                    })}

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
