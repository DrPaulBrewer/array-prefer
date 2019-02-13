/* jshint node:true,esnext:true,eqeqeq:true,undef:true,lastsemic:true,strict:true */

module.exports = function(inArray, hasPriority, limit){
  if (!Array.isArray(inArray))
    return undefined;
  if (limit <= 0) return inArray;
  if (typeof(hasPriority)!=='function') return inArray;
  let limiter = (typeof(limit)==='number')? Math.floor(limit): inArray.length;
  let i = 0;
  const first = [];
  const wait = [];
  while( (i<inArray.length) && (limiter>0) ){
    const item = inArray[i];
    if (hasPriority(item)){
      first.push(item);
      --limiter;
    } else {
      wait.push(item);
    }
    ++i;
  }
  const last = (i===inArray.length)? []: inArray.slice(i);
  return first.concat(wait,last);
};
