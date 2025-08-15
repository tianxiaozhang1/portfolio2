import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // Set up your email transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Use 'true' for 465, 'false' for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailData = {
            from: email,
            to: 'tianvercel@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        await transporter.sendMail(mailData);
        
        // Use NextResponse to return a JSON response
        return NextResponse.json({ status: 'OK' });
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
}