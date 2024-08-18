// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AllProducts = () => {
//   const [allProducts, setAllProducts] = useState([]);

//   useEffect(() => {
//     axios.get("https://e-shop-server-sigma.vercel.app/allProducts").then((res) => {
//       console.log(res.data);
//       setAllProducts(res.data);
//     });
//   }, []);

//   const handlePriceRange = (e) => {
//     e.preventDefault();
//     const minPrice = e.target.miprice.value;
//     const maxPrice = e.target.maprice.value;
//     console.log(minPrice, maxPrice);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const search = e.target.search.value;

//     console.log(search);
//   };

//   return (
//     <div>
//       {allProducts.length}

//       <div className="flex my-16  gap-5">

//         {/* filter and search */}
//         <div className=" flex gap-5">
//           {/* filter by Brand */}
//           <div className="dropdown dropdown-hover">
//             <div tabIndex={0} role="button" className="btn m-1">
//               Filter By Brand
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
//             >
//               <li>
//                 <a>Walton</a>
//               </li>
//               <li>
//                 <a>Panasonic</a>
//               </li>
//               <li>
//                 <a>Sony</a>
//               </li>
//               <li>
//                 <a>Singer</a>
//               </li>
//             </ul>
//           </div>
//           {/* filter by Category */}
//           <div className="dropdown dropdown-hover">
//             <div tabIndex={0} role="button" className="btn m-1">
//               Filter By Category
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
//             >
//               <li>
//                 <a>AC</a>
//               </li>
//               <li>
//                 <a>Fridge</a>
//               </li>
//               <li>
//                 <a>TV</a>
//               </li>
//               <li>
//                 <a>Washing Machine</a>
//               </li>
//             </ul>
//           </div>
//           {/* filter by Price Range */}
//           <div className="">
//             <form action="" onSubmit={handlePriceRange}>
//               <div className="flex gap-2">
//                 <input
//                   type="number"
//                   placeholder="Min price"
//                   name="miprice"
//                   className="input input-bordered w-32 max-w-xs"
//                 />
//                 <input
//                   type="number"
//                   placeholder="Max price"
//                   name="maprice"
//                   className="input input-bordered w-32 max-w-xs"
//                 />
//                 <button className="btn" type="submit">
//                   Find
//                 </button>
//               </div>
//             </form>
//           </div>
//           {/* search by product name */}
//           <div>
//             <form action="" onSubmit={handleSearch}>
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder="Search Here"
//                   name="search"
//                   className="input input-bordered w-64 max-w-xs"
//                 />
//                 <button className="btn" type="submit">
//                   Search
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Sorting */}
//         <div>

//           {/* Sorting by Price high low */}
//           <div className="dropdown dropdown-hover">
//             <div tabIndex={0} role="button" className="btn m-1">
//               Sort by price
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
//             >
//               <li>
//                 <a>Price high to low</a>
//               </li>
//               <li>
//                 <a>Price low to high</a>
//               </li>
//             </ul>
//           </div>

//           {/* Sorting by date*/}
//           <div className="dropdown dropdown-hover">
//             <div tabIndex={0} role="button" className="btn m-1">
//               Sort by date
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
//             >
//               <li>
//                 <a>Newest first</a>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </div>

//       {/* Product Card  */}
//       <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-3 md:gap-5 lg:grid lg:grid-cols-4">
//         {allProducts?.map((allProduct) => (
//           <>
//             <div className="flex flex-col rounded-2xl w-96 bg-[#ededed] shadow-xl">
//               <figure className="flex justify-center items-center rounded-2xl">
//                 <img
//                   src={`${allProduct.productImage}`}
//                   alt="Card Preview"
//                   className="rounded-t-2xl"
//                 />
//               </figure>
//               <div className="flex flex-col p-8">
//                 <div className="text-2xl font-bold  text-center text-[#374151] pb-6">
//                   {allProduct.productName}
//                 </div>
//                 <div className="flex justify-between text-[1.2rem]">
//                   <p>
//                     <span className="font-bold">Brand : </span>{" "}
//                     <span className="bg-purple-200 px-1 rounded-lg">
//                       {allProduct.brand}
//                     </span>
//                   </p>
//                   <p>
//                     <span className="font-bold">Category : </span>
//                     {allProduct.category}
//                   </p>
//                 </div>
//                 <div className=" text-[1.2rem]  text-center text-[#374151] my-4">
//                   {allProduct.description}
//                 </div>
//                 <div className="flex justify-between text-[1.2rem]">
//                   <p>
//                     <span className="font-bold">Rating : </span>{" "}
//                     <span className="">{allProduct.ratings}</span>
//                   </p>
//                   <p>
//                     <span className="font-bold">Price : </span>
//                     <span className="font-semibold"> $ {allProduct.price}</span>
//                   </p>
//                 </div>
//                 <div className="my-4 text-[1.2rem] font-bold">
//                   <p className="">Manufacturer Date : {allProduct.date}</p>
//                 </div>
//                 <div className="flex justify-end pt-6">
//                   <button className="bg-[#7b559c] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
//                     Try it out!
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProducts;

