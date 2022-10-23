// import UserModel from '../../modals/UserSchema'
// import sendDataToDatabase from '../../controllers/productController'
import mongoose from 'mongoose'

const url = "mongodb+srv://gourav:gourav.ranka@vigorous-motors.oh2p2pq.mongodb.net/vigorous-motors?retryWrites=true&w=majority"

const connection = async()=>{
    try{
   await mongoose.connect(url,
{
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
}
    
    )
    console.log("database connected succesfully")
//    await sendDataToDatabase(); 

}
    catch(err){
console.log("this is error message",err.message)
    }
    
}
export default connection