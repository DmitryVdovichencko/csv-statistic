/* 
Function for converting data from result of paparse library. Here we ignore first item because it's incorrect caption from csv.
Then we find date and time using regexp and create date value for date prop. At the end we add value property and return array with date and value.
Also we can filter data by filter array. If we define filter function we have to use filter array to check values.
*/
export const convertRow = (row) => {
	const data = row.data;
	if (data[1]){

			
			let day = data[1].match(/\d+\d+?/g);
			day = day.reverse().join('-');
			
			
			let date = Date.parse(`${day}T${data[2]}`), value = data[3];
			
			let item = {date:date, value:value};
			
			return Promise.resolve(item);
	
			
			
		} else{
			return Promise.resolve(null);
		}

}
export const getResult = (resArr=[]) => {
	
	return Promise.resolve(resArr);
}
export const convert = (results) => {
	
	
	

			

			const data = results.data; 
				let resArr = [];
			
	data.forEach((item,i)=>{
		if (i>0){

			
			let day = item[1].match(/\d+\d+?/g);
			day = day.reverse().join('-');
			
			
			let date = Date.parse(`${day}T${item[2]}`), value = item[3];
			resArr.push({date:date, value:value});
		}
	});
	
	
	return Promise.resolve(resArr);
		
	

}

/* 
Function to set time filter for data. We have basicData array of objects with two props: time and value. 
It returns time array of objects with two props: high time value and low time value.
*/ 

export const setPropFilter = (delta, basicData,baseProp)=>{
	const limitArr=[];
	
	basicData.forEach((basepoint)=>{
		const highLim = basepoint[baseProp] + delta, lowLim = basepoint[baseProp] - delta;
		limitArr.push({high:highLim, low:lowLim})
	})
	
	return limitArr;
}
export const setSameFilter = (delta, basicData,baseProp)=>{
	const limitArr=[];
	
	basicData.forEach((basepoint)=>{
		const highLim = basepoint[baseProp] + delta, lowLim = basepoint[baseProp] - delta;
		limitArr.push({high:highLim, low:lowLim})
	})
	
	return limitArr;
}
/*
If check value is in some of limits array - return true.
*/
export const checkValue = (value, limitArr) => {
	
	  return limitArr.some(
           function(limits) 
           {

             return value > limits.low && value < limits.high;
           } 
        );
}
export const checkSame = (value,filterProp,resArr) => {
	
	if (resArr.length>0){
		return (value!==resArr[resArr.length-1][filterProp])
	}
	else{
		return true;
	}
}
/*
Function for filtering array by time using time array.
*/

export function filterSameValue(filterArr,filterProp,resArr){
	
	
	if (checkSame(this[filterProp],filterProp,resArr)){
		
		return this;
	}
	else{
		return null
	}

}

export function filterData(filterArr,filterProp){
	
	
	if (checkValue(this[filterProp],filterArr)){
		
		return this;
	}
	else{
		return null
	}

}

	


