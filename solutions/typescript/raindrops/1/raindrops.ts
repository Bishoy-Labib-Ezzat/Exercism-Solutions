export function convert(input:number):string {
  let sounds:string = "";
  
  if(input%3 === 0)
    sounds+="Pling";
  if(input%5 === 0)
    sounds+="Plang";
  if(input%7 === 0)
    sounds+="Plong";
  if(sounds.length === 0)
    sounds+=input;
  
  return sounds;
}
