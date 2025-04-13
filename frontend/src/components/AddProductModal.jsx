import { DollarSignIcon, ImagesIcon, Package2Icon } from "lucide-react"
import { useProductStore } from "../store/useProductStore"

function AddProductModal() {
  const {addProduct, formData, setFormData} = useProductStore()

  return (
    <dialog id="add_product_modal" className="modal">
        <div className="modal-box">
            {/* Modal Box*/}
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
            </form>

            {/* Modal Header */}
            <h3 className="font-bold text-xl mb-8">Add New Product</h3>

    <form onSubmit={addProduct} className="space-y-6"></form>
        <div className="grid gap-6">
            {/* Product Name Input */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-base font-medium"> Product Name</span>
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none
                    text-base-content/50">
                        <Package2Icon className="size-5" />
                    </div>
                    <input 
                        type="text"
                        placeholder="Enter the Product Name"
                        className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors
                        duration-200"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
            </div>
            {/* Product Price Input */}

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-base font-medium">Price</span>
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none
                    text-base-content/50">
                        <DollarSignIcon className="size-5" />
                    </div>
                    <input 
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors
                        duration-200"
                        value={formData.price}
                        onChange={(e) => setFormData ({ ...formData, price: e.target.value })}
                    />
                </div>
            </div>
            {/* Product Image */}

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-base font-medium"> Image Url</span>
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none
                    text-base-content/50">
                        <ImagesIcon className="size-5" />
                    </div>
                    <input 
                        type="text"
                        placeholder="https://example.com/image.jpg"
                        className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors
                        duration-200"
                        value={formData.image}
                        onChange={(e) => setFormData({...formData, image: e.target.value })}
                    />
                </div>
            </div>
        </div>
        </div>
    </dialog>
  )
}

export default AddProductModal
