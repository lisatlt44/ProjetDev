import '../styles/FicheRestaurantStyle.css'

function RestaurantAddress ({ adresse }) {
  return (
    <div className='adresse'>
      <h2>Localisation</h2>
      <div className='row'>
        <div className='col'>
          <iframe
            width='100%'
            height='300'
            src={`https://maps.google.com/maps?q=${adresse.street}&hl=fr&z=14&amp&output=embed`}
          />
        </div>
        <div className='col'>
          <p>Adresse : {`${adresse.street}, ${adresse.postcode} - ${adresse.city}`}</p>
          <p>Téléphone : {`${adresse.phone}`}</p>
          <p>Email : {`${adresse.email}`}</p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantAddress
