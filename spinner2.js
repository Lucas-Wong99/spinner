const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ',
               '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write(array[i]);
  }, i * 200);
}
