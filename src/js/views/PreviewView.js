import View from "./View";

import icons  from 'url:../../img/icons.svg';

class PreviewView extends View  {

    _parentElement = ''
    
  

 
_generateMarkupPreview() {
  const id = window.location.hash.slice(1);
    return`
    <li class="preview">
<a class="preview__link preview__link
${result.id === id ? ' preview__link--active':''}" href="${results.id}">
  <figure class="preview__fig">
    <img src="${results.image}" alt=">${results.title}" />
  </figure>
  <div class="preview__data">
    <h4 class="preview__title">${results.title}</h4>
    <p class="preview__publisher">${results.publisher}</p>
   
  </div>
</a>
</li>
`
}
};

export default new PreviewView();