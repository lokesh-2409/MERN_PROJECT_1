import app from "./app.js";
import cors from 'cors'

app.use(cors({ origin: "http://localhost:5173" ,credentials:true}));
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})
app.post("/api/v1/reservation/send", (req, res) => {
    res.json({ message: "Reservation successful" });
  });
app.use(cors())