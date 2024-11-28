import LatestCard from "./LatestCard";

export default function Latest() {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
            <div className="grid md:grid-cols-4 gap-8">
                <LatestCard/>
                <LatestCard/>
            </div>
        </section>
    );
}
