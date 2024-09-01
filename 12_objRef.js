function checkAge(data){
    if (data === { age : 18}) {
        console.log("You are an Adult");
    }else if(data == {age:18}) {
        console.log("You are still an Adult.");
    }else{
        console.log("Hmm...No Age");
    }
}