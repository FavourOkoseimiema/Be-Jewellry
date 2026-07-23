import { useState } from "react";
import api from "../../../services/api";
import toast from "react-hot-toast";

function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [featured, setFeatured] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setIsAdding(true);
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("featured", featured);

    const response = await api.post(
      "/products",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

   toast.success(response.data.message)

    setName("");
    setDescription("");
    setPrice("");
    setImage(null);
    setFeatured(false);

  } catch (error) {
    console.error(error);

   toast.error(
  error.response?.data?.message ||
  "Failed to add product."
);
  }
  finally{
    setIsAdding(false);
  }
};

  return (
    <section className="bg-stone-900 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-amber-400">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block mb-2 text-sm">
            Product Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            className="w-full p-3 rounded bg-stone-800 border border-stone-700 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">
            Description
          </label>

          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product description"
            className="w-full p-3 rounded bg-stone-800 border border-stone-700 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">
            Price
          </label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="₦0"
            className="w-full p-3 rounded bg-stone-800 border border-stone-700 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">
            Product Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
          />
        </div>
<div className="flex items-center gap-3">

  <input
    type="checkbox"
    checked={featured}
    onChange={(e) => setFeatured(e.target.checked)}
    className="w-5 h-5 accent-amber-500"
  />

  <label className="text-sm">
    Feature this product
  </label>

</div>
        <button 
          type="submit"
          disabled={isAdding}
          className={`bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded transition ${isAdding
      ? "opacity-60 cursor-not-allowed"
      : ""}`}
        >
  {isAdding ? "Adding Product..." : "Add Product"}        </button>

      </form>
    </section>
  );
}

export default AddProductForm;