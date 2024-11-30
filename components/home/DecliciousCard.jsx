'use client'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import CategoryData from '/public/data/categories.json';
// import DeliciousImage from "/public/assets/thumbs/thumb-10.jpg";

export default function DecliciousCard ( { data } )
{
    const DeliciousImage = `/assets/thumbs/${data.thumbnail}`;
    const router = useRouter();
    const categoryName = CategoryData?.find(cat => cat.id === data.category_id)?.name;
    // console.log(data.rating.average_rating)
    return (
        <div
            onClick={() => router.push(`/${categoryName}/${data.title}`)}
            className="hover:bg-slate-100 hover:shadow-md hover:shadow-black/30 duration-200 cursor-pointer transition-all hover:border-[1px] p-2 rounded-md border-green-600">
            <Image src={ DeliciousImage } width={ 200 } height={ 200 } alt="Chicken Meatball with Creamy Cheese"
                className="w-full h-[300px] object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{ data.title }</h3>
            <div className="flex items-center text-yellow-500 mb-2">
                <Rating
                    style={ { maxWidth: 150 } }
                    value={ data.rating.average_rating }
                    readOnly
                />
            </div>
            <p className="text-gray-600">{ data.cooking_time }</p>
        </div>
    );
}