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
  function inc(){
    const quantityText = document.getElementById("quantity-text");

    const showQuantity = document.getElementById("show-quantity");

    const showTotal = document.getElementById("show-total");

  let quantity = parseInt(quantityText.innerText);
          
          if(quantity<=5)
          {
              quantityText.innerText = ++quantity
          }
          else
          {
              alert("you can't add more than 6 items....")
          }
  
          showQuantity.innerText = `${quantity}*489`;
          showTotal.innerText = `Total : ${quantity*489}`;
      }
      
      function dec(){
        const quantityText = document.getElementById("quantity-text");

        const showQuantity = document.getElementById("show-quantity");

        const showTotal = document.getElementById("show-total");

        let quantity = parseInt(quantityText.innerText);

  
          if(quantity>1)
          {
              quantityText.innerText = --quantity
          }
          else
          {
              alert("you can't add less than 1 items....")
      }
  
          showQuantity.innerText = `${quantity}*489`;
          showTotal.innerText = `Total : ${quantity*489}`;
  }

  // card-2

  function inc2(){
    const quantityText = document.getElementById("quantity-text-2");

    const showQuantity = document.getElementById("show-quantity-2");

    const showTotal = document.getElementById("show-total-2");

  let quantity = parseInt(quantityText.innerText);
          
          if(quantity<=5)
          {
              quantityText.innerText = ++quantity
          }
          else
          {
              alert("you can't add more than 6 items....")
          }
  
          showQuantity.innerText = `${quantity}*199`;
          showTotal.innerText = `Total : ${quantity*199}`;
      }
      
      function dec2(){
        const quantityText = document.getElementById("quantity-text-2");

        const showQuantity = document.getElementById("show-quantity-2");

        const showTotal = document.getElementById("show-total-2");

        let quantity = parseInt(quantityText.innerText);

  
          if(quantity>1)
          {
              quantityText.innerText = --quantity
          }
          else
          {
              alert("you can't add less than 1 items....")
      }
  
          showQuantity.innerText = `${quantity}*199`;
          showTotal.innerText = `Total : ${quantity*199}`;
  }

// card-3

function inc3(){
  const quantityText = document.getElementById("quantity-text-3");

  const showQuantity = document.getElementById("show-quantity-3");

  const showTotal = document.getElementById("show-total-3");

let quantity = parseInt(quantityText.innerText);
        
        if(quantity<=5)
        {
            quantityText.innerText = ++quantity
        }
        else
        {
            alert("you can't add more than 6 items....")
        }

        showQuantity.innerText = `${quantity}*691`;
        showTotal.innerText = `Total : ${quantity*691}`;
      }

      function dec3(){
        const quantityText = document.getElementById("quantity-text-3");

        const showQuantity = document.getElementById("show-quantity-3");

        const showTotal = document.getElementById("show-total-3");

        let quantity = parseInt(quantityText.innerText);

  
          if(quantity>1)
          {
              quantityText.innerText = --quantity
          }
          else
          {
              alert("you can't add less than 1 items....")
      }
  
          showQuantity.innerText = `${quantity}*691`;
          showTotal.innerText = `Total : ${quantity*691}`;
  }

  // cadr 4

  function inc4(){
    const quantityText = document.getElementById("quantity-text-4");
  
    const showQuantity = document.getElementById("show-quantity-4");
  
    const showTotal = document.getElementById("show-total-4");
  
  let quantity = parseInt(quantityText.innerText);
          
          if(quantity<=5)
          {
              quantityText.innerText = ++quantity
          }
          else
          {
              alert("you can't add more than 6 items....")
          }
  
          showQuantity.innerText = `${quantity}*776`;
          showTotal.innerText = `Total : ${quantity*776}`;
        }
  
        function dec4(){
          const quantityText = document.getElementById("quantity-text-4");
  
          const showQuantity = document.getElementById("show-quantity-4");
  
          const showTotal = document.getElementById("show-total-4");
  
          let quantity = parseInt(quantityText.innerText);
  
    
            if(quantity>1)
            {
                quantityText.innerText = --quantity
            }
            else
            {
                alert("you can't add less than 1 items....")
        }
    
            showQuantity.innerText = `${quantity}*776`;
            showTotal.innerText = `Total : ${quantity*776}`;
    }


    // card 5

    function inc5(){
      const quantityText = document.getElementById("quantity-text-5");
    
      const showQuantity = document.getElementById("show-quantity-5");
    
      const showTotal = document.getElementById("show-total-5");
    
    let quantity = parseInt(quantityText.innerText);
            
            if(quantity<=5)
            {
                quantityText.innerText = ++quantity
            }
            else
            {
                alert("you can't add more than 6 items....")
            }
    
            showQuantity.innerText = `${quantity}*777`;
            showTotal.innerText = `Total : ${quantity*777}`;
          }
    
          function dec5(){
            const quantityText = document.getElementById("quantity-text-5");
    
            const showQuantity = document.getElementById("show-quantity-5");
    
            const showTotal = document.getElementById("show-total-5");
    
            let quantity = parseInt(quantityText.innerText);
    
      
              if(quantity>1)
              {
                  quantityText.innerText = --quantity
              }
              else
              {
                  alert("you can't add less than 1 items....")
          }
      
              showQuantity.innerText = `${quantity}*777`;
              showTotal.innerText = `Total : ${quantity*777}`;
      }
  

      //card 6

      function inc6(){
        const quantityText = document.getElementById("quantity-text-6");
      
        const showQuantity = document.getElementById("show-quantity-6");
      
        const showTotal = document.getElementById("show-total-6");
      
      let quantity = parseInt(quantityText.innerText);
              
              if(quantity<=5)
              {
                  quantityText.innerText = ++quantity
              }
              else
              {
                  alert("you can't add more than 6 items....")
              }
      
              showQuantity.innerText = `${quantity}*546`;
              showTotal.innerText = `Total : ${quantity*546}`;
            }
      
            function dec6(){
              const quantityText = document.getElementById("quantity-text-6");
      
              const showQuantity = document.getElementById("show-quantity-6");
      
              const showTotal = document.getElementById("show-total-6");
      
              let quantity = parseInt(quantityText.innerText);
      
        
                if(quantity>1)
                {
                    quantityText.innerText = --quantity
                }
                else
                {
                    alert("you can't add less than 1 items....")
            }
        
                showQuantity.innerText = `${quantity}*546`;
                showTotal.innerText = `Total : ${quantity*546}`;
        }



// button
function msg(){
  alert("Thank you for your order! ");
}





