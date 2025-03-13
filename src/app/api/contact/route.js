import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST( request ) {

    try {
        const {name, phone, email, message} = await request.json();

        const transporter = nodemailer.createTransport({

            host: "smtp.gmail.com",                     // service: 'zoho',
            port: 587,                                  // port: 465,
            secure: false,                              // Use `true` for port 465, `false` for all other ports              // secure: true,
            auth: {
                user: 'tianxiaozhang@gmail.com',
                pass: "pmtinzarrtkcebnv",               // pass: process.env.NEXT_PUBLIC_PASSWORD
            }
        });

        var mailOption = {
            from: `${name}`,
            replyTo: `${email}`,
            to: 'tianxiaozhang@gmail.com',
            subject: `${name} sent an email`,
            html: `
                Sent via form submission from contact page

                <div><b>Name</b>: ${name}</div>
                <div><b>Email Address</b>: ${email}</div>
                <div><b>Phone</b>: ${phone}</div>
                <div><b>Message</b>: ${message}</div>
            `
        }

        transporter.sendMail(mailOption)
    
    return NextResponse.json({ message: "Email Sent" }, { status: 200 })
    }   
    catch (error) {
        return NextResponse.json({ message: "Did Not Send" }, { status: 500 })
    }
    

}