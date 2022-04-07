const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

//Loading recipe
const showRecipe= async function() {

  try{
     const res = await fetch(' https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc971>'
     );
     const data = await res.json();

     if (res.ok) throw new Error(`${data.message} (${res.status})`);
       
     
     console.log (res, data);
     let (recipe) = data.data;
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
//rendering recipe
const markup = `<figure class="recipe__fig">
<img src="src/img/test-1.jpg" alt="Tomato" class="recipe__img" />
<h1 class="recipe__title">
  <span>Pasta with tomato cream sauce</span>
</h1>
</figure>

<div class="recipe__details">
<div class="recipe__info">
  <svg class="recipe__info-icon">
    <use href="src/img/icons.svg#icon-clock"></use>
  </svg>
  <span class="recipe__info-data recipe__info-data--minutes">45</span>
  <span class="recipe__info-text">minutes</span>
</div>
<div class="recipe__info">
  <svg class="recipe__info-icon">
    <use href="src/img/icons.svg#icon-users"></use>
  </svg>
  <span class="recipe__info-data recipe__info-data--people">4</span>
  <span class="recipe__info-text">servings</span> 
  <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="src/img/icons.svg#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>
        
        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">1000</div>
              <div class="recipe__description">
                <span class="recipe__unit">g</span>
                pasta
              </div>
            </li>

            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">0.5</div>
              <div class="recipe__description">
                <span class="recipe__unit">cup</span>
                ricotta cheese
              </div>
              </li>
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`


  } catch(err){
    alert(err)
  }

}
showRecipe();