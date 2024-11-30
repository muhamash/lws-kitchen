import HandPickedCrad from './HandPickedCrad';

export default function HandPicked({handPickedOne, handPickedTwo}) {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">Hand-Picked Collections</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <HandPickedCrad data={handPickedOne } />
                <HandPickedCrad data={ handPickedTwo } />
            </div>
        </section>
    );
}
