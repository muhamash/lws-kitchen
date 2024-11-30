'use client'
import RecipeCard from "@/components/recipe/RecipeCard";
import { useParams } from "next/navigation";
import CategoryData from '/public/data/categories.json';
import recipe from '/public/data/recipes.json';

export default function Recipes ()
{
    const params = useParams();
    const findRecipes = recipe.filter( ( r ) => r.category_id === params.category );
    // console.log( findRecipes );
    const categoryName = CategoryData?.find( cat => cat.id === params.category )?.name;

    return (
        <div className="container mx-auto px-4 py-8 mt-[100px]">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2">
                       {categoryName} <span className="text-gray-500 text-2xl font-normal">({findRecipes.length})</span>
                    </h1>
                    <p className="text-gray-600">
                        One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here
                        is a recipe I created after having this dish in a restaurant. Enjoy!
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    findRecipes.map( ( r, i ) => (
                        <RecipeCard key={ i } data={ r } />
                    ))
                }
                {
                    findRecipes.length === 0 && (<p>no data left!!!</p>)
                }
            </div>
        </div>
    );
}