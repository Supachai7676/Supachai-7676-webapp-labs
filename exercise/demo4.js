let Hero = function (name) {
    this.name = name;
}

Hero.prototype.getName = function () {
    return this.name;
};

const myHero = new Hero("Link");
console.log("myHero name is " + myHero.getName());