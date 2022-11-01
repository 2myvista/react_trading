import Chart from "react-apexcharts";
import {useState} from "react";

export const StockChart =({chartData, symbol}) => {
	// извлекаем данные по дню, неделе и году из chartData
	const {day, week, year} = chartData;
	const [dateFormat, setDateFormat] = useState("24h");

	const determineTimeFormat =() => {
		switch(dateFormat) {
			case "day":
				return day
			case "week":
				return week
			case "year":
				return year
			default:
				return day
		}
	}


	//console.log(chartData);
	console.log(determineTimeFormat());
	const color = determineTimeFormat()[determineTimeFormat().length - 1].y - determineTimeFormat()[0].y > 0 ? "#26C281" : "#ed3419"

	const options = {
		colors: [color],
		title: {
			text: symbol,
			align: "center",
			style: {
				fontSise: "24px",
			}
		},
		chart: {
			id: "stock data",
			animations: {
				speed: 1300,
			}
		},
		xaxis: {
			type: "datetime",
			labels: {
				datetimeUTC: false
			}
		},
		tooltip: {
			x: {
				format: "HH:MM dd MMM yyyy"
			}
		},
		
	}

	const series = [{
		name: symbol,
		data: determineTimeFormat()
	}]

	const renderButtonSelected = (button) => {
		const classes = "btn m-1"
		if (button === dateFormat) {
			return classes + "btn-primary";

		}
		else {
			return classes + "btn-outline-primary";
		}
	}

	return <div  className="mt-5 p-4 shaow-sm bg-white">
		<Chart options={options} series={series} type="area" width="100%" />
		
		<button className={renderButtonSelected("day")} onClick={()=>setDateFormat("day")}>day</button>
		<button className={renderButtonSelected("week")} onClick={()=>setDateFormat("week")}>week</button>
		<button className={renderButtonSelected("year")} onClick={()=>setDateFormat("year")}>year</button>
	</div>
}