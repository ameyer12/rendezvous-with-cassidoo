// Write a function called daysBetween that takes in two dates, and returns the number of days between those dates. You can choose the date format you'd like to accept!

// Dates must be in YYYY-MM-DD string format
function daysBetween(date1, date2){
  let date1Ms = Date.parse(date1);
  let date2Ms = Date.parse(date2);
  let absDiffMs = Math.abs(date1Ms - date2Ms)
  let msPerDay = 86400000

  return Math.floor(absDiffMs / msPerDay);
}

console.log(daysBetween("2024-02-02", "2024-02-03"));