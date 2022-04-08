import * as model from'./model.js'

import recipeView from './views/recipeView.js';

//import icons  from '../img/icons.svg';//parcel 1
import icons  from 'url:../img/icons.svg';// parcel 2
import 'core-js/stable';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

const renderSpinner = function(parentEl) {
  const markup = `
  <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}

//Loading recipe
const showRecipe= async function() {

  try{

    const id = window.location.hash.slice(1);
    console.log(id);
    
    if(!id) return;
    renderSpinner(recipeContainer);

////loading recipe
    await model.loadRecipe(id);
    const {recipe} = model.state;

     
//rendering recipe
recipeView.render(model.state.recipe)




              
  } catch(err){
    alert(err)
  }

}
['hashChange', 'load'].forEach(ev => window.addEventListener (ev,showRecipe)
  
);
//window.addEventListener('hashChange', showRecipe);
//window.addEventListener('load', showRecipe)