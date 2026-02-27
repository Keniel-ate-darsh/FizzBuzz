// TODO: Define constants for the form and the result display area

// TODO: Add the first line of the event listener to handle form submission

    // Prevent the form from refreshing the page
    
// TODO: Get the number from the form input

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself
document.addEventListener("submit", function(event) {
    event.preventDefault();
    let num = Number(document.getElementById("numberInput").value);
    if (num % 3 === 0 && num % 5 === 0) {
    document.getElementById("result").textContent = "FizzBuzz";
}   else if (num % 3 === 0) {
    document.getElementById("result").textContent = "Fizz";
}   else if (num % 5 === 0) {
    document.getElementById("result").textContent = "Buzz";
}   else {
    document.getElementById("result").textContent = num;
}
});
