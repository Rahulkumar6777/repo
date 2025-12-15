import YahooFinance from "yahoo-finance2";
import { Candle } from "../../Models/data.model.js";

const yahooFinance = new YahooFinance();


const fetchData = async (req, res) => {
    try {

        const { name, interval, startperiod, endperiod } = req.body;

        const data = await yahooFinance.historical(name, {
            period1: startperiod,
            period2: endperiod,
            interval: interval
        });

        for (const item of data) {
            const candleData = new Candle({
                symbol: name,
                timeframe: interval,
                timestamp: item.date,
                open: item.open,
                high: item.high,
                low: item.low,
                close: item.close,
                adjclose: item.adjClose,
                volume: item.volume
            });

            await candleData.save({ validateBeforeSave: true });
        }


        return res.status(200).json({
            message: "datafetched and save successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: "Internal server error"
        })
    }
}

export {fetchData}