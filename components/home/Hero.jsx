import Image from "next/image";
import Link from "next/link";
import CategoryData from '/public/data/categories.json';
import recipe from '/public/data/recipes.json';

export default function Hero ()
{
    const heroImage = `/assets/thumbs/${recipe[ 1 ].thumbnail}`;
    const categoryName = CategoryData?.find(cat => cat.id === recipe[ 1 ].category_id)?.name;

    return (
        <section className="mb-16 bg-orange-50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <Image alt={ "hero" } src={ heroImage } className="w-full h-[450px] object-cover rounded-lg hover:scale-105 transition-all duration-200" width={200} height={200}/>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">{recipe[1].title}</h1>
                    <p className="text-gray-600 mb-4">
                        {recipe[1].description}
                    </p>
                    <Link href={`/${categoryName}/${recipe[1].title}`}
                        className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600">View Recipe</Link>
                </div>
            </div>
        </section>
    );
}
