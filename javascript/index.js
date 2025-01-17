// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
  */
const mashedPotatoesOL = document.querySelector("#mashedPotatoes");
// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    mashedPotatoesOL.innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        mashedPotatoesOL.innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            mashedPotatoesOL.innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                mashedPotatoesOL.innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    mashedPotatoesOL.innerHTML += `<li>${step5}</li>`;
                    mashedPotatoesOL.innerHTML += `<li>Mashed potatoes are ready!</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
const steakOL = document.querySelector("#steak");

obtainInstruction("steak", 0)
  .then((instruction) => {
    steakOL.innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((instruction) => {
    steakOL.innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((instruction) => {
    steakOL.innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((instruction) => {
    steakOL.innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((instruction) => {
    steakOL.innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((instruction) => {
    steakOL.innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((instruction) => {
    steakOL.innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((instruction) => {
    steakOL.innerHTML += `<li>${instruction}</li>`;
    steakOL.innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
const makeBroccoli = async () => {
  try {
    const broccoliOL = document.querySelector("#broccoli");

    let instruction = await obtainInstruction("broccoli", 0);
    broccoliOL.innerHTML += `<li>${instruction}</li>`;

    instruction = await obtainInstruction("broccoli", 1);
    broccoliOL.innerHTML += `<li>${instruction}</li>`;

    instruction = await obtainInstruction("broccoli", 2);
    broccoliOL.innerHTML += `<li>${instruction}</li>`;

    instruction = await obtainInstruction("broccoli", 3);
    broccoliOL.innerHTML += `<li>${instruction}</li>`;

    instruction = await obtainInstruction("broccoli", 4);
    broccoliOL.innerHTML += `<li>${instruction}</li>`;

    instruction = await obtainInstruction("broccoli", 5);
    broccoliOL.innerHTML += `<li>${instruction}</li>`;

    instruction = await obtainInstruction("broccoli", 6);
    broccoliOL.innerHTML += `<li>${instruction}</li>`;
    broccoliOL.innerHTML += `<li>Broccoli is ready!</li>`;

    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
};
makeBroccoli();

// Bonus 2 - Promise all
const brusselsSproutsOL = document.querySelector("#brusselsSprouts");

const brusselsSproutsPromisses = [];
for (let i = 0; i <= 6; i++)
  brusselsSproutsPromisses.push(obtainInstruction("brusselsSprouts", i));

Promise.all(brusselsSproutsPromisses)
  .then((results) => {
    for (result of results) brusselsSproutsOL.innerHTML += `<li>${result}</li>`;
    brusselsSproutsOL.innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));
