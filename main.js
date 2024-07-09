//Large Shirts: Modify the make_shirt() function so that shirts are large
//by default with a message that reads I love typescript. Make a large shirt and a
//medium shirt with the default message, and a shirt of any size with a different
//message.
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = " I love typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt."));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love javascript");
