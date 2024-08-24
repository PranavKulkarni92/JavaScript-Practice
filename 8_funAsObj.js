function showModal(){
    console.log(showModal.timeout);
}

showModal();  // ?

showModal.timeout = 200;

showModal.timeout = 100;

showModal(); // ?

/*
Concept:- function treated as object 

showModal() @ line 5 will give o/p undefined as we have not set any key

showModal() @ line 11 will give o/p 100 as we have set key to 100.


*/