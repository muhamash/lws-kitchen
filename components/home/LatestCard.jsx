'use client'
 
import Image from "next/image";
import { useRouter } from 'next/navigation';
import CategoryData from '/public/data/categories.json';

export default function LatestCard ( { data } )
{
    const categoryName = CategoryData?.find(cat => cat.id === data.category_id)?.name;
    const router = useRouter()
    // console.log(categoryName, data)
    const ImageSrc = `/assets/thumbs/${data.thumbnail}`
    return (
        <div
            onClick={() => router.push(`/${categoryName}/${data.title}`)}
            className='hover:shadow-md hover:border-[0.7px] hover:border-violet-500 p-2 hover:bg-slate-50 rounded-md transition-all duration-200 cursor-pointer'>
            <Image
                src={ImageSrc}
                alt="Strawberry Cream" className="w-full h-[300px] object-cover rounded-lg mb-4 hover:scale-90 transition-all duration-200 cursor-pointer shadow-md" height={300} width={300}/>
            <h3 className="text-lg font-semibold mb-2">{ data.title }</h3>
            <p className="text-gray-600">{ categoryName }</p>
        </div>
    );
}
