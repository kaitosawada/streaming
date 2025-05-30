import { Suspense } from 'react'
import OptionalItemsSelect from './OptionalItemsSelect'

function OptionalItemsLoading() {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Optional Item</label>
      <div className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 animate-pulse h-10"></div>
    </div>
  )
}

export default function StreamingForm() {
  const staticCategories = ['Technology', 'Design', 'Marketing', 'Sales']

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Streaming Form</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Select category</option>
            {staticCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <Suspense fallback={<OptionalItemsLoading />}>
          <OptionalItemsSelect />
        </Suspense>
        
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
