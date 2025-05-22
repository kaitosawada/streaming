async function getOptionalItems() {
  const res = await fetch('http://localhost:3000/api/optional-items')
  const data = await res.json()
  return data.optionalItems
}

export default async function OptionalItemsSelect() {
  const optionalItems = await getOptionalItems()

  return (
    <div>
      <label className="block text-sm font-medium mb-1">Optional Item</label>
      <select
        name="optionalItem"
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        <option value="">Select optional item</option>
        {optionalItems.map((item: string) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}