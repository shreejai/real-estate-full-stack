import {listData} from '../../app/libs/dummydata'
import PropertyCard from '../PropertyCard'
const List = () => {
  return (
    <div className='list flex flex-col gap-6'>
      {listData.map((item) =>(
        <div key={item.id}>
          <PropertyCard 
            title={item.title}
            amount={item.amount}
            loc={item.loc}
            img={item.img}
            beds={item.beds}
            bath={item.bath}
            />
        </div>
      ))}
    </div>
  )
}

export default List