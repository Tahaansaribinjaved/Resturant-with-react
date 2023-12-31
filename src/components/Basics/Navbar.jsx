import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    // console.log(menuList);
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        menuList.map((cruElem) => {
                            return (

                                <button className="btn-group__item" onClick={() => filterItem(cruElem)}>{cruElem}</button>
                            )
                        })
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar
