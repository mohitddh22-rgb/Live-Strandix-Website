"use server";

import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const recipient = process.env.CONTACT_EMAIL_RECIPIENT || "info@strandixsystem.com";

export async function sendEstimateRequest(email: string) {
    console.log("Estimate Request Received:", email);

    if (!resend) {
        console.warn("RESEND_API_KEY not found. Email not sent.");
        return { success: true, message: "Request received (Development Mode)" };
    }

    try {
        await resend.emails.send({
            from: "Strandix System <onboarding@resend.dev>",
            to: [recipient],
            subject: "New Estimate Request",
            html: `<p>A new user has requested an estimate.</p><p><strong>Email:</strong> ${email}</p>`,
        });
        return { success: true, message: "Estimate request sent successfully!" };
    } catch (error) {
        console.error("Failed to send estimate email:", error);
        return { success: false, message: "Failed to send request. Please try again later." };
    }
}

export async function sendContactRequest(formData: {
    interest: string;
    budget: string;
    industry: string;
    message: string;
    name?: string;
    email?: string;
}) {
    console.log("Contact Request Received:", formData);

    if (!resend) {
        console.warn("RESEND_API_KEY not found. Email not sent.");
        return { success: true, message: "Message received (Development Mode)" };
    }

    try {
        await resend.emails.send({
            from: "Strandix System <onboarding@resend.dev>",
            to: [recipient],
            subject: `New Contact Inquiry: ${formData.interest}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Interest:</strong> ${formData.interest}</p>
                <p><strong>Budget:</strong> ${formData.budget}</p>
                <p><strong>Industry:</strong> ${formData.industry}</p>
                <p><strong>Message:</strong> ${formData.message || "No message provided"}</p>
            `,
        });
        return { success: true, message: "Your message has been sent successfully!" };
    } catch (error) {
        console.error("Failed to send contact email:", error);
        return { success: false, message: "Failed to send message. Please try again later." };
    }
}
