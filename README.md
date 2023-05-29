# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](https://i.imgur.com/ue1dW3L.png)

### Links
- Live Site URL: [https://mentor-challenge-12.vercel.app/](https://mentor-challenge-12.vercel.app/)

## My process

The first thing was creating two main elements in the page, the main one with the subscription form and the success page.
The structure was pretty easy, the element is made up of two column, the height is decided from the image on the right, so setting it
to the right value set the dimension right.\
After that, I strucuted the element on the left column and went to style it with CSS, 
the most important detail for the page is for the main heading to be on one line, so I worked around that to set my decide my break points. \
Going to Javascript instead, I needed the validation for the email to be working since the entire input field changes on error, other than that it was basically just handling the main element swap, toggling the hidden class I had set in CSS

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

## Author

- Frontend Mentor - [@AngeloMar98]([https://www.frontendmentor.io/profile/yourusername](https://www.frontendmentor.io/profile/AngeloMar98))

