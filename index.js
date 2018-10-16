/*
Victoria Huynh 
4/16/18
Section: CSE 154 AI

This is the JavaScript file for my personal website.
*/

"use strict";
/* global fetch */

(function() {
    let DOG_URL = "https://dog.ceo/api/breeds/image/random";
    
    window.onload = function() {
        $("button").onclick = clickEventHandler;
        $("pupper").onclick = getDog;
    };
    
    function getDog() {
        fetch(DOG_URL, {mode: 'cors'})
            .then(checkStatus)
            .then(showDog)
            .catch(console.log);
    }
    
    function showDog(text) {
        let result = JSON.parse(text);
  	    $("doggo").src = result.message;
    }
    
    //This function gets the text from the HTML file.
    function clickEventHandler() {
        let str = document.getElementById("text").value;
        document.getElementById("output").innerHTML = pigLatin(str);
    }
    
    //This function translates the input text into Pig Latin.
    function pigLatin(str) {
        let vowels = ["a", "e", "i", "o", "u"];
        let strArray = [];
        let result = "";
        if (vowels.includes(str[0])) {
            return str + 'way';
        } 
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                return result + strArray.join("") + 'ay';
            } else {
                strArray.push(str[i]);
                result = str.slice(i + 1);
            }
        }
    }
    
    function checkStatus(response) { 
        if (response.status >= 200 && response.status < 300 || response.status == 0) {  
            return response.text();
        } else {  
            return Promise.reject(new Error(response.status + ": " + response.statusText)); 
        } 
    }
    
    function $(id) {
        return document.getElementById(id);
    }
    
})();
