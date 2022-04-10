import * as model from'./model.js'

import recipeView from './views/recipeView.js';

//import icons  from '../img/icons.svg';//parcel 1

//import icons  from 'url:../img/icons.svg';// parcel 2

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2



//Loading recipe
const controlRecipes= async function() {

  try{

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
  }

}
const init = function() {
recipeView.addHandlerRender(controlRecipes )
}
init()