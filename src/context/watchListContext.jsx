import {createContext, useState, useEffect} from "react"

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
//
	const [watchList, setWatchList] = useState(
		localStorage.getItem("watchList")?.split(",") || ["GOOGL", "MSFT", "AMZN","TSLA"]
	);

	useEffect(()=> {
		localStorage.setItem("watchList", watchList)
	},[watchList])

	const addStock = (stock) => {
		// если в watchList нет элемента stock то добавляем его
		if (watchList.indexOf(stock)=== -1) {
			setWatchList([...watchList, stock])
		}

	}

	const deleteStock = (stock) => {
		setWatchList(watchList.filter((el) => {
			// если теккщий не равняется удаляемому, возвращаем его, 
			return el !== stock;

		}))

	}


	return <WatchListContext.Provider value={{watchList, addStock, deleteStock}}>
		{props.children}
	</WatchListContext.Provider>

}
