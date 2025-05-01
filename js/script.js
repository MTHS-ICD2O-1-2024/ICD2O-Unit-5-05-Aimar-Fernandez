// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: May 2025
// This file contains the JS functions for index.html

function myButtonClicked() {
  //input
  const aLength = parseFloat(document.getElementById("a-length").value)
  const bLength = parseFloat(document.getElementById("b-length").value)
  const cLength = parseFloat(document.getElementById("c-length").value)
  //angle process
  const angleA = Math.acos((bLength**2 + cLength**2 - aLength**2) / (2 * bLength * cLength)) * (180/Math.PI)
  const angleB = Math.acos((cLength**2 + aLength**2 - bLength**2) / (2 * cLength * aLength)) * (180/Math.PI)
  const angleC = Math.acos((aLength**2 + bLength**2 - cLength**2) / (2 * aLength * bLength)) * (180/Math.PI)
  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))
  //main process
  if (sumOfAngles != 180) {
    document.getElementById("answer").innerHTML = 
      "<p>This isn't a triangle</p>"
  }
  else if (aLength == bLength && aLength == cLength) {
    document.getElementById("answer").innerHTML = 
      "<p>This is an equilateral triangle</p>"
  }
  else if ((aLength == cLength || aLength == bLength) || bLength == cLength) {
    document.getElementById("answer").innerHTML = 
      "<p>This is an isoceles triangle</p>"
  }
  else {
    document.getElementById("answer").innerHTML = 
      "<p>This is a scalene triangle</p>"
  }
}
