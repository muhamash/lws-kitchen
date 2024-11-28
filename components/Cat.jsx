import Image from "next/image";

export default function Cat() {
    return (
        <div className="cursor-pointer text-center group">
            <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto relative">
                <Image
                    src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Breakfast"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <p className="transition-transform duration-300 group-hover:scale-105">Breakfast</p>
        </div>
    );
}