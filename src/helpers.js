const choice = (items) => {
    //returns randomly selected item from arr of items
    let random = Math.floor(Math.random() * items.length);
    return items[random];
}

const remove = (items, item) => {
    //removes first matching item from items and returns it or undefined if not found
    for (let i = 0; i < items.length; i++){
        if (items[i] === item){
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export { choice, remove };