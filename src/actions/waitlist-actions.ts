"use server"

import { Resend } from "resend"
import OpenAI from "openai"

const resend = new Resend(process.env.RESEND_API_KEY)
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// async function sendWaitlistEmail(subject: string, content: string, to: string) {
//   try {
//     const data = await resend.emails.send({
//       from: "Lance <admin@lancetrips.com>",
//       to: to,
//       subject: subject,
//       text: content,
//     })

//     return { success: true, data }
//   } catch (error) {
//     console.error("Error sending waitlist email:", error)
//     return { success: false, error }
//   }
// }

// function generateWaitlistEmailHtml(email: string, dreamDestination: string, tripPlan: string): string {
//   return `
//     <html>
//       <head>
//         <style>
//           body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//           .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//           h1 { color: #007bff; }
//           .button { display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px; }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <h1>Welcome to Lance - Your Dream Trip Awaits!</h1>
//           <p>Thank you for joining the Lance waitlist!</p>
//           <p>We're excited to help you plan your dream trip to <strong>${dreamDestination}</strong>. Here's a sample 3-day itinerary to get you started:</p>
//           <p>${tripPlan}</p>
//           <p>This is just a taste of what Lance can offer. We'll be in touch soon with more personalized recommendations and updates on our launch.</p>
//           <p>Best regards,<br>The Lance Team</p>
//           <a href="https://lancetrips.com" class="button text-white">Visit Our Website</a>
//         </div>
//       </body>
//     </html>
//   `
// }

function generateWaitlistEmailHtml(email: string, dreamDestination: string, tripPlanJson: string): string {
  const tripPlan = JSON.parse(tripPlanJson);

  const formatDayPlan = (dayPlan: { activities: string[], dining: string[] }) => {
    const activities = dayPlan.activities.map(activity => `<li>${activity}</li>`).join('');
    const dining = dayPlan.dining.map(place => `<li>${place}</li>`).join('');
    return `
      <h3>Activities:</h3>
      <ul>${activities}</ul>
      <h3>Dining:</h3>
      <ul>${dining}</ul>
    `;
  };

  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #007bff; }
          .details { background-color: #f0f4f8; padding: 15px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to Lance - Your Dream Trip Awaits!</h1>
          <p>Thank you for joining the Lance waitlist!</p>
          <p>We're excited to help you plan your dream trip to <strong>${dreamDestination}</strong>. Here's a sample 3-day itinerary to get you started:</p>
          <div class="details">
            <h2>Day 1</h2>
            ${formatDayPlan(tripPlan.day1)}
            <h2>Day 2</h2>
            ${formatDayPlan(tripPlan.day2)}
            <h2>Day 3</h2>
            ${formatDayPlan(tripPlan.day3)}
          </div>
          <p>This is just a taste of what Lance can offer. We'll be in touch soon with more personalized recommendations and updates on our launch.</p>
          <p>Best regards,<br>The Lance Team</p>
          <a href="https://lancetrips.com" class="button text-white">Visit Our Website</a>
        </div>
      </body>
    </html>
  `;
}

async function sendWaitlistEmail(email: string, dreamDestination: string, tripPlan: string) {
  try {
    const emailHtml = generateWaitlistEmailHtml(email, dreamDestination, tripPlan)
    

    const data = await resend.emails.send({
      from: "Lance <waitlist-noreply@lancetrips.com>",
      to: email,
      subject: "Welcome to Lance - Your Dream Trip Awaits!",
      html: emailHtml,
    })

    return { success: true, data }
  } catch (error) {
    console.error("Error sending waitlist email:", error)
    return { success: false, error }
  }
}

function generateAdminNotificationHtml(email: string, dreamDestination: string): string {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #007bff; }
          .details { background-color: #f0f4f8; padding: 15px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Waitlist Signup</h1>
          <p>A new user has joined the Lance waitlist:</p>
          <div class="details">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Dream Destination:</strong> ${dreamDestination}</p>
          </div>
          <p>Please ensure to follow up with this user and provide any additional information they might need.</p>
        </div>
      </body>
    </html>
  `
}

async function sendAdminNotification(email: string, dreamDestination: string) {
  try {
    const emailHtml = generateAdminNotificationHtml(email, dreamDestination)

    const data = await resend.emails.send({
      from: "Lance Notifications <notifications-noreply@lancetrips.com>",
      to: "admin@lancetrips.com",
      subject: `New Waitlist Signup: ${email}`,
      html: emailHtml,
    })

    return { success: true, data }
  } catch (error) {
    console.error("Error sending admin notification:", error)
    return { success: false, error }
  }
}

// async function generateTripPlan(destination: string): Promise<string> {
//   try {
//     // Move OpenAI API call to server-side only
//     const completion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful travel assistant. Create a brief 3-day trip plan for the given destination.",
//         },
//         {
//           role: "user",
//           content: `Create a 3-day trip plan for ${destination}. Include main attractions, activities, and dining suggestions.`,
//         },
//       ],
//     })

//     return completion.choices[0].message.content || "Unable to generate trip plan."
//   } catch (error) {
//     console.error("Error generating trip plan:", error)
//     return "We're sorry, but we couldn't generate a trip plan at this time. Our team will be in touch with personalized recommendations soon!"
//   }
// }

async function generateTripPlan(destination: string): Promise<string> {
  try {
    // Move OpenAI API call to server-side only
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful travel assistant. Create a brief 3-day trip plan for the given destination in JSON format.",
        },
        {
          role: "user",
          content: `Create a 3-day trip plan for ${destination}. Include main attractions, activities, and dining suggestions. The response should be in JSON format with the following structure: {"day1": {"activities": [], "dining": []}, "day2": {"activities": [], "dining": []}, "day3": {"activities": [], "dining": []}}.`,
        },
      ],
    });

    const tripPlan = completion.choices[0].message.content;

    if (tripPlan) {
      // Parse the JSON response to ensure it is valid
      const parsedTripPlan = JSON.parse(tripPlan);
      return JSON.stringify(parsedTripPlan, null, 2); // Pretty-print the JSON
    } else {
      throw new Error("Received null or undefined trip plan from OpenAI");
    }
  } catch (error) {
    console.error("Error generating trip plan:", error);
    return JSON.stringify({
      error: "We're sorry, but we couldn't generate a trip plan at this time. Our team will be in touch with personalized recommendations soon!",
    });
  }
}

