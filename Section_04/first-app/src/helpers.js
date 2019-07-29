export const choice = (items) => {
  let rand = Math.floor(Math.random() * (items.length -1) + 1);
  return items[rand];
}

export function remove(items, item) {
  const index = items.findIndex(fruit => fruit === item);
  
  if(index) {
    let result = items.splice(index, 1);
    return result;
  } else {
    return undefined;
  }
}