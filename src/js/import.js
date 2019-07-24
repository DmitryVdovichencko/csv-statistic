// import csv files from csv folder using papaparse library
const Papa = require('papaparse');
import * as data from './data'
import * as exportData from './export'
/*
Parse csv files from csv folder using convertData function.
*/


// Promise

export const getData = (infile,outArr,outfile,write,filterFunc,filterProp,filterArr) => {
 
  	const resArr=[];
    Papa.parse(infile, 
    	{
    		encoding:"utf8",
    		delimiter: ' ',
    		worker: true,
    		step: function(row) {

				data.convertRow(row).then(
					item =>
					{
						
						if(item){
							if(filterFunc!==undefined) {

								const f = filterFunc.bind(item);
								const value = f(filterArr,filterProp,resArr);
								if(value){
									resArr.push(value);
								}
								
								
							}
							else {resArr.push(item)};
						}
						 	
					}
				
					)
				
				
			},
    		complete:function(){

    			data.getResult(resArr)	
    			.then(
				results => {

					
					outArr.push(...results);

					return Promise.resolve(outArr);
					}
				)
				.then(
					output =>{
						
						return exportData.unparse(output);
					}
						
				)
				.then(
					csv => {if(write){return exportData.write(csv,outfile)}}
				)
    		}
    	});
   
  
};



