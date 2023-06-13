import ProductC from "../components/Product"
import { useGetProductsQuery } from "../redux/services/productsApi"
import { Product } from "../utils/types"

const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery(null)
  if (isLoading) return <p>Loading</p>
  if (error) return <p>erro occured</p>
  return (
    <div>
      <button onClick={() => window.location.replace("/product/create")} >Create Product</button>
      <div className="products_list">
        {
          !isLoading && data && data.products && data.products.map((product: Product, index) => {
            return <ProductC
              name={product.name} seller={product.seller}
              description={product.description}
              stock={product.stock}
              images={product.images}
              key={index}
            />
          })
        }
      </div>
    </div>
  )
}

export default Products