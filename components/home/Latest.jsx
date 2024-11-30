import LatestCard from "./LatestCard";

export default function Latest({data}) {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {
                    data?.map( ( d, i ) => (
                        <LatestCard key={ i } data={ d } />
                    ) )
                }
            </div>
        </section>
    );
}
