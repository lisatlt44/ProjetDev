import '../styles/FicheRestaurantStyle.css'

const IMAGE_URL = 'http://localhost:1337'

function FicheRestaurant ({ restaurant }) {
  const attributes = restaurant.attributes
  let imageUrl = ''
  if (attributes.image) {
    imageUrl = IMAGE_URL + attributes.image.data.attributes.url
  } else {
    imageUrl = 'https://via.placeholder.com/300x150'
  }

  return (

    <section>
      <div class='restaurant'>
        <img src={imageUrl} />
        <h2>{attributes.name}</h2>
        <p>{attributes.description}</p>
        <ul>
          <li>{attributes.adresse.street}, {attributes.adresse.postcode}, {attributes.adresse.city}</li>
          <li>{attributes.adresse.email}</li>
          <li>{attributes.adresse.phone}</li>
        </ul>
      </div>
    </section>
  )
}

export default FicheRestaurant
