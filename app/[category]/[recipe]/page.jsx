'use client';
import Article from "@/components/view/Article";
import ViewCard from "@/components/view/ViewCard";
import { useParams } from "next/navigation";
import recipe from '/public/data/recipes.json';

export default function RecipePage() {
  const params = useParams();
  const decodedRecipeTitle = decodeURIComponent( params.recipe ); 
  
  const data = recipe.find((r) => r.title === decodedRecipeTitle);
  const likeRecipe = recipe.filter(r => r.category_id === data.category_id);

  const popularRecipe = likeRecipe
    .filter(r => r.title !== data.title) // skip recipes with the same title
    .sort((a, b) => {
      if (b.rating.average_rating !== a.rating.average_rating) {
        return b.rating.average_rating - a.rating.average_rating;
      }
      return a.rating.rating_count - b.rating.rating_count;
    })
    .slice( 0, 4 );
  
  const mapRecipe = recipe.map( ( r ) => r.category_id )
  console.log(mapRecipe.length)

  return (
    <div className="container mx-auto px-4 py-10 mt-10">
      <Article data={data} />
      <div className="my-12">
        <h2 className="text-3xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popularRecipe.length !==0 && popularRecipe.map((data, i) => (
            <ViewCard key={i} data={data} />
          ))}
          {popularRecipe.length === 0 && (
            <p className="text-md text-rose-700">Sorry, there are no remaining recipes!</p>
          )}
        </div>
      </div>
    </div>
  );
}