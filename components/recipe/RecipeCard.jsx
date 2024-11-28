import Image from 'next/image';
import RecipeImage from '../../assets/thumbs/thumb-10.jpg';

export default function RecipeCard() {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow transition-all duration-200 cursor-pointer">
            <Image src={ RecipeImage } alt="Decadent Raspberry and Cream Cake"
                className="w-full h-48 object-cover" height={ 192 }/>
            <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">Decadent Raspberry and Cream Cake</h2>
            </div>
        </div>
    );
}
