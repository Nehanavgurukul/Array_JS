var arr1=["neha","pooja","neha","neha","pooja"]
var arr=[]
var arr2=[]
for (var x in arr1){
  var c=0;
  for(var y in arr1){
    if(!(x  in arr2)){
      if(arr1[x] == arr1[y]){
        c++;
        }
      }
  }arr.push(c);
  arr2.push(arr1[x])
  // arr1.pop(x)
}
console.log(arr)
console.log(arr2)