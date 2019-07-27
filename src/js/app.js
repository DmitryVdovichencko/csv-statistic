import '../scss/style.scss';
import "../assets/img/csvLogo.svg";
import "../assets/img/GitHubLogo.png";
import "../assets/img/GitHub.png";
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
	  ch3Data = getElement("ch3"),
	  grossData = getElement("gross"),
	  zeroData = getElement("zero");

const weight=[], tare=[],ch1=[],ch2=[],ch3=[],zero=[], gross=[];
weightData.addEventListener('change', function(){
	
	
	importData.getData(
		weightData.files[0],
		weight,
		"01-TareWeight.csv",
		true,
		data.filterSameValue,
		"value"
	);
})

tareData.addEventListener('change', function(){
	
	importData.getData(
		tareData.files[0],
		tare,
		"02-Weight.csv",
		true,
		data.filterData,
		"date",
		data.setPropFilter(2000,weight,"date")
			
		)

})
ch1Data.addEventListener('change', function(){
	
	importData.getData(
		ch1Data.files[0],
		ch1,
		"03-Ch1.csv",
		true,
		data.filterData,
		"date",
		data.setPropFilter(2000,weight,"date")	
		)

})
ch2Data.addEventListener('change', function(){
	
	importData.getData(
		ch2Data.files[0],
		ch2,
		"04-Ch2.csv",
		true,
		data.filterData,
		"date",
		data.setPropFilter(2000,weight,"date")	
			
		)

})
ch3Data.addEventListener('change', function(){
	
	importData.getData(
		ch3Data.files[0],
		ch3,
		"05-Ch3.csv",
		true,
		data.filterData,
		"date",
		data.setPropFilter(2000,weight,"date")	
		)

})
zeroData.addEventListener('change', function(){
	
	
	importData.getData(
		zeroData.files[0],
		zero,
		"07-Zeroing.csv",
		true,
		data.filterSameValue,
		"value"
	);
})
grossData.addEventListener('change', function(){
	
	importData.getData(
		grossData.files[0],
		gross,
		"06-Gross.csv",
		true,
		data.filterData,
		"date",
		data.setPropFilter(2000,weight,"date")	
		)

})
	




