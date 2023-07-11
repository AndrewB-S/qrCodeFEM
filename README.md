# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
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

### Screenshot

![](./images/qrcode.png)

### Links

- Live Site URL: [Add live site URL here](https://capable-fairy-e647a7.netlify.app/)

## My process

I looked closely at the specs and made note of rounded corners, relationships between sizing, how the text looked, and the size of the image. I based the size of the image on 375px device width, having it scale smaller on smaller screens, remaining the same size on larger screens. If I were to want to make it even more responsive, I would have used view units for the tile sizing, which would allow the tile to scale larger on larger screens, smaller on smaller, etc, instead of the fixed value it currently has.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Vite](https://vitejs.dev/) - Build Tool
- [React](https://reactjs.org/) - JS library

### What I learned

I got a little tripped up on the correct way to order things so that it was responsive and made sense. Initially I applied way too many unneccessary styles and didn't correctly set up my media queries, but I trimmed that down, went mobile first thinking about what order made sense to style things, and I think this is a pretty clean way to go since the component scales to its container(even if the tile does not, but could if I used vh/vw as explained above).

## Author

- Frontend Mentor - [@AndrewB-S](https://www.frontendmentor.io/profile/AndrewB-S)
- Github - [@AndrewB-S](https://github.com/AndrewB-S)
