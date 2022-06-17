/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

function buildSign(occasion, name) {
    return `Happy ${occasion} ${name}!`;
  }
  console.log(buildSign('Birthday', 'Jack'));
  
  /**
   * Build a birthday sign that conditionally formats the return string.
   *
   * @param {number} age
   *
   * @returns {string} template string based on age
   */
  
function buildBirthdaySign(age) {
    return age >= 50 ? "Happy Birthday! What a mature fellow you are." : "Happy Birthday! What a young fellow you are.";
  }
  console.log(buildBirthdaySign(50));
  
  /**
   * Build a graduation sign that includes multiple lines.
   *
   * @param {string} name
   * @param {number} year
   *
   * @returns {string} multi-line template string
   */
  
   function graduationFor(name, year) {
    return `Congratulations ${name}!\nClass of ${year}`
  }
  console.log(graduationFor('Rob', 2021))
  /**
   * Determine cost based on each character of sign parameter that builds
   * the template string that includes the currency parameter.
   *
   * @param {string} sign
   * @param {string} currency
   *
   * @returns {string} cost to create the sign
   */
  
function costOf(sign, currency) {
    let cost = 20 + 2 * sign.split('').length;
    let fixed = cost.toFixed(2);
    return `Your sign costs ${fixed} ${currency}.`
  }
  console.log(costOf('Happy Birthday Rob!', 'dollars'));