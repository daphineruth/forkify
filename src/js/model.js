 export const view = {
    recipe: {}
};

export const loadRecipe = async function(){
    const res = await fetch(` https://forkify-api.herokuapp.com/api/v2/recipes/${id}>`
    );
    const data = await res.json();

    if (res.ok) throw new Error(`${data.message} (${res.status})`);
      
    
    console.log (res, data);

   // let (recipe) = data.data;

    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      Image: recipe.Image_url,
      serving: recipe.serving,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }
console.log(recipe)
}