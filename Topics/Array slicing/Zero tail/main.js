function removeTail(array) {
    let elem = array.splice(array.length-2,2,0);
    return array;
}