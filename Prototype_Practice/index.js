let arr = [1, 2, 3, 4, 5];
// console.log(arr) ;
// let checkPopedElement = arr.pop() ;
// console.log(checkPopedElement) ;
// console.log(arr) ;

Array.prototype.myPop = function () {
  if (this.length === 0) {
    return undefined;
  } else {
    const length = this.length - 1 ;
    const elementToRemove = this[length] ;
    this.length = length ;
    return elementToRemove ;
  }
};


console.log(arr) ;
let checkElementRemovedFromMyPop = arr.myPop() ;
console.log(arr) ;
console.log(checkElementRemovedFromMyPop) ;