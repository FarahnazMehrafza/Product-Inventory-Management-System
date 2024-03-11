import ProductCard from "../Components/ProductCard";
import React from 'react'; 
import products from "../data/product.json";
import "Home.css";

const Home: React.FC = () => {
  const productsArray = products.products.data.items
    return (
      <>
        <div className="productContainer">
          {productsArray.map((product) => (
            <ProductCard
             name= {product.name}
              description={product.detail}
              price= {product.price}
              image= {product.image}
             hero= {product.hero}
               />
          
          ))}
        
        </div>
      </>
    );
  };
export default Home;


