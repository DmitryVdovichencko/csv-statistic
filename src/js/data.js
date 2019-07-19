/* 
Function for converting data from result of paparse library. Here we ignore first item because it's incorrect caption from csv.
Then we find date and time using regexp and create date value for date prop. At the end we add value property and return array with date and value.
Also we can filter data by filter array. If we define filter function we have to use filter array to check values.
*/
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

export const setTimeFilter = (timeDelta, basicData)=>{
	const timeArr=[];
	
	basicData.forEach((basepoint)=>{
		const highLim = basepoint.date + timeDelta, lowLim = basepoint.date - timeDelta;
		timeArr.push({high:highLim, low:lowLim})
	})
	return timeArr;
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
/*
Function for filtering array by time using time array.
*/

export const filterData = (filterArr, filteringArr) => {
	filteringArr = filteringArr.filter((item)=>{
		return checkValue(item.date,filterArr);
	})
	console.log(filteringArr);
	return Promise.resolve(filteringArr);
}