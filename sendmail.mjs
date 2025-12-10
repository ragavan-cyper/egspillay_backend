import nodemailer from "nodemailer";

import dotenv from "dotenv"
dotenv.config()

const transport=nodemailer.createTransport({

    service:"gmail",
    auth:{
        user:process.env.MY_USER,
        pass:process.env.MY_PASS

    }


})


export async function sendMail(from,to,text) {
    try {
        await transport.sendMail({
            
          from,
    to,
    text,

        })


        
    } catch (error) {
         console.error("❌ Mail send failed:", error.message);
        
    }
  
    
}