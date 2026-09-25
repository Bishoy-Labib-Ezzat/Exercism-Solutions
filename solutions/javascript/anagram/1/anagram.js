//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target,candidates) => {
    const targetX=target.toLowerCase();

    const result=candidates.filter((candidate)=>{
        const candidateX=candidate.toLowerCase();
      
        if(targetX === candidateX) return false;
        if(target.length !== candidate.length) return false;
      
        const newTarget = [...targetX].sort().join("");
        const newCandidate = [...candidateX].sort().join("");
      
        return newTarget === newCandidate;
    })

    return result;
}