const mathbooks = 'Wiko';
const pages = 100;
let pagesread = 0;
for (let i = 0; i < pages; i++) {
  pagesread += 1;
}
if (pagesread === 10) {
    console.log("You have read 10 pages of " + mathbooks);
}
/* here page s= 100 and pagesread = 0 , and the 
for loop will run until pagesread becomes 100, 
and when the pages read becomes 10,
the if condition will be true and it will print the message.
IN console.log() mathbooks will be printed as wiko*/