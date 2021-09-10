import filter from './images/expertList.png'
import arrowDown from './images/arrowDown.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <label>
                <div className="expertListButton">
                    <img src={filter} alt="filter" />
                </div>
                <span>Expert List</span>
            </label>




            <div className="links">
                <label>
                    <div className="columns">
                        <span>Columns</span>
                        <div className="arrowBlock">
                            <img src={arrowDown} alt="arrow down" />
                        </div>
                    </div>

                </label>
            </div>
        </nav>

    )
}

export default Navbar;