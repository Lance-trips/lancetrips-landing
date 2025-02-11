"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)


async function sendApplicationEmail(subject: string, content: string, attachment: File) {
    try {
      const buffer = await attachment.arrayBuffer()
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "admin@lancetrips.com",
        subject: subject,
        text: content,
        attachments: [
          {
            filename: attachment.name,
            content: Buffer.from(buffer),
          },
        ],
      })
  
      return { success: true, data }
    } catch (error) {
      console.error("Error sending application email:", error)
      return { success: false, error }
    }
  }
  
  export async function submitApplication(formData: FormData) {
    const email = formData.get("email") as string
    const about = formData.get("about") as string
    const cv = formData.get("cv") as File
  
    if (!email || !about || !cv) {
      return { success: false, error: "All fields are required" }
    }
  
    const subject = "New Job Application"
    const content = `A new job application has been submitted:
  
  Email: ${email}
  
  About: ${about}
  
  CV: ${cv.name}`
  
    return sendApplicationEmail(subject, content, cv)
  }