import Cat from "@/components/home/Cat";

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8 mt-[100px]">
          <h1 className="text-5xl font-bold mb-12">Categories</h1>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <Cat/>
          </div>
    </div>
  )
}