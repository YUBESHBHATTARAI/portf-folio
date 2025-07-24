 Contact Form Setup Guide

## EmailJS Configuration

To make the contact form functional, you need to set up EmailJS. Follow these steps:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create an Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail (recommended) or any other email provider
4. Connect your Gmail account (yubeshbhattarai@gmail.com)
5. Note down the Service ID (e.g., "service_xxxxxxx")

### 3. Create an Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

Hello Yubesh,

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Use these variable names in the template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content

5. Set the "To Email" as: yubeshbhattarai@gmail.com
6. Note down the Template ID (e.g., "template_xxxxxxx")

### 4. Get Public Key
1. Go to "Account" -> "General"
2. Find your Public Key
3. Note it down (e.g., "xxxxxxxxxxxxxxx")

### 5. Update Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test the Form
1. Restart your Next.js development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your Gmail inbox for the test message

## Security Notes
- EmailJS allows 200 free emails per month
- Your EmailJS keys are public (they're used in the browser)
- For production, consider adding reCAPTCHA to prevent spam
- The form validates input on the client side

## Troubleshooting
- Make sure your environment variables start with `NEXT_PUBLIC_`
- Restart your dev server after updating `.env.local`
- Check the browser console for any error messages
- Verify your EmailJS template variable names match exactly

## Alternative: Server-Side Email (Advanced)
If you prefer a more secure server-side solution, you can:
1. Create a Next.js API route (`/api/contact`)
2. Use Nodemailer with Gmail App Passwords
3. Keep email credentials server-side only

Let me know if you need help setting up the server-side approach!
