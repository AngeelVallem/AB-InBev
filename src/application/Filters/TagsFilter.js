export default function tagsFilter (tags) {
  
    const ftags = []

    tags.forEach(tag => {
        if(tag.match(/[a-zA-Z]+/g)){
            ftags.push(tag)
        }
    });
    return ftags
} 