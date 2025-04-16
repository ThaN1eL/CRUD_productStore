import { useProductStore } from "../store/useProductStore"

function ProductPage() {
  const {
    currentProduct,
    formData,
    setFormData,
    loading,
    error,
    fetchProduct,
    upadateProduct,
    deleteProduct,
  } = useProductStore()
  const navigate = useNavigate()
  const {id} = useParams()

  



  return  <div>ProductPage</div>
}

export default ProductPage
