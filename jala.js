var list = document.getElementsByTagName('ol')[0];
function addInput() {
  list.children.length <=20 &&
  list.append(list.children[0].cloneNode(true));
}
function removeInput(){
  list.children.length >= 4 &&
  list.children[list.children.length-1].remove();
}