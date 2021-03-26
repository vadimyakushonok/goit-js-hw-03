const findBestEmployee = function(employees) {
    const values = Object.values(employees);

    const maxValue = Math.max(...values);

    const keys = Object.key(employees);

    for (const key of keys) {
      if (employees[key] === maxValue) {
        console.log(key);
      };
      
    };
   return key;


  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux
/* 
  const findLongestWord = function(string) {
    const stringSplit = string.split (' ');
    let longestWord = stringSplit[0];
    
    for (let i = 1; i < stringSplit.length; i += 1){
        if (stringSplit[i].length > longestWord.length){
            longestWord = stringSplit[i];
        }       
    }
return longestWord;
};

  console.log(
      findLongestWord('The quick brown fox jumped over the lazy dog')
      );
  
  console.log(findLongestWord('Google do a roll'));
  
  console.log(findLongestWord('May the force be with you')); */