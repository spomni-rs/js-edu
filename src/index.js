/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
 
const javascriptHours = 800;
const programmingHours = 500;
 
module.exports = function getTimeForEducation(
  focus = 'family', 
  knowsProgramming = true,
  config = {family: 4}
  ) {
  
  let speed = config[focus];
  let hours = javascriptHours;
  
  if (!knowsProgramming){
    hours += programmingHours;
  }
  
  return Math.ceil(hours / speed);
};
  