import Image from "next/image";
import HeaderImage from "../public/assets/lws-kitchen.png";

export default function Header() {
    return (
        <header className="container mx-auto px-4 py-4 shadow-lg fixed top-0 left-0 right-0 bg-white z-50">
            <nav className="flex justify-between items-center">
                <a href="/index.html" className="text-3xl font-bold">
                    {/* <img src="./assets/lws-kitchen.png" className="h-10" /> 
                    */}
                    <Image src={ HeaderImage } alt={ "header" } className="h-10 w-fit" />
                </a>
                <ul className="hidden md:flex space-x-6">
                    <li><a href="./index.html" className="hover:text-orange-500">Home</a></li>
                    <li><a href="./category.html" className="hover:text-orange-500">Categories</a></li>
                    <li><a href="./recipes.html" className="hover:text-orange-500">Latest Recipes</a></li>
                </ul>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </a>
                </div>
            </nav>
        </header>
    );
}
