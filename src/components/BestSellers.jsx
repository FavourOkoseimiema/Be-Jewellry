function BestSellers({products=[]}) {
  return (
    <section className="bg-black py-14 overflow-hidden">

      <div className="text-center mb-10">

        <h2 className="font-serif text-3xl tracking-[0.3em] uppercase text-white">
          Best Sellers
        </h2>
<div className="flex gap-6 overflow-x-auto px-4">
  {products.map((product) => (
    <div
      key={product._id}
      className="min-w-[280px]"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-lg"
      />
    </div>
  ))}
</div>
        <div className="w-20 h-[1px] bg-amber-500 mx-auto mt-4"></div>

      </div>

    </section>
  );
}

export default BestSellers;