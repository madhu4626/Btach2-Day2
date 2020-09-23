let products = [
    {
      id: 1,
      name: "White & Blue Formal",
      size: "L",
      color: "white",
      price: 1200,
      image: "1.jpg",
      description: "Good looking formals",
    },
    {
      id: 2,
      name: "Blue Suit",
      size: "M",
      color: "Blue",
      price: 1500,
      image: "2.jpg",
      description: "Good looking blue suit",
    },
  
    {
      id: 3,
      name: "Black Shirt",
      size: "S",
      color: "Black",
      price: 900,
      image: "3.jpg",
      description: "Good looking Black Shirt",
    },
  
    {
      id: 4,
      name: "White Female Dress",
      size: "M",
      color: "White & Blue",
      price: 3000,
      image: "5.jpg",
      description: "Beautifull Skirt",
    },
  
    {
      id: 5,
      name: "Stripe Frock",
      size: "S",
      color: "Pink & Blue",
      price: 1300,
      image: "6.jpg",
      description: "Good looking Frock",
    },
  
    {
      id: 6,
      name: "Indian Dress",
      size: "M",
      color: "Navy Blue",
      price: 2500,
      image: "12.jpg",
      description: "Good looking Traditional Dress",
    },
    {
        id: 7,
        name: "White Shirt",
        size: "L",
        color: " White",
        price: 900,
        image: "4.jpg",
        description: "Good looking White Shirt",
      },
      {
        id: 8,
        name: "Stripe Set",
        size: "S",
        color: "Black & Brown",
        price: 1900,
        image: "7.jpg",
        description: "Good looking Set",
      },
      {
        id: 9,
        name: "Stripe set",
        size: "M",
        color: "Black & White",
        price: 1500,
        image: "8.jpg",
        description: "Good looking Checks Wear",
      },
      {
        id: 10,
        name: "Brown Suit",
        size: "L",
        color: "Brown",
        price: 3300,
        image: "9.jpg",
        description: "Good looking Suit",
      },
      {
        id: 11,
        name: "Stripe Shirt",
        size: "M",
        color: "White",
        price: 900,
        image: "10.jpg",
        description: "Good looking Shirt",
      },
      {
        id: 12,
        name: "Blue Gown",
        size: "S",
        color: "Blue",
        price: 2500,
        image: "11.jpg",
        description: "Good looking Gown",
      },
    
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
function addToCart(id){
    let pro = getProductByID(products, id);
    let itemcount = 0;
    if(cart.length == 0){
        document.getElementById("count").innerText= cart.length;
        cart.push(pro);
        itemcount++;
        document.getElementById("count").innerText = itemcount;
        document.getElementById("count").innerText = cart.length;
        displayProducts(cart, "cart");
        document.getElementById("count").value = cart.length;
    }
    else{
        let obj = cart.find((cartprod)=> cartprod.id == id);
        if(obj== undefined){
            cart.push(pro);
            document.getElementById("count").innerText = cart.length;
            displayProducts(cart, "cart");

            document.getElementById("count").value = cart.length;
        }
        else{
            alert("Product Already In Cart")
        }
    }
}
   
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
    document.getElementById("count").value = cart.length;

  }
