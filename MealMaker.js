const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },

  get appetizers() {
    return this._courses.appetizers
  },
  set appetizers (appetizersIn){
    this._courses.appetizers.push(appetizersIn)
  },
  get mains() {
    return this._courses.mains
  },
  set mains (mainsIn){
    this._courses.mains.push(mainsIn)
  },
  get desserts() {
    return this._courses.desserts
  },
  set desserts (dessertsIn){
    this._courses.desserts.push(dessertsIn)
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    //console.log(dish)

    this._courses[courseName].push(dish)
  },

  getRandomDishFromCourse (courseName) {
    const courseDishes = this.courses[courseName]
    const randNum = Math.floor(Math.random()*courseDishes.length)
    return courseDishes[randNum]
  },

  generateRandomMeal() {
    const appetizer = menu.getRandomDishFromCourse('appetizers');
    const mains = menu.getRandomDishFromCourse('mains');
    const desserts = menu.getRandomDishFromCourse('desserts');

    const price = appetizer.price + mains.price + desserts.price;

    return {
      appetizer:appetizer.name,
      mains: mains.name,
      dessert:desserts.name,
      price: price
    } 
    
  },
}

menu.addDishToCourse('appetizers', 'CaesarSalad', 4.25);
menu.addDishToCourse('appetizers', 'wings', 4.75);
menu.addDishToCourse('appetizers', 'soup', 4.45);

menu.addDishToCourse('mains', 'burger', 12.45);
menu.addDishToCourse('mains', 'pasta', 14.25);
menu.addDishToCourse('mains', 'steak', 24.25);

menu.addDishToCourse('desserts', 'ice cream', 4.25);
menu.addDishToCourse('desserts', 'apple tart', 4.25);
menu.addDishToCourse('desserts', 'triffle', 4.25);

console.log(menu.generateRandomMeal());
