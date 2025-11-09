import nodemailer from 'nodemailer'
import 'dotenv/config'
import { text } from 'express'
import fs from "fs"
import path from 'path'
import { fileURLToPath } from 'url'
import handlebars from 'handlebars'

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

export const verifyMail=async(token,email)=>{

    const emailTemplateSource=fs.readFileSync(
        path.join(__dirname,"template.hbs"),
        "utf-8"
    )

    const templete=handlebars.compile(emailTemplateSource)
    const htmlToSend=templete({token:encodeURIComponent(token)})

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
    })

    const mailConfigurations={
        from:process.env.MAIL_USER,
        to:email,
        subject:"email verification",
        // text:"Hey this is just a testing email"
        html:htmlToSend,
    }

    transporter.sendMail(mailConfigurations, function(error, info){
        if(error){
            throw new Error(error)
        }
        console.log("Email send successfully");
        console.log(info)
    })
}