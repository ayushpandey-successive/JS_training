//5. dot-sepaWrite a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into rated properties. The function should handle nested objects and arrays.
// const obj = {
//     a: 1,
//     b: { c: 2, d: [3, 4] }
//  };
//  Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const obj = {
    a: 1,
    b: { c: 2, d: [3, 4] },
  };
  const flattenedObj = {};
  
  const flatten = (obj, prefix = '') => {
  
      for (key in obj){
          if (typeof obj[key] === 'object'){
              flatten(obj[key], prefix + '.' + key);
          }else{
              let prefixKey = prefix + '.' + key; 
              flattenedObj[prefixKey] = obj[key];
          }
      }
      return flattenedObj;
  }
  
  console.log(flatten(obj));
