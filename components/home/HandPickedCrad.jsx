'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import CategoryData from '/public/data/categories.json';

export default function HandPickedCrad ( { data } )
{
    const ImageSrc = `/assets/thumbs/${data.thumbnail}`
    const router = useRouter()
    const categoryName = CategoryData?.find(cat => cat.id === data.category_id)?.name;

    return (
        <div
            onClick={() => router.push(`/${categoryName}/${data.title}`)}
            className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
            <Image
                src={ImageSrc}
                alt="Everything Bagel"
                height={ 400 }
                width={300}
                className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
            <div
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <h3 className="text-xl font-semibold mb-2">{ data.title }</h3>
                <a href="./recipes.html" className="text-orange-300 hover:underline">View Collection</a>
            </div>
        </div>
    );
}
