const income = {
    skills:9,
    monthly(){
        return this.skills * 9;
    },
    yearly:()=> 999 * this.skills,
};

console.log(income.monthly());
console.log(income.yearly());

/*
concept;- this keyword

incase of income.monthly...this keyword will refer object income and
output will be 81 

incase of income.yearly....we have used this keyword in arrow function and this keyword 
will refer to parental scope of object income which is window , and there is no any skills
variable in window .
so output is 999*undefined = Nan.

[this inside arrow function always refer to parent scope]



*/