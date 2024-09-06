import RecipeDetailsItem from '@/components/recipe-details'

async function fetchRecipeDetails(id){
    try{
         const apiResponse=await fetch(`http://dummyjson.com/recipe/${id}`);
         const data=await apiResponse.json();
         return data;
    }
    catch(error){
        throw new Error("error on fetching recipe of foods and drinks from url:"+error.message)
    }
}

const RecipeDetails= async({params}) => {
    const getRecipeDetails=await fetchRecipeDetails(params?.details);

  return (

      <RecipeDetailsItem getRecipeDetails={getRecipeDetails}/>
    
  )
}

export default RecipeDetails;

