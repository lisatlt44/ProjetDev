import DishesListItem from './DishesListItem'

function DishesList ({ dishes }) {
  // Récupération des catégories
  const _categories = dishes.data.map(dish => dish.attributes.type)
  const categories = [...new Set(_categories)]
  // On prépare la liste des plats (un tableau vide)
  const elements = []
  for (const category of categories) {
    const cat = (
      <>
        <h1>{category}</h1>
        <div className='list'>
          {
        dishes.data
          .filter(dish => dish.attributes.type === category)
          .map(dish => {
            return <DishesListItem key={dish.id} dish={dish} />
          })
        }
        </div>
      </>
    )
    elements.push(cat)
  }
  // On obtient dans "elements" un tableau de composants React
  return elements
}

export default DishesList

// for (const dish of dishes.data) {
//   elements.push(<DishesListItem dish={dish} />)
// }

// return dishes && dishes.data && (
//   <div className='list'>
//     {}
//     {elements}
//   </div>

// <div className='list'>
//   {
//     dishes.data.map(dish => {
//       let imageUrl = ''
//       if (dish.attributes) {
//         imageUrl = IMAGE_URL + dish.attributes.image.data.attributes.url
//       } else {
//         imageUrl = 'https://via.placeholder.com/300x150'
//       }

//       return (
//         <div key={dish.id}>
//           <div className='dish'>
//             <div className='dish-header'>
//               <img src={imageUrl} />
//             </div>
//             <div className='dish-body'>
//               <h4>{dish.attributes.name}</h4>
//               <p>{dish.attributes.description}</p>
//               <p>{dish.attributes.price} €</p>

//             </div>
//           </div>
//         </div>
//       )
//     })
//   }

// </div>
