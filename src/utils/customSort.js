export const customSort = (arr, opt) => {
  for (let i = 0; i < arr.length; i++) {
    let swap;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
    if (!swap) {
      break;
    }
  }
  if (opt === 'desc') {
    return arr.reverse().toString();
  } else {
    return arr.toString();
  }
};
