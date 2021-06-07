export function filterRepeatedTags (tags) {
    return  tags.filter((tag,i)=> {
        const repeted = tag[i] === tag[i+1] 
        ? true
        : false
        return repeted
    })
} 