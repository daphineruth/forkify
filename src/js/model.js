import { async } from 'regenerator-runtime';
import { getJSON } from './helpers.js';
import { API_URL , RES_PER_PAGE, KEY} from './config.js';
import { search } from 'core-js/fn/symbol';
import { sendJSON } from './helpers.js';
import { state } from '../../../starter fle/complete-javascript-course/18-forkify/final/src/js/model.js';
 export const view = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page:1,
        resultsPerPage : RES_PER_PAGE,
    },

bookmarks: [],
};


    
    const createRecipeObject = function (data) {
            
            
    const { recipe } = data.data;


   // let (recipe) = data.data;
   return{

    
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      Image: recipe.Image_url,
      serving: recipe.serving,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    },
} 
export const loadRecipe = async function(id){
    try{
        const data = await getJSON(`${API_URL}/${id}>`);
    
    if (state.bookmarks.some(bookmark => bookmark.id === id))
    state.recipe.bookmarked = true;
  else state.recipe.bookmarked = false;

    //console.log(recipe)

} catch(err){
    console.log(err);
    throw err;
}
}
export const loadSearchResults = async function (query) {
    try{
        state.search.query = query;
 const data = await JSON (`${API_URL}?search = ${query}`)
 console.log(data);
 state.search.results = data.data.recipe.map(rec =>{
     return {
     id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      Image: recipe.Image_url
     };
     
 });

    
    state.search.page = 1;
 } catch(err)
    {
        console.log(err);
        throw err;
       
    }
}
 //loadSearchResults('pizza')
 export const getSearchResultsPage = function(page = state.search.page ) {

 state.search.page = page;
  
     const start = (page - 1)* state.search.resultsPerPage;//0;
     const end  =page * state.search.resultsPerPage; //9;

     return state.search.results.slice(start, end);
 };
 export const updateServings = function (newServings){
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
        
 });
 state.recipe.servings = newServings;
};

const persistBookmarks = function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
  };
  

export const addBookmark = function (recipe) {
    // Add bookmark
    state.bookmarks.push(recipe);
  
    // Mark current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmarks();
};
export const deleteBookmark = function (id) {
    // Delete bookmark
    const index = state.bookmarks.findIndex(el => el.id === id);
    state.bookmarks.splice(index, 1);
    if (id === state.recipe.id) state.recipe.bookmarked = false; 

   persistBookmarks()
                   
};  
const init = function () {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage);
  };
  init();
   
  export const uploadRecipe = async function (newRecipe) {
     try{
      const ingredients = Object.entries(newRecipe)
        .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
        .map(ing => {
          const ingArr = ing[1].split(',').map(el => el.trim());

          if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient fromat!  :)'
          );

          return { quantity: quantity ? +quantity : null, unit, description };
      });
    
      const recipe = {
        title: newRecipe.title,
        source_url: newRecipe.sourceUrl,
        image_url: newRecipe.image,
        publisher: newRecipe.publisher,
        cooking_time: +newRecipe.cookingTime,
        servings: +newRecipe.servings,
        ingredients,
      };
      const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);

    } catch (err) {
        throw err;
      } 
  }