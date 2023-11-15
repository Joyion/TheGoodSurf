import express from "express";
import Location from "../models/location.js";

export const locationRouter = express.Router();

locationRouter.get("/", (req,res) => {
    res.render("location/index")
})

// locationRouter.get("/region/:region", (req,res) => {
//     res.render("location/region/")
// })

// locationRouter.get("/region/:surfSpot/:id", (req,res) => {
//     res.render("location/region/index")
// })

locationRouter.get("/new", (req,res) => {
    res.render("location/region/new")
}) 


// Sanitize HTML
locationRouter.post("/new", async (req, res) => {
  res.send(req.body.description)
    const newLocation = new Location({
        name: req.body.name, 
        locationArea: req.body.region,
        description: req.body.description,
        rating: req.body.rating})

    try{
        await newLocation.save();

    }catch(error){
        console.log(error);
    }

   // const newLocation = new Location({})

    
})

