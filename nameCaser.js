var name = prompt("Enter a name.");
var first = name.slice(0, 1);
var rest = name.slice(1, name.length);
first = first.toUpperCase();
rest = rest.toLowerCase();
alert("Hello, " + first + rest + "!");