import FicheRestaurant from '../components/FicheRestaurant.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantAddress from '../components/RestaurantAddress.jsx'
import DishesList from '../components/DishesList.jsx'

function Restaurant () {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate[image][populate]=*&populate[dishes][populate]=*&populate[adresse][populate]=*`)
      if (response.status === 200) {
        const data = response.data.data
        setRestaurant(data)
      }
    }
    loadData()
  }, [])

  return restaurant && (
    <>
      <FicheRestaurant restaurant={restaurant} />
      <RestaurantAddress adresse={restaurant.attributes.adresse} />
      <DishesList dishes={restaurant.attributes.dishes} />
    </>
  )
}

export default Restaurant
