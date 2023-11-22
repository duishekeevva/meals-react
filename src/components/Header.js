import {Link} from "react-router-dom";
import Picture from './Assets/logo-hochyedy.png'

const Header=()=> {
    return (
        <header className={'header'}>
            <div className={'logo'}>
                <img style={{width:'250px'}} src={Picture} alt=""/>
            </div>
            <div className={'nav'}>
                <Link className={'link'} to={'/'}>Home</Link>
                <Link className={'link'}  to={'/search'}>Search</Link>
                <Link className={'link'} to={'/'}>Reviews</Link>
                <Link className={'link'}  to={'/search'}>Contacts</Link>
            </div>
            <div className={'header-btn'}>
                <button>Order</button>
            </div>
        </header>
    )
}

export default Header;