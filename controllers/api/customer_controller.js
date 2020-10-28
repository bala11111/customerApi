const Customer = require('../../models/customer');
const jwt = require('jsonwebtoken')
var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
const toDate = (dateStr) => {
    const [year, month, day] = dateStr.split("/")
    return new Date(year, month - 1, day)
}

module.exports.createCustomer = async function(req,res){
    const date = toDate(req.body.DateOfBirth)
    console.log('this is date',date);
    try{

        if(regpan.test(req.body.panNumber)==false){
            return res.json(100, {
                status: 100,
                message: 'Invalid Pan Number'
            })
        }

        let customer = await Customer.create({
            firstName : req.body.firstName,
            panNumber : req.body.panNumber,
            DateOfBirth : date,
            Gender : req.body.Gender,
            email : req.body.email,
            avatar : req.body.avatar
        });

        console.log('Customer registered successfully');
        return res.json(200, {
            message : 'success',
            data : {
                jwtToken: jwt.sign(customer.toJSON(), 'customerapi', { expiresIn: '400000' })
            }
        });


    }catch(err){

        console.log('Error', err);
        return res.json(500, {
            status: 500,
            message: 'Internal Server Error'
        })
    }
}


module.exports.showCustomer = async function(req,res){
    try{

        let pan = req.params.panNumber;
    
        let customer = await Customer.findOne({panNumber:pan});
        console.log(customer.panNumber)
        if(customer)
        {
            return res.status(200).json({
                message : "Here is your customer information",
                customer_info : customer
            });
        }else{
            return res.json(300,{
                message : "No customer with the given pan number"
            })
        }

    }catch(err){
        console.log(err);
        return res.json(500, {
            status: 500,
            message: 'Internal Server Error'
        })
    }
}
