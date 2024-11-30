'use client';

import Article from "@/components/view/Article";
import { useParams } from "next/navigation";
import recipe from '/public/data/recipes.json';

export default function RecipePage ()
{
  const params = useParams();
  const decodedRecipeTitle = decodeURIComponent( params.recipe ); 
  
  const data = recipe.find( ( r ) => r.title === decodedRecipeTitle );
  // console.log(decodedRecipeTitle); 
  return (
    <div className="container mx-auto px-4 py-10 mt-10">
      <Article data={ data } />
          <div className="my-12">
              <h2 className="text-3xl font-bold mb-8">You might also like</h2>
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <LatestCard /> 
                  <LatestCard /> 
                  <LatestCard/> 
                  <LatestCard/> 
              </div> */}
          </div>
    </div>
  )
}
