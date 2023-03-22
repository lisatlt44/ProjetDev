import '../styles/HeaderStyle.css'


function Header() {
    return (

    <header>
        <div className='logo'>
            <img src='/assets/img/LogoUberEats' height={100} />
        </div>
        <nav className='menu'>
            <ul>
                <li><a href="#">Menu1</a></li>
                <li><a href="#">Menu2</a></li>
                <li><a href="#">Menu3</a></li>
                <li><a href="#">Menu4</a></li>
            </ul>
        </nav>
        <div className='reseaux'>
            <a href="#"><img src="https://img.icons8.com/material-sharp/50/null/facebook-new.png" alt="Facebook"></img></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/null/twitter.png" alt="Twitter"></img></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/null/instagram-new--v1.png" alt="Instagram"></img></a>
        </div>
    </header>
    );
}

export default Header;