// 'use client';
import DecliciousCard from "@/components/home/DecliciousCard";
import HandPicked from "@/components/home/HandPicked";
import Hero from "@/components/home/Hero";
import Inbox from "@/components/home/Inbox";
import Latest from "@/components/home/Latest";
import PopularCatCard from "@/components/home/PopularCatCard";
import recipe from '/public/data/recipes.json';

export default function Home ()
{
  const recipes = recipe.filter(
    recipe => recipe.rating && typeof recipe.rating.average_rating === 'number'
  );

  const topRatedRecipes = recipes
    .sort( ( a, b ) =>
    {
      if ( b.rating.average_rating !== a.rating.average_rating )
      {
        return b.rating.average_rating - a.rating.average_rating;
      }
      return a.rating.rating_count - b.rating.rating_count;
    } )
    .slice( 0, 3 );

  // console.log( topRatedRecipes[2] );
  // console.log( recipes[ 0 ] );
  
  const latestRecipes = recipes
    .sort( ( a, b ) =>
    {
      const dateDiff = new Date( b.published_date ) - new Date( a.published_date );
      if ( dateDiff !== 0 )
      {
        return dateDiff;
      }
      // If dates are the same, prioritize by rating_count
      return ( b.rating?.rating_count || 0 ) - ( a.rating?.rating_count || 0 );
    } )
    .slice( 0, 4 );

  // console.log( typeof latestRecipes[0].title );
  
  return (
    <div className="container mx-auto px-4 mt-[100px]">
      <Hero />

      {/* Super Delicious */ }
      <div className="mb-16" id="super_delicious">
        <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {
            topRatedRecipes?.map( ( data, index ) => (
              <DecliciousCard key={index} data={data}/>
            ))
          }
        </div>
      </div>

      {/* Popular Category Section */ }
      <PopularCatCard />

      {/* Inbox */ }
      <Inbox />

      {/* Hand-picked Collection */ }
      <HandPicked handPickedOne={ topRatedRecipes[0] } handPickedTwo={topRatedRecipes[1]} />

      {/* Latest Recipe */ }
      <Latest data={ latestRecipes } />
    </div>
  );
}