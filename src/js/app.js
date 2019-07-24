import '../scss/style.scss';
import * as data from './data'
import * as importData from './import'
import * as exportData from './export'









let filterArr;

const getElement=(id)=>{
	return document.querySelector(`#${id}`)
}
const weightData = getElement("weight"), 
	  tareData = getElement("tare"), 
	  ch1Data = getElement("ch1"),
	  ch2Data = getElement("ch2"),
	  ch3Data = getElement("ch3");

const weight=[], tare=[],ch1=[],ch2=[],ch3=[];
weightData.addEventListener('change', function(){
	
	
	importData.getData(
		weightData.files[0],
		weight,
		"weight",
		true,
		data.filterSameValue,
		"value"
	);
})

tareData.addEventListener('change', function(){
	
	importData.getData(
		tareData.files[0],
		tare,
		"tare",
		true,
		data.filterData,
		"date",
		data.setPropFilter(5000,weight,"date")
			
		)

})
ch1Data.addEventListener('change', function(){
	
	importData.getData(
		ch1Data.files[0],
		ch1,
		"ch1",
		true,
		data.filterData,
		"date",
		data.setPropFilter(5000,weight,"date")	
		)

})
ch2Data.addEventListener('change', function(){
	
	importData.getData(
		ch2Data.files[0],
		ch2,
		"ch2",
		true,
		data.filterData,
		"date",
		data.setPropFilter(5000,weight,"date")	
			
		)

})
ch3Data.addEventListener('change', function(){
	
	importData.getData(
		ch3Data.files[0],
		ch3,
		"ch3",
		true,
		data.filterData,
		"date",
		data.setPropFilter(5000,weight,"date")	
		)

})
	




