let names=[1,2,3,4,5,6,7]
let odd=[];
let even=[];
for(var o of names){
  if(o%2==0){
    even.push(o)
  }else{
    odd.push(o)
  }
}
let other=[...odd,...even];
other.join('\n')
