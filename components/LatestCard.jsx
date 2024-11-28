import Image from 'next/image';

export default function LatestCard() {
    return (
        <div>
            <Image
                src="https://images.unsplash.com/photo-1559564121-d12c8f29e8cd?q=100&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Strawberry Cream" className="w-full h-[300px] object-cover rounded-lg mb-4 hover:scale-90 transition-all duration-200 cursor-pointer shadow-md" height={300} width={300}/>
            <h3 className="text-lg font-semibold mb-2">Strawberry Cream</h3>
            <p className="text-gray-600">Dessert</p>
        </div>
    );
}
