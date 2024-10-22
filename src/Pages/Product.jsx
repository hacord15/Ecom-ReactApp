import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams(); // Ensure this matches your routing setup
    const product = all_product ? all_product.find((e) => e.id === Number(productId)) : null;

    // Scroll to the top when productId changes
    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to top of the page on product change
    }, [productId]);

    if (!product) {
        return <div>Product not found or loading...</div>;  // Handle case where product is not found or still loading
    }

    return (
        <div>
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    );
}

export default Product;
