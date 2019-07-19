import '../scss/style.scss';



import * as data from './data'
import * as importData from './import'
import * as exportData from './export'









const weight=[]; let filterArr;

const getElement=(id)=>{
	return document.querySelector(`#${id}`)
}
const weightData = getElement("weight"), 
	  tareData = getElement("tare"), 
	  ch1Data = getElement("ch1"),
	  ch2Data = getElement("ch2"),
	  ch3Data = getElement("ch3");


weightData.addEventListener('change', function(){
	
	
	importData.getData(weightData.files[0])
	.then(
		results => data.convert(results) 
		)
	.then(
		results => {
			weight.push(...results);
			return Promise.resolve(weight);
			}
		)
	.then(
		weight => exportData.unparse(weight)
	)
	.then(
		csv => exportData.write(csv,"weight")
		)

	


}


	);
tareData.addEventListener('change', function(){
	importData.getData(tareData.files[0])
	.then(
		results => data.convert(results) 
		)
	.then(
		filteringArr => {
			// get base filter array
			importData.getData(weightData.files[0])
			.then(
				filterArr => data.filterData(data.setTimeFilter(5000, weight),filteringArr) 
			)

		}
		
	);
})
	
// const fields = ['date', 'value'];
// const json2csvParser = new Parser({ fields });
// // setTimeout(function() { console.log(parseFile(tareData.files[0],tare,true,5000,weight)); }, 1000);
// parseFile(tareData.files[0],tare,true,5000,weight);


// console.log(parseFile(tareData.files[0],tare,true,5000,weight));
// }

// 	);
// ch1Data.addEventListener('change', function(){
// 	parseFile(ch1Data.files[0],ch1);
// 	console.log(ch1);

// });
// ch2Data.addEventListener('change', function(){
// 	 parseFile(ch2Data.files[0],ch2);
// 	 console.log(ch2);

// 	});
// ch3Data.addEventListener('change', function(){
// 	parseFile(ch3Data.files[0],ch3);
// 	 console.log(ch3);

// });



