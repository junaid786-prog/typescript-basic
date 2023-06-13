import { Product as productType } from '../utils/types'
import User from './User'

const ProductC = (props: productType) => {
  console.log(props.images[0])
  return (
    <div style={{ border: "1px solid black", margin: "5px 0px", padding: "10px" }}>
      <img src="https://atreboot.com/wp-content/uploads/2021/03/642.png" alt={props.name} style={{ width: "100px" }} />
      <p>title: {props.name}</p>
      <p>body: {props.description}</p>
      {/* <p>category: {props.stock}</p> */}
      <p>category: </p>
      {/* <User name={props.seller[0].name} gmail={props.seller[0].gmail} country={props.seller[0].country} userType={props.seller[0].userType} /> */}
    </div>
  )
}

export default ProductC