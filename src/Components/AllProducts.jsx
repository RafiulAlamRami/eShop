import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllProducts = () => {

    const [allProducts,setAllProducts]=useState([])

    useEffect(()=>{
        // axios.get('https://e-shop-server-sigma.vercel.app/allProducts')
        axios.get('https://e-shop-server-sigma.vercel.app/allProducts')
        .then(res=>{
            console.log(res.data);
            setAllProducts(res.data)
        })
    },[])

    return (
        <div>
            {allProducts.length}
        </div>
    );
};

export default AllProducts;