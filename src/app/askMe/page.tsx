'use client'
import emailjs from 'emailjs-com'



import { Button } from "@/Components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { useState } from "react"

export default function AskMePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData, // It must match keys in your EmailJS template
      'YOUR_PUBLIC_KEY'
    )
    alert("Message sent successfully!")
    setFormData({ name: '', email: '', subject: '', message: '' })
  } catch (error) {
    console.error("EmailJS Error:", error)
    alert("Failed to send message.")
  }

  setIsSubmitting(false)
}




  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2 sm:p-4 relative overflow-hidden mt-[4rem] md:mt-[5rem]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-gray-700 via-black to-gray-800 bg-clip-text text-transparent">
            Ask Me
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-8 px-4">
            Have a question? I'd love to hear from you
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-gray-700 to-black mx-auto rounded-full"></div>
        </div>

        {/* Contact Form Card */}
        <Card className="bg-white border border-gray-200 shadow-lg sm:shadow-2xl hover:shadow-gray-500/25 transition-all duration-500 hover:scale-105 mx-2 sm:mx-0">
          <CardHeader className="space-y-1 pb-4 sm:pb-6 px-4 sm:px-6">
            <CardTitle className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
              Send me a message
            </CardTitle>
            <CardDescription className="text-center text-gray-600 text-sm sm:text-base px-2">
              Ask me anything about my work, projects, or just say hello
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 pb-6">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium text-sm sm:text-base">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-gray-800 focus:ring-gray-800 transition-all duration-300 text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium text-sm sm:text-base">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-gray-800 focus:ring-gray-800 transition-all duration-300 text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="subject" className="text-gray-700 font-medium text-sm sm:text-base">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's your question about?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-gray-800 focus:ring-gray-800 transition-all duration-300 text-sm sm:text-base h-10 sm:h-11"
                />
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="message" className="text-gray-700 font-medium text-sm sm:text-base">
                  Your Question
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Ask me anything about my projects, skills, or experience..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-500 focus:border-gray-800 focus:ring-gray-800 focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base mt-4 sm:mt-6"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                    <span className="text-sm sm:text-base">Sending...</span>
                  </div>
                ) : (
                  <span className="text-sm sm:text-base">Send Question</span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
