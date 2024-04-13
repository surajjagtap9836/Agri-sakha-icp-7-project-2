 //dark and light mode
 
 function darkMode(){
  const imgDark = document.getElementById(`img-dark`);
  imgDark.classList.add(`active`);

  const imgLight= document.getElementById(`img-light`);
  imgLight.classList.remove(`active`);

  const bodyElement=document.getElementById("body");
  bodyElement.className=`theme-dark`;
}
function lightMode(){
  const imgDark= document.getElementById(`img-dark`);
  imgDark.classList.remove(`active`);

  const imgLight=  document.getElementById(`img-light`);
  imgLight.classList.add(`active`);

  const bodyElement=document.getElementById(`body`);
  bodyElement.className=`theme-light`;

}
  // increament - decriment

  // card-1
  const quantityText = document.getElementById("quantity-text");
    
  const showQuantity = document.getElementById("show-quantity");

  const showTotal = document.getElementById("show-total");

  let quantity = parseInt(quantityText.innerText);

      function inc(){
          
          if(quantity<=5)
          {
              quantityText.innerText = ++quantity
          }
          else
          {
              alert("You have met offer for 25%")
          }
  
          showQuantity.innerText = `${quantity}*489`;
          showTotal.innerText = `Total : ${quantity*489}`;
      }
      function dec(){
          
  
          if(quantity>1)
          {
              quantityText.innerText = --quantity
          }
          else
          {
              alert("You have met not offer for 1 product")
      }
  
          showQuantity.innerText = `${quantity}*489`;
          showTotal.innerText = `Total : ${quantity*489}`;
  }

  // card-2
