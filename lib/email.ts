import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

interface EmailData {
  to: string
  subject: string
  template: string
  data: any
}

const templates: Record<string, (data: any) => string> = {
  "quote-confirmation": (data) => `
    <h2>Hello ${data.firstName},</h2>
    <p>Thank you for requesting a quote for Kuiper satellite internet installation!</p>
    <p><strong>Quote ID:</strong> ${data.quoteId}</p>
    <p><strong>Service Address:</strong> ${data.address}</p>
    <p><strong>Estimated Price:</strong> $${data.estimatedPrice}</p>
    <p>We've notified available technicians in your area. You'll receive an update within 24 hours.</p>
    <p>Best regards,<br>The KuiperPros Team</p>
  `,
  
  "new-job-notification": (data) => `
    <h2>Hello ${data.firstName},</h2>
    <p>A new installation opportunity is available in ${data.location}!</p>
    <p><strong>Job ID:</strong> ${data.jobId}</p>
    <p><strong>Estimated Payout:</strong> $${data.estimatedPayout}</p>
    <p>Log in to your dashboard to view details and accept this job.</p>
    <p>Best regards,<br>The KuiperPros Team</p>
  `,
  
  "technician-assigned": (data) => `
    <h2>Hello ${data.firstName},</h2>
    <p>Great news! A technician has been assigned to your installation.</p>
    <p><strong>Technician:</strong> ${data.technicianName}</p>
    <p><strong>Company:</strong> ${data.companyName || "Independent Technician"}</p>
    <p>They will contact you within 24 hours to schedule your installation.</p>
    <p>Best regards,<br>The KuiperPros Team</p>
  `,
  
  "job-accepted": (data) => `
    <h2>Hello ${data.firstName},</h2>
    <p>You've successfully accepted a new job!</p>
    <p><strong>Job ID:</strong> ${data.jobId}</p>
    <p><strong>Customer:</strong> ${data.customerName}</p>
    <p><strong>Address:</strong> ${data.address}</p>
    <p><strong>Your Payout:</strong> $${data.payout}</p>
    <p>Please contact the customer within 24 hours to schedule the installation.</p>
    <p>Best regards,<br>The KuiperPros Team</p>
  `,
  
  "technician-approved": (data) => `
    <h2>Congratulations ${data.firstName}!</h2>
    <p>Your application to join KuiperPros has been approved!</p>
    <p>You can now log in to your dashboard and start accepting installation jobs.</p>
    <p><a href="${data.loginUrl}">Log In to Your Dashboard</a></p>
    <p>Welcome to the team!</p>
    <p>Best regards,<br>The KuiperPros Team</p>
  `
}

export async function sendEmail({ to, subject, template, data }: EmailData) {
  try {
    const html = templates[template](data)
    
    const msg = {
      to,
      from: process.env.EMAIL_FROM!,
      subject,
      html
    }
    
    await sgMail.send(msg)
    
    return { success: true }
  } catch (error) {
    console.error("Email send error:", error)
    throw error
  }
}