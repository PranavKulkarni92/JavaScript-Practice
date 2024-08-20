class Lizard{
    static colorChange(newColor){
        this.newColor = newColor;
        return this.newColor;
    }

    constructor({newColor = "Orange"} = {}){
        this.newColor = newColor;
    }

}

const tommy = new Lizard({newColor: "Orange"});

//console.log(tommy.colorChange("blue"));

console.log(Lizard.colorChange("blue"));

/*
Concept:- static keyword.....and methods

static methods are not available on class instances ... here tommy.colorChange("blue")...,
They must be called directly on class here ... Lizard.colorChange("blue")


*/