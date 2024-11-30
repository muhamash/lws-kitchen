'use client'
 
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Cat ( { data } )
{
    const router = useRouter()
    const categoryImage = `/assets${data?.image}`;

    //  console.log( categoryImage );
    return (
        <div onClick={() => router.push(`/${data.name}/recipes`)} className="cursor-pointer text-center group">
            <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto relative">
                <Image
                    src={categoryImage}
                    alt={categoryImage}
                    height={ 100 }
                    width={100}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <p className="transition-transform duration-300 group-hover:scale-105">{ data.name }</p>
        </div>
    );
}