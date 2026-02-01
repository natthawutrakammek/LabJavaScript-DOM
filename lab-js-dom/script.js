/*
Name: Natthawut Rakammek
Student ID: 68102010201
Lab: JavaScript & DOM
*/



// Students will write code step-by-step in this file

// Part 1: Check JavaScript connection
/*
console.log("JavaScript connected!");
console.log("JavaScript connected!");
*/

// Part 2
/*
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description")
console.log(titleElement);
console.log(descriptionElement);
*/

// Part 3
/*
title.textContent =  "Welcome to JavaScript DOM Lab"
description.textContent = "Hello World!"
*/

// Part 4
/*
const changeBtnNew = document.getElementById("changeBtn");
changeBtnNew.addEventListener("click", function() {
    title.classList.toggle("highlight");
});
*/

// Part 5
/*
const changeBtnNew = document.getElementById("changeBtn")
const resultText = document.getElementById("result")
changeBtnNew.addEventListener('click', function() {
    console.log("Button clicked");
    resultText.textContent = "Button was clicked!";
});
*/

// Part 6
/*
const submitBtnNew = document.getElementById("submitBtn");
const nameinputNew = document.getElementById("nameInput");
const resultNew = document.getElementById("result");
submitBtnNew.addEventListener("click", function() {
    const name = nameinputNew.value;
    if (name === ""){
        resultNew.textContent = "Please enter your name";
    }
    else{
        resultNew.textContent = "Hello "+name;
    }
});
*/

// Part 7

const heading = document.getElementById("title"); 
heading.textContent = "Hello"; 