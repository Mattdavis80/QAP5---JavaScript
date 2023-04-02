fetch("./QAP5.json")
  .then((response) => response.json())
  .then((data) => {
    // Loop through an array in the JSON data
    data.forEach((person) => {
      console.log(
        // Log each person's name and then reference their street name
        `My name is ${person.fName} ${person.lName} but most people know me as ${person.streetName}`
      );
    });
    // Loop through each person again
    data.forEach((person) => {
      // Log all of the information stored in the person object
      console.log(person);
    });
  })
  //   Handle any errors that occur while fetching the file
  .catch((error) => {
    console.log(error);
  });
