//IIFE-Immediately invoked function expression
var a=100;//-------------------------------------------------------------------------------------------
(function name(){                                                                                 //  |  
    var a=10                                                                                      //  |
    console.log(a)                                                                                //  |
})();//-----------------------------------------------------------------------------------------------|                                                                     
console.log(a)                                                                                    //  |    
/***here we mainly use iife because to overcome the global pollutant like take this as an example     |
 * var a=100                                                                                          |
 * function name(){                                                                                   |
 * var a=10                                                                                           |
 * console.log(a)}                                                                                    |
 * console.log(a)                                                                                     |
 * o/p:10 10  because since var has a global scope instead of getting 100 we will get 10              |
 * to overcome this ie to get 100 for a we use iife***/                                            // |   
//if u want to use more than 1 iife use ; after everything ie before and after the current iife<-------