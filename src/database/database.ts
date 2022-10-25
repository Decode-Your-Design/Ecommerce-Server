// import UserModel from '../../modals/UserSchema'
// import sendDataToDatabase from '../../controllers/productController'
import mongoose from 'mongoose'

const url = "mongodb+srv://maxSingh:a0rOYfSLXXdTkoin@cluster0.l34ugc6.mongodb.net/Ecommerce_Project?retryWrites=true&w=majority"

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