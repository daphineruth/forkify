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
        const res = await fetch('https://tasty.p.rapidapi.com/recipes/auto-complete');
        const data = await res.json();
        if (res.ok) throw new Error(`${data.message} (${res.status})`);
        console.log(res, data);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
