export function compute(left: string, right: string): number {
  if(left.length !== right.length)
      throw new Error('DNA strands must be of equal length.');
  
  return [...left].reduce((count,value,index)=> value !== right[index] ? count+1 : count ,0)
}
