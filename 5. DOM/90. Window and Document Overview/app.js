// window object(current tab on browser) = browser api
// api means methods and properties that we can use

// now if doucment is under theh window object
// then how come we are directly accessing the document
// object without using the window
// it is bz when ever js does not find the property
// ot method,then it looks up in the window object
// to chehck if it have it or not

// rember we directly use alert function
// it also comes under window

// window is current tab and document us current tabs HTML

// in some cases the console does not show use the properties and
// methods
console.log(document);
// this will not show the properties and methods which are realted to
// this document, it will show out HTML structure
// it may happen with some other elements too
// use below code to see those
console.dir(document);
