const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
//fetching API
const showRecipe = async function() {
    try {
        const res = await fetch(' https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>');
        const data = await res.json();
        if (res.ok) throw new Error(`${data.message} (${res.status})`);
        console.log(res, data);
        let(recipe) = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.sourceUrl,
            Image: recipe.Image_url,
            serving: recipe.serving,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(recipe);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
