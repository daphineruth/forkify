import { async } from 'regenerator-runtime';
import { getJSON } from './helpers.js';
import { API_URL } from './config.js';
import { search } from 'core-js/fn/symbol';
import { state } from '../../../starter fle/complete-javascript-course/18-forkify/final/src/js/model.js';
 export const view = {
    recipe: {},
    search: {
        query: '',
        results: []
    },

};

export const loadRecipe = async function(id){
    try{
        const data = await getJSON(`${API_URL}/${id}>`);
    
    
    const { recipe } = data.data;

   // let (recipe) = data.data;

    state.recipe = {
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
     }
 })
    }
    catch(err)
    {
        console.log(err);
        throw err;
       
    }
}
 //loadSearchResults('pizza')
 export const getSearchResultsPage = function(page)
 {  
     const start = (page - 1)* 10;//0;
     const end  =page * 10; //9;

     return state.search.results.slice(start, end);
 }
