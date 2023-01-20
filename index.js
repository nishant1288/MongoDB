const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err)
})

const student = new mongoose.Schema({
    name: String,
    age: Number,
    gender : String
})

const studentModel = new mongoose.model("Students", student)

const addData = async () => {
    // const studentData = new studentModel({
    //     name: "Nishant",
    //     age: 23,
    //     gender : "male"
    // })

    const studentData = await studentModel.create({
        name : "nish",
        age : 23,
        gender : "male"
    })

    // const ss =await studentModel.find({height: {$eq:6}})

    // await studentData.save()
}

addData()