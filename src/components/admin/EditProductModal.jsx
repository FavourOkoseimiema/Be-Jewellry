import { useState } from "react";

function EditProductModal({ product, closeModal, updateProduct }) {

  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProduct({
      ...product,
      name,
      description,
      price
    });

    closeModal();
  };


  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">

      <section className="bg-stone-900 w-full max-w-lg rounded-lg p-6">

        <h2 className="text-xl text-amber-400 font-semibold mb-5">
          Edit Product
        </h2>


        <form onSubmit={handleSubmit} className="space-y-4">


          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-3 bg-stone-800 rounded"
          />


          <textarea
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className="w-full p-3 bg-stone-800 rounded"
            rows="4"
          />


          <input
            type="number"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="w-full p-3 bg-stone-800 rounded"
          />


          <div className="flex gap-3">

            <button
              type="button"
              onClick={closeModal}
              className="flex-1 bg-stone-700 py-2 rounded"
            >
              Cancel
            </button>


            <button
              type="submit"
              className="flex-1 bg-amber-500 text-black py-2 rounded"
            >
              Save
            </button>

          </div>


        </form>

      </section>

    </div>
  );
}

export default EditProductModal;