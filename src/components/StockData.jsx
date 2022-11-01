import { useState, useEffect } from "react"
import finnHub from "../apis/finnHub";
export const StockData = ({ symbol }) => {

  const [stockData, setStockData] = useState()

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/stock/profile2", {
          params: {
            symbol
          }
        })
        console.log(response)
        if (isMounted) {
        	setStockData(response.data)
        }

      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
    return () => (isMounted=false);
    
  }, [symbol])
  return <div>{stockData && (
  	<div className="row border bg-white rounded shadow-sm p-4 mt-5">
  		<div className="col">
  			<div>
	  			<span className="fv-bold">name:</span>{stockData.name}
  			</div>
  			<div>
	  			<span className="fv-bold">country:</span>{stockData.country}
  			</div>
  			<div>
	  			<span className="fv-bold">ticker:</span>{stockData.ticker}
  			</div>
  		</div>
  		<div className="col">
  			<div>
	  			<span className="fv-bold">Exchange:</span>{stockData.exchange}
  			</div>
  			<div>
	  			<span className="fv-bold">Industry:</span>{stockData.finnhubIndustry}
  			</div>
  			<div>
	  			<span className="fv-bold">IPO:</span>{stockData.ipo}
  			</div>
  		</div>
  		<div className="col">
  			<div>
	  			<span className="fv-bold">Market Cap:</span>{stockData.marketCapitalization}
  			</div>
  			<div>
	  			<span className="fv-bold">shares Outstanding:</span>{stockData.shareOutstanding}
  			</div>
  			<div>
	  			<span className="fv-bold">url:</span><a href="{stockData.weburl}">{stockData.weburl}</a>
  			</div>
  		</div>
  	</div>

  	)}
    
  </div >
}