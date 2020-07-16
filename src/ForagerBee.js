class ForagerBee extends Bee {
  // TODO..
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = new Array();
  }
  forage(treasure) {
    this.treasureChest.push(treasure)
  }
};
