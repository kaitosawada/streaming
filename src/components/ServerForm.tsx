import type { FormData } from '@/types/form'

async function getFormData(): Promise<FormData> {
  const res = await fetch('http://localhost:3000/api/form-data', {
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
  return res.json()
}

export default async function ServerForm() {
  const formData = await getFormData()

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Server Form</h1>
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
            {formData.categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Optional Item</label>
          <select
            name="optionalItem"
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select optional item</option>
            {formData.optionalItems.map(item => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        
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