export const choice = (items) => {
  let rand = Math.floor(Math.random() * (items.length -1) + 1);
  return items[rand];
}

export function remove(items, item) {
  const index = items.indexOf(item);
  console.log(`Index: ${index}`);
  
  if(index) {
    let result = items.splice(index, 1);
    console.log('result: ' + result);
    return result;
  } else {
    return undefined;
  }
}