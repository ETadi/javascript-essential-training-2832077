/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bookshelf = {
  name: "Bookshelf",
  volume: 100,
  color: "black",
  shelfNum: 7,
  shelflength: 12,
  shelfFull: false,
  toggleShelf: function (shelfStatus) {
    //method
    this.shelfFull = shelfStatus;
  },
};

console.log("The shelf object:", bookshelf);
console.log("The shelfNum value:", bookshelf.shelfNum);

console.log("Shelf empty before:", bookshelf.shelfFull);
bookshelf.toggleShelf(true);
console.log("Shelf empty after:", bookshelf.shelfFull);

const printer = {
  name: "Printer",
  type: "color",
  brand: "HP",
  paperCapactiy: 100,
  remainPaper: 100,
  trayFull: false,

  trayStatus: function (tstatus) {
    this.trayFull = tstatus;
  },
};

console.log("The Printer brand:", printer.brand);

/*
  const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };
  
  console.log("The backpack object:", backpack);
  console.log("The pocketNum value:", backpack.pocketNum);
  console.log("Strap Length L:", backpack.strapLength.left);
  
  var query = "pocketNum";
  
  console.log("The pocketNum value:", backpack[query]); */