// -----------------------------------------------------

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AllProducts = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     axios
//       .get(`https://e-shop-server-sigma.vercel.app/allProducts?page=${currentPage}&limit=10`)
//       .then((res) => {
//         console.log(res.data);
//         setAllProducts(res.data.products);
//         setTotalPages(res.data.totalPages);
//       });
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handlePriceRange = (e) => {
//     e.preventDefault();
//     const minPrice = e.target.miprice.value;
//     const maxPrice = e.target.maprice.value;
//     console.log(minPrice, maxPrice);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const search = e.target.search.value;

//     console.log(search);
//   };

//   return (
//     <div>
//       {allProducts.length}

//       <div className="flex my-16  gap-5">
//         {/* filter and search */}
//         <div className=" flex gap-5">
//           {/* filter by Brand */}
//           <div className="dropdown dropdown-hover">
//             <div tabIndex={0} role="button" className="btn m-1">
//               Filter By Brand
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
//             >
//               <li>
//                 <a>Walton</a>
//               </li>
//               <li>
//                 <a>Panasonic</a>
//               </li>
//               <li>
//                 <a>Sony</a>
//               </li>
//               <li>
//                 <a>Singer</a>
//               </li>
//             </ul>
//           </div>
//           {/* filter by Category */}
//           <div className="dropdown dropdown-hover">
//             <div tabIndex={0} role="button" className="btn m-1">
//               Filter By Category
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
//             >
//               <li>
//                 <a>AC</a>
//               </li>
//               <li>
//                 <a>Fridge</a>
//               </li>
//               <li>
//                 <a>TV</a>
//               </li>
//               <li>
//                 <a>Washing Machine</a>
//               </li>
//             </ul>
//           </div>
//           {/* filter by Price Range */}
//           <div className="">
//             <form action="" onSubmit={handlePriceRange}>
//               <div className="flex gap-2">
//                 <input
//                   type="number"
//                   placeholder="Min price"
//                   name="miprice"
//                   className="input input-bordered w-32 max-w-xs"
//                 />
//                 <input
//                   type="number"
//                   placeholder="Max price"
//                   name="maprice"
//                   className="input input-bordered w-32 max-w-xs"
//                 />
//                 <button className="btn" type="submit">
//                   Find
//                 </button>
//               </div>
//             </form>
//           </div>
//           {/* search by product name */}
//           <div>
//             <form action="" onSubmit={handleSearch}>
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder="Search Here"
//                   name="search"
//                   className="input input-bordered w-64 max-w-xs"
//                 />
//                 <button className="btn" type="submit">
//                   Search
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Sorting */}
//         <div>
//           {/* Sorting by Price high low */}
//           <div className="dropdown dropdown-hover">
//             <div tabIndex={0} role="button" className="btn m-1">
//               Sort by price
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
//             >
//               <li>
//                 <a>Price high to low</a>
//               </li>
//               <li>
//                 <a>Price low to high</a>
//               </li>
//             </ul>
//           </div>

//           {/* Sorting by date*/}
//           <div className="dropdown dropdown-hover">
//             <div tabIndex={0} role="button" className="btn m-1">
//               Sort by date
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
//             >
//               <li>
//                 <a>Newest first</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Product Card  */}
//       <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-3 md:gap-5 lg:grid lg:grid-cols-4">
//         {allProducts?.map((allProduct) => (
//           <>
//             <div className="flex flex-col rounded-2xl w-96 bg-[#ededed] shadow-xl">
//               <figure className="flex justify-center items-center rounded-2xl">
//                 <img
//                   src={`${allProduct.productImage}`}
//                   alt="Card Preview"
//                   className="rounded-t-2xl"
//                 />
//               </figure>
//               <div className="flex flex-col p-8">
//                 <div className="text-2xl font-bold  text-center text-[#374151] pb-6">
//                   {allProduct.productName}
//                 </div>
//                 <div className="flex justify-between text-[1.2rem]">
//                   <p>
//                     <span className="font-bold">Brand : </span>{" "}
//                     <span className="bg-purple-200 px-1 rounded-lg">
//                       {allProduct.brand}
//                     </span>
//                   </p>
//                   <p>
//                     <span className="font-bold">Category : </span>
//                     {allProduct.category}
//                   </p>
//                 </div>
//                 <div className=" text-[1.2rem]  text-center text-[#374151] my-4">
//                   {allProduct.description}
//                 </div>
//                 <div className="flex justify-between text-[1.2rem]">
//                   <p>
//                     <span className="font-bold">Rating : </span>{" "}
//                     <span className="">{allProduct.ratings}</span>
//                   </p>
//                   <p>
//                     <span className="font-bold">Price : </span>
//                     <span className="font-semibold"> $ {allProduct.price}</span>
//                   </p>
//                 </div>
//                 <div className="my-4 text-[1.2rem] font-bold">
//                   <p className="">Manufacturer Date : {allProduct.date}</p>
//                 </div>
//                 <div className="flex justify-end pt-6">
//                   <button className="bg-[#7b559c] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
//                     Try it out!
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-8">
//         <button
//           className="btn"
//           disabled={currentPage === 1}
//           onClick={() => handlePageChange(currentPage - 1)}
//         >
//           Previous
//         </button>
//         <div className="mx-4">
//           Page {currentPage} of {totalPages}
//         </div>
//         <button
//           className="btn"
//           disabled={currentPage === totalPages}
//           onClick={() => handlePageChange(currentPage + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AllProducts;

