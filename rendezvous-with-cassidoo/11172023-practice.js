/* Given a list of tasks, where each task has a duration, and a limited amount of available time to work,
   write a function to return the tasks that can be completed within the given time, without re-ordering 
   the original list of tasks.
*/

const tasks = [
    { name: 'Task 1', duration: 4 },
    { name: 'Task 2', duration: 2 },
    { name: 'Task 3', duration: 7 },
    { name: 'Task 4', duration: 5 },
    { name: 'Task 5', duration: 1 },
    { name: 'Task 6', duration: 3 }
  ];
  
const timeToWork = 6;

function doTasks(tasks, timeToWork) {
    // Initialize a result array
    let result = [];

    // Create a copy of the inputted task array
    let clonedTaskArray = tasks.slice();

    // Initialize a counter to keep track of the total time we need
    totalTime = 0;

    // Create variables to store the minimum duration and its corresponding key
    minDuration = tasks[0]['duration'];
    minDurationTaskName = '';
    
    // Loop while there is still time remaining
    while(totalTime <= timeToWork) {
        // Loop over the tasks, and select the one with the shortest duration
        for(i in tasks) {
            // If there is a shorter duration found, update the minDurationTaskName and the minDuration
            if(tasks[i]['duration'] < minDuration){
                minDurationTaskName = tasks[i]['name'];
            }
    
            minDuration = Math.min(minDuration, tasks[i]['duration']);
        }
        
        // Add the duration to the total time, add the task to the result array, and remove the task from the task list
        totalTime += minDuration;
        result.push(minDurationTaskName);
        clonedTaskArray.splice(i, 1);
    }

    console.log(clonedTaskArray)
    return result;
}

console.log(doTasks(tasks, timeToWork));