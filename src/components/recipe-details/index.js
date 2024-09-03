import Link from 'next/link';

export default function RecipeDetailsItem({getRecipeDetails}){
  
    return (
    <>
    <Link className="flex items-center justify-center" href={'/'}>Go Back to Home</Link>
    <div className="p-6 lg:max-6xl max-w-2xl mx-auto">
    <div className="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
    <div className="w-full lg:sticky top-0 sm:flex gap-2">
    <img src={getRecipeDetails?.image} 
    name={getRecipeDetails?.name} 
    className="w-4/5 rounded object-cover"
    />
    </div>
    <div>
        <h2 className="text-3xl font-extrabold text-gray-950">{getRecipeDetails?.name}</h2>
        <div className="flex flex-wrap gap-4 mt-5">
            <p className="text-2xl text-gray-800">{getRecipeDetails?.mealType[0]}</p>

        </div>
        <div className="mt-5">
           <p className="text-xl text-gray-800">{getRecipeDetails?.cuisine}</p> 
        </div>
        <div className="mt-5">
            <h3 className="text-lg font-bold text-gray-800">Ingredients of foods</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                {getRecipeDetails?.ingredients.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
              </ul>
        </div>
    </div>
    </div>
    </div>
    </>
    )
}