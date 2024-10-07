import React, { useState } from 'react'

interface FormData {
  name: string
  email: string
  question1: string
  question2: string
  question3: string
}

interface Props {
  onSubmit: (data: FormData) => void
}

const PersonalityForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    question1: '',
    question2: '',
    question3: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="question1" className="block text-sm font-medium text-gray-700">How do you prefer to spend your free time?</label>
        <select
          id="question1"
          name="question1"
          value={formData.question1}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select an option</option>
          <option value="alone">Alone, reading or watching movies</option>
          <option value="friends">With friends, socializing</option>
          <option value="outdoors">Outdoors, enjoying nature</option>
          <option value="creative">Engaging in creative activities</option>
        </select>
      </div>
      <div>
        <label htmlFor="question2" className="block text-sm font-medium text-gray-700">How do you handle stress?</label>
        <select
          id="question2"
          name="question2"
          value={formData.question2}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select an option</option>
          <option value="exercise">Exercise or physical activity</option>
          <option value="meditate">Meditate or practice mindfulness</option>
          <option value="talk">Talk to friends or family</option>
          <option value="work">Dive into work or a hobby</option>
        </select>
      </div>
      <div>
        <label htmlFor="question3" className="block text-sm font-medium text-gray-700">How do you approach decision-making?</label>
        <select
          id="question3"
          name="question3"
          value={formData.question3}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select an option</option>
          <option value="logical">Analyze pros and cons logically</option>
          <option value="intuitive">Trust your gut feeling</option>
          <option value="consult">Consult others for advice</option>
          <option value="avoid">Avoid making decisions when possible</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  )
}

export default PersonalityForm