import mongoose from "mongoose";

const candleSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
        index: true,
    },
    timeframe: {
        type: String,
        required: true,
        index: true
    },
    timestamp: {
        type: Date,
        required: true,
        index: true
    },
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    adjclose: Number,
    volume: Number
}, {
    versionKey: false
});

// unique key: no duplicate candles
candleSchema.index({ symbol: 1, timeframe: 1, timestamp: 1 }, { unique: true });

// export default mongoose.model("Candle", candleSchema);

export const Candle = mongoose.model('Candle' , candleSchema)