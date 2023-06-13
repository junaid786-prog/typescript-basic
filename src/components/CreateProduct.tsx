import { useState } from "react"
import { useCreateProductMutation } from "../redux/services/productsApi"

const CreateProductForm = () => {
    const [postError, setPostError] = useState<string | null>(null)
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        stock: 0,
        images: ""
    })
    const [addNewProduct] = useCreateProductMutation()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addNewProduct(productData).unwrap()
        .then(()=> {})
        .catch((e)=> setPostError(e?.data?.message))
    }
  return (
    <form onSubmit={handleSubmit}>
        <h3> Add new Blog</h3>
        {postError && <p style={{color: "red"}} >{postError}</p>}
        <div>
            <label htmlFor = "name">Title</label>
            <input id = "name" name = "name" placeholder="enter product name" onChange={(e)=>setProductData({...productData, name: e.target.value})} value={productData.name}/>
        </div>
        <div>
            <label htmlFor = "description">Body</label>
            <input id = "description" name = "description" placeholder="enter product description" onChange={(e)=>setProductData({...productData, description: e.target.value})} value={productData.description}/>
        </div>
        <div>
            <label htmlFor = "stock">Category</label>
            <input id = "stock" type="number" name = "stock" placeholder="enter product stock" onChange={(e)=>setProductData({...productData, stock: parseInt(e.target.value)})} value={productData.stock}/>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default CreateProductForm