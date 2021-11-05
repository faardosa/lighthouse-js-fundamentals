let number = 100;
while (number>= 100 && number <= 200) { 
  // console.log(number);
  if (number % 3 == 0 && number % 4 == 0) {
    console.log("LoopyLighthouse");
  } else if (number % 4 == 0) {
    console.log("Lighthouse");
  } else if (number % 3 == 0) {
    console.log("Loopy");
  } else {
    console.log(number);
  }
  number++;
}
