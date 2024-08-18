import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
            <h1 className="text-5xl font-bold leading-none text-center text-violet-600">
              This is Home Page
            </h1>
            <p className="text-[3rem] font-medium text-center text-red-500">
              I have completed the required functionality for assignment in{" "}
              <br /> <Link to={'/allProducts'}><span className=" text-white bg-red-500 py-1 px-10 rounded-lg">All Products</span></Link> page. <br />
              The home page is currently empty and will be designed after I
              receive the assignment mark.
            </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <Link to={'/allProducts'}><button className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">
                {" "}
                All Products{" "}
              </button></Link>
              <button className="px-8 py-3 text-lg font-normal border rounded bg-gray-800 text-gray-50 dark:border-gray-700">
                {" "}
                Contact
              </button>
            </div>
          </div>
        </section>
      </div> */}


<section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
		<p rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src="https://i.ibb.co/3vjR3Lx/1-Walton-Tv.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Choosing the Perfect TV</h3>
				<span className="text-lg dark:text-gray-600">February 19, 2021</span>
				<p className="py-10 text-xl">Discover key tips and features to consider when selecting your next TV, ensuring the perfect viewing experience.</p>
                <Link to={'/allProducts'}><p className="font-bold py-3 px-6 text-2xl bg-red-500 text-white rounded-md">See All Products</p></Link>
            </div>
		</p>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/WpWfQvY/10-Panasonic-Tv.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Ultimate TV Buying Guide: What to Know</h3>
					<span className="text-lg dark:text-gray-600">January 21, 2021</span>
					<p className="text-xl">Explore essential factors like screen size, resolution, and smart features to find the ideal TV that meets your entertainment needs and fits perfectly in your living space."

</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/Zcd9wMm/7-Singer-Tv.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How to Choose the Best TV for Your Home</h3>
					<span className="text-lg dark:text-gray-600">January 22, 2021</span>
					<p className="text-xl">Unlock the secrets to buying the perfect TV by understanding the latest technologies, display types, and connectivity options for an immersive viewing experience</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/0mbtJ0H/8-Panasonic-Tv.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Essential Tips for Buying a New TV</h3>
					<span className="text-lg dark:text-gray-600">January 23, 2021</span>
					<p className="text-xl">Make an informed decision on your next TV purchase with tips on picture quality, sound systems, and budget-friendly options for every home.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/Lpp6kgm/1-Walton-Washing.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Washing Machine Key Features to Consider</h3>
					<span className="text-lg dark:text-gray-600">January 24, 2021</span>
					<p className="text-xl">Learn how to select the perfect washing machine by exploring important features like capacity, energy efficiency, and washing programs for hassle-free laundry..</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/X8nYbhX/1-Walton-Fridge.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How to Choose the Perfect Fridge for Your Home</h3>
					<span className="text-lg dark:text-gray-600">January 25, 2021</span>
					<p className="text-xl">Find the ideal fridge for your kitchen by considering factors like size, energy efficiency, and advanced features to keep your food fresh and organized.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/WkhD2fr/1-Walton-AC.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Selecting the Right Air Conditioner</h3>
					<span className="text-xs dark:text-gray-600">January 26, 2021</span>
					<p> Discover how to select the best air conditioner by evaluating key features like cooling capacity, energy efficiency, and smart controls to ensure a comfortable and cost-effective environment.</p>
				</div>
			</a>
		</div>
		<div className="flex justify-center">
        <Link to={'/allProducts'}><p className="py-3 px-6 text-2xl bg-red-500 text-white rounded-md">See All Products</p></Link>
		</div>
	</div>
</section>
    </div>
  );
};

export default Home;
