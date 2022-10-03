import UserModel from '../../modals/UserSchema'
// import sendDataToDatabase from '../../controllers/productController'
import mongoose from 'mongoose'

const url = "mongodb+srv://gourav:gourav@123@reactflipkartclone.ykned.mongodb.net/?retryWrites=true&w=majority"

const connection = async()=>{
    try{
   await mongoose.connect('mongodb+srv://gourav:gouravranka@reactflipkartclone.ykned.mongodb.net/ecommerce?retryWrites=true&w=majority',
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
console.log("this is error message",)
    }
    
}
export default connection