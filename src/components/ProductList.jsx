import ProductCard from "./ProductCard";

function ProductList(props){

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 w-full">

            {props.products.map((product)=>(
                <ProductCard
                    product={product}
                    addToCart={props.addToCart}
                    key={product.id}
                />
            ))}

        </div>
    )
}

export default ProductList;