import '../styles/HeaderStyle.css'

function Header () {
  return (

    <header>
      <div className='logo'>
        <img src='/assets/img/LogoUberEats.png' height={30} />
      </div>
      <nav className='menu'>
        <ul>
          <li><a href='/'>Accueil</a></li>
          <li><a href='/Restaurants'>Restaurants</a></li>
          <li><a href='/About'>A propos</a></li>
        </ul>
      </nav>
      <div className='reseaux'>
        <a href='#'><img src='https://img.icons8.com/material-sharp/50/null/facebook-new.png' alt='Facebook' /></a>
        <a href='#'><img src='https://img.icons8.com/ios-filled/50/null/twitter.png' alt='Twitter' /></a>
      </div>
    </header>
  )
}

export default Header
