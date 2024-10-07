import React, { useState } from 'react'
import { User, Send } from 'lucide-react'
import PersonalityForm from './components/PersonalityForm'

function App() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <User className="text-indigo-600 w-10 h-10 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Personality Identifier</h1>
        </div>
        {!submitted ? (
          <PersonalityForm onSubmit={handleSubmit} />
        ) : (
          <div className="text-center">
            <Send className="text-green-500 w-16 h-16 mx-auto mb-4" />
            <p className="text-xl font-semibold text-gray-700">Thank you for submitting!</p>
            <p className="text-gray-600 mt-2">We'll analyze your personality and get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App