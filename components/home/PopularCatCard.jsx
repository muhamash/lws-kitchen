import Cat from "./Cat";

export default function PopularCatCard() {
    return (
        <section className="mb-16">
            <div className="flex justify-between items-top">
                <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
                <a href="./category.html" className="text-orange-500">View All</a>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                <Cat />
                <Cat />
                <Cat />
                <Cat />
                <Cat />
            </div>
        </section>
    );
}
