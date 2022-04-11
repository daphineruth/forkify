import * as model from'./model.js'

import recipeView from './views/recipeView.js';

import searchView from './views/searchView.js';

import resultsview from './views/resultsview.js';

//import icons  from '../img/icons.svg';//parcel 1

//import icons  from 'url:../img/icons.svg';// parcel 2

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if(module.hot) {
  module.hot.accept();
}

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2



//Loading recipe
const controlRecipes= async function() {

  try{
  resultsview.renderSpinner
    const id = window.location.hash.slice(1);
    console.log(id);
    
    if(!id) return;
    recipeView.renderSpinner();

////loading recipe
    await model.loadRecipe(id);
   // const {recipe} = model.state;

     
//rendering recipe
recipeView.render(model.state.recipe)




              
  } catch(err){
    alert(err)
    recipeView.renderError();
  }

}

const controlSearchResults = async function() {

  try{
    const query =searchView.getQuery();
      if(!query) return;

await model.loadSearchResults('query');

  }catch(err){
    console.log(err)
  }
}
controlSearchRecipe();

const init = function() {
recipeView.addHandlerRender(controlRecipes )
searchView.addHandlerSearch(controlSearchResults);
}
init()