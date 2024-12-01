import Link from "next/link";
import Cat from "./Cat";
import categoryData from '/public/data/categories.json';
import recipeData from '/public/data/recipes.json';

export default function PopularCatCard ()
{
    const categoryCount = recipeData.reduce( ( acc, recipe ) =>
    {
        acc[ recipe.category_id ] = ( acc[ recipe.category_id ] || 0 ) + 1;
        return acc;
    }, {} );

    const topPopularData = categoryData
        .map( ( category ) => ( {
            ...category,
            popularity: categoryCount[ category.id ] || 0,
        } ) )
        .sort( ( a, b ) => b.popularity - a.popularity )
        .slice( 0, 6 );

    // console.log( topPopularData.length );
    return (
        <section className="mb-16">
            <div className="flex justify-between items-top">
                <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
                <Link href="/category" className="text-orange-500">View All</Link>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {
                    topPopularData?.map( ( data ) => (
                        <Cat key={data.id} data={data}/>
                    ))
                }
            </div>
        </section>
    );
}
