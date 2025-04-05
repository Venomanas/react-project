

import React from 'react'

function Card() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
        <img
        src="https://images.unsplash.com/photo-1666904428342-6975acc1735d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="namibia image"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">This is a Card</h2>
      <p className="text-gray-600">Tailwind is working fine 🎉</p>
    </div>
  )
}

export default Card
