const clean = (phoneNumber) => {
    const isInputNumValid = phoneNumValidation(phoneNumber);
    if (isInputNumValid) return capPhoneNum(phoneNumber);
  };
  const phoneNumValidation = (num) => {
    const lettersReg = /[a-z]/g;
    const punctuationsReg = /[@:!,;]/g;
    if (punctuationsReg.test(num)) throw new Error("Punctuations not permitted");
    if (lettersReg.test(num)) throw new Error("Letters not permitted");
    return true;
  };
  const capPhoneNum = (num) => {
    const cleanNum = num.match(/[0-9]/g);
    if (cleanNum.length < 10) throw new Error("Incorrect number of digits");
    if (cleanNum.length > 11) throw new Error("More than 11 digits");
    if (cleanNum.length === 11 && cleanNum[0] !== "1")
      throw new Error("11 digits must start with 1");
    const tenDigitNum =
      cleanNum.length === 10 ? cleanNum.join("") : cleanNum.slice(1).join("");
    if (tenDigitNum[0] === "0")
      throw new Error("Area code cannot start with zero");
    if (tenDigitNum[0] === "1")
      throw new Error("Area code cannot start with one");
    if (tenDigitNum[3] === "0")
      throw new Error("Exchange code cannot start with zero");
    if (tenDigitNum[3] === "1")
      throw new Error("Exchange code cannot start with one");
    return tenDigitNum;
  };
  
  console.log(clean("+1 (613)-995-0253")); //'6139950253'
  console.log(clean("613-995-0253")); //'6139950253'
  console.log(clean("1 613 995 0253")); //'6139950253'
  console.log(clean("613.995.0253")); //'6139950253'
  console.log(clean("123456789")); //Error: Incorrect number of digits
  console.log(clean("1 (223) 156-7890")); //Error: Exchange code cannot start with one
  console.log(clean("(123) 456-7890")); //Error: Area code cannot start with one
  