import {create} from 'zustand';
import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL = "http://localhost:3000";

export const useProductStore = create((set,get) => ({
    //Products state
    products:[],
    loading:false,
    error:null,

    fetchProducts: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`${BASE_URL}/api/products`);
            set({ products: response.data.data, error: null });            
        } catch(err) {
            if (err.status == 429) set({ error: "Rate limit exceeded", products: [] });
            else set({ error: "Something went wrong", products: [] });
        } finally {
            set({ loading:false });
        }
    },

    deleteProduct: async (id) => {
        set({ loading: true });
        try {
            await axios.delete(`${BASE_URL}/api/products/${id}`);
            set((prev) => ({products: prev.products.filter(product => product.id !== id)}));
            toast.success("Product Deleted Successfully");
        } catch (error) {
            console.log("Error in DeleteProduct function", error);  
            toast.error("Something went wrong bro");
        } finally {
            set({ loading: false });
        }
    }
}));