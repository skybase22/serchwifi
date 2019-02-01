var findMaxMin =  (arr) => {
    let min = arr[0].time, max = arr[0].time;
  
    for (let i = 1, len=arr.length; i < len; i++) {
      let v = arr[i].time;
      min = (v < min) ? v : min;
      max = (v > max) ? v : max;
    }
  
    return [min, max];
  }

  exports.findm = findMaxMin 