import '../styles/FooterStyle.css'

function Footer () {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <img src='assets/img/LogoUberEats.png' alt='Logo' />
      </div>
      <div className='col'>
        <ul>
          <li><a href='/'>Accueil</a></li>
          <li><a href='/Restaurants'>Restaurants</a></li>
          <li><a href='/About'>A propos</a></li>
        </ul>
      </div>
      <div className='footer-reseaux'>
        <ul>
          <a href='#'><img src='https://img.icons8.com/material-sharp/50/null/facebook-new.png' alt='Facebook' /></a>
          <a href='#'><img src='https://img.icons8.com/ios-filled/50/null/twitter.png' alt='Twitter' /></a>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
