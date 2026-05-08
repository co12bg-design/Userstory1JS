const toast = document.getElementById('toast');




console.log("--- Age validator ---");

/*we use prompt to ask the user for their name and age, and then we validate the age input. If the input is not a valid number or is less than or equal to 0, we show an error message using a toast notification.*/

const name = prompt("What is your name?");


const age =   Number(prompt(`Welcome! ${name} How old are you?` ));

const showToast = () => {
    toast.classList.add("show");
    setTimeout(()=>{
        toast.classList.remove("show");
    },3000)
};

/*we use the isNaN function to check if the age input is not a number, and we also check if the age is less than or equal to 0. If either of these conditions is true, we log an error message to the console and call the showToast function to display the toast notification. If the age is valid, we proceed to check if the user is a minor or an adult and display the corresponding message using an alert.*/

if (isNaN(age)||age <= 0) {
console.error("Error: please enter a valid number");
showToast();

}else if (age <= 18) {
    alert(`Hello! ${name}, you are a minor. Keep learning and enjoying coding!`)
} else {
alert(`Hello! ${name}, you are an adult. Get ready for great opportunities in the world of programming!`)
}
