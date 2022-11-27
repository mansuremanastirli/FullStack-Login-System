const express = require("express")
const userSchema = require("./userSchema")
const bcrypt = require("bcrypt")
const router = express.Router()


// kayıt olma routeri
router.post("/signup", async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body 

        if (firstname === "" || lastname === "" || email === "" || password === ""){
            return res.status(400).json({ message: "Please Enter Your All Info" })
        }

        const user = await userSchema.findOne({ email });  // girilen email in daha önce databaseye kaydedilmiş mi diye kontrol eder 

        if (user) {
            return res.status(400).json({ message: "User already Exist" }) // eğer daha önce database kaydedilmişse bu mesaj verilir
        }
        
        if(password.length < 8){
            return res.status(400).json({ message: "password must be at least 8 characters" }) // şifre uzunluğu 8 den kısaysa bu mesaj döner
        }

        const hashedPass = await bcrypt.hash(password, 10) // hashed password

        const saveUser = await userSchema.create({
            firstname,
            lastname,
            email,
            password: hashedPass
        })

        console.log(saveUser)

        return res.status(200).json({message: "Create Successful"})
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Create User Failed" })
    }

})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body

        if(email === "" || password === ""){
            return res.status(400).json({message: "Enter your email or password"})
        }

        const user = await userSchema.findOne({ email }); // girilen email in daha önce databaseye kaydedilmiş mi diye kontrol eder

        if (!user) {
            return res.status(400).json({ message: "Email or Password is Wrong" }) // kayıtlı email yoksa 
        }

        const ispasswordCorrect = await bcrypt.compare(password, user.password) // girilen passwordle database de kayıtlı olan passwordu karşılaştırır

        if (!ispasswordCorrect) {
            return res.status(400).json({ message: "Email or Password is Wrong" })
        }

        return res.status(200).json({user})

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Login Failed" })
    }



})

router.get("/" , async (req,res) => {

    const userData = await userSchema.find()

    return res.status(200).json({userData})

})

router.delete("/delete/:id" , async (req,res) => {
    const id = req.params.id

    const deleteAcc = await userSchema.findByIdAndDelete(id)

    return res.status(200).json({message: "Account Deleted"})
    
})

module.exports = router