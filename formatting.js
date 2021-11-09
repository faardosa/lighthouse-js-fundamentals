function range(begin,finish,step)  {
 let array =[];
  for(let i=begin; i<finish; i+=step){
    array.push(i)
    console.log(array)
  }
  
  return array;

}

range(1,12,3)