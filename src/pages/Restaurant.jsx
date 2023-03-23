import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FicheRestaurant from '../components/FicheRestaurant.jsx'

function Restaurant () {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate=*`)
      if (response.status === 200) {
        const data = response.data.data
        setRestaurant(data)
      }
    }
    loadData()
  }, [])

  return restaurant && (
    <>
      <h1>FICHE D'UN RESTAURANT : {id}</h1>
      {/* <pre>{JSON.stringify(restaurant, null, 2)}</pre> */}
      <div className='ficheRestaurant'>

        <FicheRestaurant restaurant={restaurant} />

      </div>

    </>
  )
}
export default Restaurant
