'use client'

import Image from 'next/image';
// import RecipeImage from '/public/assets/thumbs/thumb-10.jpg';
import { useRouter } from 'next/navigation';
import CategoryData from '/public/data/categories.json';

export default function RecipeCard ( { data } )
{
    const categoryName = CategoryData?.find( cat => cat.id === data?.category_id )?.name;
    // console.log( categoryName, CategoryData, data );
    const router = useRouter()
    const RecipeImage = `/assets/thumbs/${data.thumbnail}`
    return (
        <div
            onClick={() => router.push(`/${categoryName}/${data.title}`)}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow transition-all duration-200 cursor-pointer">
            <Image src={ RecipeImage } width={ 100 } height={ 100 } alt="Decadent Raspberry and Cream Cake"
                className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{ data.title }</h2>
            </div>
        </div>
    );
}
