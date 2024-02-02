import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	let [birthdate, setbirthdate] = useState('');
	let [currentdate, setcurrentdate] = useState('');
	let [result, setresult] = useState({
	  ms: null,
	  sec: null,
	  min: null,
	  hr: null,
	  days: null,
	  weeks: null,
	  mon: null,
	  years: null,
	});
  
	const age = () => {
	  const bdate = new Date(birthdate);
	  const cdate = new Date(currentdate);
	  const msecond = cdate - bdate;
	  const second = msecond / 1000;
	  const minutes = second / 60;
	  const hours = minutes / 60;
	  const day = hours / 24;
	  const week = Math.floor(day / 7);
	  const month = Math.floor(week * 0.229984);
	  const year = Math.floor(month / 12 + 1  );
  
	setresult({
		ms: msecond,
		sec: second,
		min: minutes,
		hr: hours,
		days: day,
		weeks: week,
		mon: month,
		years: year,
	  });
	};
  
	useEffect(() => {
	  const currentdate = new Date();
	  const formattedDate = currentdate.toISOString().split('T')[0];
	  setcurrentdate(formattedDate);
	},[]);
  return (
    <div className="App">
   		<center>
		<div className="age_cal">
			<b>Name:<input type="text" name=""></input></b><br></br><br></br>
			<b className="me-5">Today Date:<input type="date" name="" id="cdate"  value={currentdate} onChange={(e) => setcurrentdate(e.target.value)}></input></b>
			<b>Birth Date:<input type="date" name="" id="bdate"value={birthdate} onChange={(e) => setbirthdate(e.target.value)} ></input></b><br></br><br></br>
			<input type="submit" value="Calculate Age" onClick={() => age()}></input>
		</div>
		<div className="time">
			<div className="time_set">
				<p>millisecond<br></br><span>{result.ms}</span></p>
			</div>
			<div className="time_set">
				<p>seconds<br></br><span>{result.sec}</span></p>
			</div>
			<div className="time_set">
				<p>minutes<br></br><span>{result.min}</span></p>
			</div>
			<div className="time_set">
				<p>hour<br></br><span>{result.hr}</span></p>
			</div>
			<div className="time_set">
				<p>day<br></br><span>{result.days}</span></p>
			</div>
			<div className="time_set">
				<p> week<br></br><span>{result.weeks}</span></p>
			</div>
			<div className="time_set">
				<p> month<br></br><span>{result.mon}</span></p>
			</div>
			<div className="time_set">
				<p> year<br></br><span>{result.years}</span></p>
			</div>
		</div>
		</center>
    </div>
  );
}
export default App;