// ------------------------------------------------------------


import React, { useEffect, useState } from "react";
import axios from "axios";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    brand: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "",
  });

  useEffect(() => {
    axios
      .get("https://e-shop-server-sigma.vercel.app/allProducts", {
        params: {
          page: currentPage,
          limit: 10,
          ...filters,
        },
      })
      .then((res) => {
        setAllProducts(res.data.products);
        setTotalPages(res.data.totalPages);
      });
  }, [currentPage, filters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    handleFilterChange("search", search);
  };

  const handlePriceRangeSubmit = (e) => {
    e.preventDefault();
    const minPrice = e.target.miprice.value;
    const maxPrice = e.target.maprice.value;
    handleFilterChange("minPrice", minPrice);
    handleFilterChange("maxPrice", maxPrice);
  };

  return (
    <div>
      {/* {allProducts.length} */}

      <div className="flex my-16 gap-5 ">


        {/* filter and search */}
        <div className="grid grid-cols-1 md:flex lg:flex gap-5">
          {/* filter by Brand */}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 text-[1.3rem]">
              Filter By Brand
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {["Walton", "Panasonic", "Sony", "Singer"].map((brand) => (
                <li key={brand} onClick={() => handleFilterChange("brand", brand)}>
                  <a className="text-[1.2rem]">{brand}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* filter by Category */}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 text-[1.3rem]">
              Filter By Category
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {["ac", "fridge", "tv", "washing machine"].map((category) => (
                <li key={category} onClick={() => handleFilterChange("category", category)}>
                  <a className="text-[1.2rem]">{category}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* filter by Price Range */}
          <div className="">
            <form action="" onSubmit={handlePriceRangeSubmit}>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min price"
                  name="miprice"
                  className="input input-bordered w-32 max-w-xs text-[1.3rem]"
                />
                <input
                  type="number"
                  placeholder="Max price"
                  name="maprice"
                  className="input input-bordered w-32 max-w-xs text-[1.3rem]"
                />
                <button className="btn text-[1.3rem]" type="submit">
                  Find
                </button>
              </div>
            </form>
          </div>
          {/* search by product name */}
          <div>
            <form action="" onSubmit={handleSearchSubmit}>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search Here"
                  name="search"
                  className="input input-bordered w-64 max-w-xs text-[1.3rem]"
                />
                <button className="btn text-[1.3rem]" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>



        {/* Sorting */}
        <div>
          {/* Sorting by Price */}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 text-[1.3rem]">
              Sort by price
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li onClick={() => handleFilterChange("sortBy", "priceLowToHigh")}>
                <a className="text-[1.2rem]">Price low to high</a>
              </li>
              <li onClick={() => handleFilterChange("sortBy", "priceHighToLow")}>
                <a className="text-[1.2rem]">Price high to low</a>
              </li>
            </ul>
          </div>

          {/* Sorting by Date */}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 text-[1.3rem]">
              Sort by date
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li onClick={() => handleFilterChange("sortBy", "newest")}>
                <a className="text-[1.2rem]">Newest first</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Card */}
      <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-3 md:gap-5 lg:grid lg:grid-cols-4">
        {allProducts?.map((allProduct) => (
          <div key={allProduct.product_id} className="flex flex-col rounded-2xl w-96 bg-[#ededed] shadow-xl">
            <figure className="flex justify-center items-center rounded-2xl">
              <img
                src={`${allProduct.productImage}`}
                alt="Card Preview"
                className="rounded-t-2xl"
              />
            </figure>
            <div className="flex flex-col p-8">
              <div className="text-2xl font-bold  text-center text-[#374151] pb-6">
                {allProduct.productName}
              </div>
              <div className="flex justify-between text-[1.2rem]">
                <p>
                  <span className="font-bold">Brand : </span>{" "}
                  <span className="bg-purple-200 px-1 rounded-lg">
                    {allProduct.brand}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Category : </span>
                  {allProduct.category}
                </p>
              </div>
              <div className=" text-[1.2rem]  text-center text-[#374151] my-4">
                {allProduct.description}
              </div>
              <div className="flex justify-between text-[1.2rem]">
                <p>
                  <span className="font-bold">Rating : </span>{" "}
                  <span className="">{allProduct.ratings}</span>
                </p>
                <p>
                  <span className="font-bold">Price : </span>
                  <span className="bg-red-200 px-1 rounded-lg">
                    ${allProduct.price}
                  </span>
                </p>
              </div>
              <div className=" text-[1.3rem] font-semibold  text-center text-[#374151] my-4">
                Manufacture Date : {allProduct.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-primary"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`btn ${currentPage === i + 1 ? "btn-secondary" : "btn-primary"}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;

