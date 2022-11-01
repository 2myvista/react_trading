import {useState, useEffect, useContext} from "react";
import finnHub from "../apis/finnHub";
import { WatchListContext } from "../context/WatchListContext";

export const AutoComplete = () => {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const {addStock} = useContext(WatchListContext);

	const renderDropDown =() => {
	const dropDownСlass = search ? "show" : null;
			return (
				<ul className={`dropdown-menu ${dropDownСlass}`} style={{height:"500px", overflowY: "scroll",  overflowX: "hidden", cursor: "pointer" }}>
				{results.map((result)=> {
					return (
						<li onClick={() => {
							addStock(result.symbol)
							setSearch("")
            }} key={result.symbol} className="dropdown-item">{result.description} ({result.symbol})</li>
					)
				})
				}
				</ul>
			)

	}

	useEffect(()=> {
		let isMounted = true;
		const fetchData =async () => {
			try {
				const response = await finnHub.get("/search", {
					params: {
						q: search
						}
					}
				)
				//console.log(response);
				if (isMounted) {
					setResults(response.data.result);
				}
			}
			catch {

			}
		}
		if (search.length > 0) {
			fetchData();
		}
		else {
			setResults([]);
		}
		return () =>(isMounted=false)
	},[search])

	return <div className="w-50 p-5 rounded mx-auto">
		<div className="form-floating dropdown">
			<input style={{backgroundColor: "rgba(145,158,171,0.4)"}} id="search" className="form-control" placeholder="search index"  autoComplete="off" value={search} onChange={(e) =>setSearch(e.target.value)}/>
			<label htmlFor="search">Search</label>
			{renderDropDown()}
		</div>
	</div>	
};