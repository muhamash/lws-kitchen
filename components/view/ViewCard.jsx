'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import CategoryData from '/public/data/categories.json';

export default function ViewCard ( { data } )
{
  const router = useRouter()
  const categoryName = CategoryData?.find( cat => cat.id === data.category_id )?.name;
  
  return (
    <div
      onClick={() => router.push(`/${categoryName}/${data.title}`)}
      className="bg-slate-100 p-2 rounded-md shadow-sm border-[1px] border-slate-200 cursor-pointer">
      <Image src={`/assets/thumbs/${data.thumbnail}`} alt="Recipe" class="w-full h-60 object-cover rounded-lg mb-2" height={100} width={100}/>
      <h3 class="font-semibold">{ data.title }</h3>
    </div>
  );
}
