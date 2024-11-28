import LatestCard from "@/components/home/LatestCard";
import Article from "@/components/view/Article";

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
          <Article />
          <div className="my-12">
              <h2 className="text-3xl font-bold mb-8">You might also like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <LatestCard /> 
                  <LatestCard /> 
                  <LatestCard/> 
                  <LatestCard/> 
              </div>
          </div>
    </div>
  )
}
