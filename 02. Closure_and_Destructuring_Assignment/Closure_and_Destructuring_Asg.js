// 1. You are building a counter application that tracks the number of times a button is clicked.
// Implement the counter using closure.

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log("Counter incremented. Count is now: " + count);
  }

  function getCount() {
    return count;
  }

  return {
    increment: increment,
    getCount: getCount,
  };
}

const counter = createCounter();

for (let i = 0; i < 5; i++) {
  counter.increment();
}

console.log("Current count: " + counter.getCount());

// 2. You have an object representing a customer order with properties orderId, productName, and quantity.
// Use destructuring to extract and print these properties.

let order = {
  orderId: "123456",
  productName: "Laptop",
  quantity: 2,
};

const { orderId, productName, quantity } = order;

console.log(orderId, productName, quantity);

// 3. In this coding challenge let's try to implement the cart feature using javascript closure.
// Using JS closures try to create a cart array and return a function to getCartItems.

function shoppingCart() {
  let list = [];

  function addItem(itemInfo) {
    const existingItem = list.find(
      (item) => item.productId === itemInfo.productId
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      list.push({ ...itemInfo, quantity: 1 });
    }
  }

  function removeItem(productIdToRemove) {
    list = list.filter((item) => item.productId !== productIdToRemove);
  }

  function getCartItems() {
    return list;
  }

  return {
    addItem: addItem,
    removeItem: removeItem,
    getCartItems: getCartItems,
  };
}

const cart = shoppingCart();

console.log("Cart Items:", cart.getCartItems());

// 4. Continuing the previous coding challenge, now let’s implement the add to cart feature. On calling add to
// cart closure function, the object of productId, name, quantity and price should be added to the cartItem.
// Note that if duplicate items with same prouductId is added, the product quantity must be incremented. Use
// javascript closures to achieve the output.

const product1 = {
  productId: 1,
  name: "Product 1",
  price: 10,
};

const product2 = {
  productId: 2,
  name: "Product 2",
  price: 20,
};

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log("Cart Items:", cart.getCartItems());

// 5. Continuing the previous coding challenge, now let’s implement the remove item from cart feature. On
// calling the remove item closure function, the specified productId item must be removed from cartItems
// array.Use javascript closures to achieve the output.

cart.removeItem(2);

console.log("Cart Items:", cart.getCartItems());

// 6. You are developing a music playlist management system. Implement functions that leverage closures
// and higher-order functions to perform common playlist operations.

// Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This
// closure should allow adding and listing songs for the given playlist.

// Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the
// specified playlist. Use the closure created in TASK 1.

// Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the
// Task 1

function createPlaylist(playlistName) {
  let songs = [];

  function addSong(songName, artist) {
    songs.push({ songName, artist });
  }

  function listSongs() {
    if (songs.length === 0) {
      console.log(`${playlistName} is empty`);
    } else {
      console.log(`Songs in ${playlistName}:`);
      songs.forEach((song) => console.log(`${song.songName} - ${song.artist}`));
    }
  }

  return { addSong, listSongs };
}

function addSong(playlist, songName, artist) {
  playlist.addSong(songName, artist);
}

function listSongs(playlist) {
  playlist.listSongs();
}

const myPlaylist = createPlaylist("My Favorites");

addSong(myPlaylist, "Song1", "Artist1");
addSong(myPlaylist, "Song2", "Artist2");
addSong(myPlaylist, "Song3", "Artist3");

listSongs(myPlaylist);