export async function joinAudience(email: string) {
  const audienceId = 'eb97a79c-f458-4a0e-9c5f-b2958bc29b88';

  try {
    // List all contacts in the audience
    const response = await resend.contacts.list({
      audienceId: audienceId,
    });

    // Access the array of contacts from the response
    const contacts = response.data?.data;
    console.log('Contacts:', contacts);

    const existingContact = contacts?.find(contact => contact.email === email);

    if (existingContact) {
      console.log('Contact already exists:', existingContact);
      return { success: true, message: 'Email is already in the waitlist.' };
    }

    // Contact not found, proceed to add
    const newContact = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: audienceId,
    });
    console.log('Contact added:', newContact);
    return { success: true, message: 'Email added to the waitlist.' };
  } catch (error) {
    console.error('Error processing contact:', error);
    return { success: false, message: 'Error processing email in the waitlist.' };
  }
}

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string
  const dreamDestination = formData.get("dreamDestination") as string

  if (!email || !dreamDestination) {
    return { success: false, error: "Email and dream destination are required" }
  }

  const audienceResult = await joinAudience(email);
  console.log('Audience result:', audienceResult);

  if (audienceResult.message === "Email is already in the waitlist.") {
    return { success: false, error: "You already joined our waitlist" };
  }

  try {
    // Generate trip plan server-side
      const tripPlan = await generateTripPlan(dreamDestination)
  
      const userResult = await sendWaitlistEmail(email, dreamDestination, tripPlan)
      const adminResult = await sendAdminNotification(email, dreamDestination)
  
      if (userResult.success && adminResult.success) {
        return { success: true }
      } else {
        return { success: false, error: "There was a problem sending emails" }
      }
    } catch (error) {
      console.error("Error in joinWaitlist:", error)
      return { success: false, error: "An unexpected error occurred" }
    }
}