import * as model from'./model.js';

import { MODAL_CLOSE_SEC } from './config.js';

import recipeView from './views/recipeView.js';

import searchView from './views/searchView.js';

import resultsview from './views/resultsview.js';

import BookmarksView from './views/bookmarksView.js';

import addRecipeView from './views/addRecipeView.js';

import PaginationView from './views/pagination.js';

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

    //upadating recipeview
    resultsView.update(model.getSearchResultsPage());

    // 1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);


////loading recipe
    await model.loadRecipe(id);
   // const {recipe} = model.state;

     
//rendering recipe
//recipeView.render(model.state.results)
resultsview.render(model.getSearchResultsPage());



PaginationView.render(model.state.search);
              
  } catch(err){
    alert(err)
    recipeView.renderError();
  }

}
controlSearchRecipe();
//const controlPagination = function (goToPage){

//}

const controlSearchResults = async function() {

  try{
    const query =searchView.getQuery();
      if(!query) return;

await model.loadSearchResults('query');

  }catch(err){
    console.log(err)
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function  (newServings){
  //update recipe servings
recipe.update(model.updateServings(newServings));
  //update recipe view

  const controlAddBookmark = function (){
    if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
    
  else model.deleteBookmark(model.state.recipe.id);

    
    //console.log(model.state.recipe);

    //updating recipeView
    //recipeView.update(model.state.recipe);

    //rendering the bookmarks

    bookmarksView.render(model.state.bookmarks);
  };
  const controlBookmarks = function () {
    bookmarksView.render(model.state.bookmarks);
  };
  
  const controlAddRecipe = async function (newRecipe) {

        // Upload the new recipe data

        try{

           // loading spinner
    addRecipeView.renderSpinner();


        await model.uploadRecipe(newRecipe);
        console.log(model.state.recipe);

      // Success message
    addRecipeView.renderMessage();


       //render bookmark view
        recipeView.render(model.state.bookmarks);

      // Change ID in URL
        window.history.pushState(null, '', `#${model.state.recipe.id}`);

        setTimeout(function () {
          addRecipeView.toggleWindow();
        }, MODAL_CLOSE_SEC * 1000);

      } catch (err) {
        console.error('💥', err);
        
      }

  }
}


const init = function() {
 bookmarksView.addHandlerRender(controlBookmarks);
recipeView.addHandlerRender(controlRecipes )
recipeView.addHandlerUpdateServings(controlServings);
recipeView.addHandlerAddBookmark(controlAddBookmark);
searchView.addHandlerSearch(controlSearchResults);
paginationView.addHandlerClick(controlPagination);

}
init()