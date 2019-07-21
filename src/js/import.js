// import csv files from csv folder using papaparse library
const Papa = require('papaparse');
import * as data from './data'
import * as exportData from './export'
/*
Parse csv files from csv folder using convertData function.
*/


// Promise

export const getData = (infile,outArr,outfile,write,filterFunc) => {
 
  	const resArr=[];
    Papa.parse(infile, 
    	{
    		encoding:"utf8",
    		delimiter: ' ',
    		worker: true,
    		step: function(row) {
				data.convertRow(row,resArr)
				
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
					output => {
						if(filterFunc===undefined){
							return exportData.unparse(output)
						}
						else{
							
							
									return (
										
											filterFunc().then(
												filtered=>exportData.unparse(filtered)
											)
										)	
									
										
						
							
						}

					}
				)
				.then(
					csv => {if(write){return exportData.write(csv,outfile)}}
				)
    		}
    	});
   
  
};



