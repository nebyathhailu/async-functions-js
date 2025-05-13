/* 1. You are building a reminder feature for a task management app. Write an async function that sends a reminder (simulated with console.log) after a delay using setTimeout. The function should return a Promise that resolves after 3 seconds with the message "Reminder sent to user!", and you should await it to log the message.
*/

const taskManagement = new Promise ((resolve,reject) =>  {
    setTimeout(() => {
        resolve("Reminder sent to user!")
        reject("No reminder")
    },3000);
});

async function reminder(){ 
    try{
        const remind = await taskManagement
         console.log(remind);
    }
    catch(error){
        console.log({error});
    }
}

reminder();


/* 2. In a startup's DevOps dashboard, implement a setInterval function that checks server status every 5 seconds by calling an async function checkServer() that returns a Promise resolving to "Server is running" or rejecting with "Server down". Use .then() and .catch() to handle the result and stop the interval after 30 seconds using clearInterval.*/

async function checkServer() {
    const isRunning = Math.random() > 0.3;
    return isRunning ? Promise.resolve("Server is running") : Promise.reject("Server down");
  }
  const intervalId = setInterval(() => {
    checkServer()
      .then(status => console.log(status))
      .catch(error => console.error(error));
  }, 5000);
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped checking server after 30 seconds.");
  }, 30000);
  

/* 3. You're building a system to show multiple notifications to a user. Create an async function showNotifications that takes an array of messages and shows each message 1 second apart using await and setTimeout wrapped in a Promise. After all messages are shown, log "All notifications sent".*/

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function showNotifications(messages) {
    for (const msg of messages) {
      await delay(1000);
      console.log("Notification:", msg);
    }
    console.log("All notifications sent");
  }
  showNotifications(["Welcome!", "You have a new message.", "Update available."]);


  /* 4. In your startup’s API integration, write an async function fetchDataWithRetry() that tries to fetch data from a mock API (use Promise.reject() for failure), retries up to 3 times with a 2-second delay between attempts using setTimeout, and resolves with "Data fetched" or logs "Failed after 3 attempts" if all fail.*/

  async function fetchDataMock() {
    return Promise.reject("API failed"); // Simulate failure
  }
  async function fetchDataWithRetry(retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        await new Promise(res => setTimeout(res, 2000)); 
        const data = await fetchDataMock();
        console.log("Data fetched:", data);
        return;
      } catch (error) {
        console.error(`Attempt ${i + 1} failed: ${error}`);
      }
    }
    console.log("Failed after 3 attempts");
  }
  fetchDataWithRetry();
  

  /* 5.You’re building a countdown timer for a product launch. Write a function that takes a number n and logs the countdown every second using setInterval. Once it reaches 0, stop the interval and call an async function launchProduct() that returns a resolved Promise with "Product Launched!" and logs it. */

  function countdown(n) {
    const intervalId = setInterval(() => {
      console.log(n);
      if (n === 0) {
        clearInterval(intervalId);
        launchProduct().then(msg => console.log(msg));
      }
      n--;
    }, 1000);
  }
  async function launchProduct() {
    return Promise.resolve("Product Launched!");
  }
  countdown(5); 