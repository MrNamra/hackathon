const Helth = require('../models/HealthIoT')
const Traffic = require('../models/TafficIoT')

const getTrafficData = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 25
        const skip = (page - 1) * limit

        const data = await Traffic.find().skip(skip).limit(limit)

        const totalRecords = await Traffic.countDocuments();

        const totalPages = Math.ceil(totalRecords / limit);

        return res.status(200).json({
            status: true,
            message: "Traffic Data",
            data,
            pagination:{
                totalRecords,
                totalPages,
                currentPage: page,
                perPage: limit
            }
        });
    } catch (err) {
        console.log("IotController, getTrafficData Error: ", err)
        return res.status(500).json({ status: false, message: "Internal Server Error!", err });
    }
}

const addTrafficData = async (req, res) => {
    const { 
        traffic_volume,
        vehicle_speed,
        road_type,
        weather,
        temperature,
        humidity,
        precipitation,
        accidents,
        road_closure,
        event,
        public_transport_usage,
        weather_temperature
    } = req.body;
    try {
        if(!road_type || !weather) {
            return res.status(400).json({ status: false, message: "'road_type', 'weather' fields are required!" });
        }
        const data = await Traffic.create({
            traffic_volume,
            vehicle_speed,
            road_type,
            weather,
            temperature,
            humidity,
            precipitation,
            accidents,
            road_closure,
            event,
            public_transport_usage,
            weather_temperature
        });
        return res.status(200).json({ status: true, message: "Added Traffic Data" });
    } catch (err) {
        console.log("IotController, addTrafficData Error: ", err)
        return res.status(500).json({ status: false, message: "Internal Server Error!", err });
    }
}

const getHelthData = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 25
        const skip = (page - 1) * limit

        const data = await Helth.find().skip(skip).limit(limit)

        const totalRecords = await Helth.countDocuments();

        const totalPages = Math.ceil(totalRecords / limit);

        return res.status(200).json({
            status: true,
            message: "Helth Data",
            data,
            pagination:{
                totalRecords,
                totalPages,
                currentPage: page,
                perPage: limit
            }
        });
    } catch (err) {
        console.log("IotController, getHelthData Error: ", err)
        return res.status(500).json({ status: false, message: "Internal Server Error!", err });
    }
}

const addHelthData = async (req, res) => {
    const { 
        patient_id,
        age,
        gender,
        fever,
        cough,
        shortness_of_breath,
        travel_history,
        hospital_visits,
        vaccination_status,
        infection_risk,
        air_quality_index,
        population_density,
        social_media_alerts
    } = req.body;
    try {
        if(!vaccination_status) {
            return res.status(400).json({ status: false, message: "'vaccination status', 'travel_history', 'shortness of breath', 'cough', 'fever', 'age', 'gender' fields are required!" });
        }
        const data = await Helth.create({
            patient_id,
            age,
            gender,
            fever,
            cough,
            shortness_of_breath,
            travel_history,
            hospital_visits,
            vaccination_status,
            infection_risk,
            air_quality_index,
            population_density,
            social_media_alerts
        });
        return res.status(200).json({ status: true, message: "Added Helth Data" });
    } catch (err) {
        console.log("IotController, addTrafficData Error: ", err)
        return res.status(500).json({ status: false, message: "Internal Server Error!", err });
    }
}

module.exports = {
    getTrafficData,
    addTrafficData,
    getHelthData,
    addHelthData
}