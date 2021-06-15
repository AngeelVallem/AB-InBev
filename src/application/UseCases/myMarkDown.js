export default function myMarkDown(str) {
	const types = str.split(",");
	let article = {};
	types.forEach((type) => {
	  const word = type.trim();
	  if (word.match(/#[^“]*#/g)) {
	    const title = word.replace(/[#]/g, "");
	    article = { title };
	  } else if (word.match(/:[^“]*:/g)) {
	    const description = word.replace(/[:]/g, "");
	    article = { ...article, description };
	  } else if (word.match(/<[^“]*>/g)) {
	    const body = word.replace(/[<>]/g, "");
	    article = { ...article, body };
	  }
      
	  
	});
		return article = { ...article, tagList: ["reactjs", "angularjs", "dragons"] };
}
// postMethod('https://conduit.productionready.io/api/articles',article,navigation,'Home', 'Article posted')