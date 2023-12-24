function convertArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {

          arr[i] = parseFloat(arr[i]);

      } else if (typeof arr[i] === 'number') {
        arr[i] = arr[i].toString();
      }
    //   else{
    //     log
    //   }
    }
    return arr;
  }


  const mixedArray = [1, '2.7', 3, '4', 'five', 6];
  console.log(mixedArray);
  const convertedArray = convertArrayElements(mixedArray);
  console.log(convertedArray);
