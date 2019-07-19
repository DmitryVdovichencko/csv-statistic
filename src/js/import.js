// import csv files from csv folder using papaparse library
const Papa = require('papaparse');

/*
Parse csv files from csv folder using convertData function.
*/

// const parse = (file) => {
// 	const csvData = Papa.parse(file, {
// 		encoding:"utf8",
// 	    delimiter: ' ',
// 		complete: function(results) {
// 			let res = results.data;
// 			}
// 		});
// }
// export const getData = (res) => {
// 	parse(file);
// 	setTimeout(()=> {
// 		console.log(res);
// 		return(res);
// 	}, 1500);
// }

// Promise

export const getData = (file) => {
  return new Promise(function(complete, error) {
  	
    Papa.parse(file, 
    	{
    		encoding:"utf8",
    		delimiter: ' ',
   //  		step: function(row) {
			// 	res.push(row.data);
			// },
    		complete, 
    		error});
  });
};



