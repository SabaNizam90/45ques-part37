//Large Shirts: Modify the make_shirt() function so that shirts are large
//by default with a message that reads I love typescript. Make a large shirt and a
//medium shirt with the default message, and a shirt of any size with a different
//message.


function make_shirt(size: string = "Large", printMessage: string = " I love typescript"){
         console.log(`creating a ${size} shirt with the ${printMessage} print on shirt.`);
}
make_shirt()
make_shirt("Medium")
make_shirt("Small", "I love javascript")