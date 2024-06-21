import React from 'react'
import PropertyForm from '@/Components/PropertyForm'

const Create = ({ property }) => {
  return (
    <main>
      <PropertyForm property={ property }/>
    </main>
  )
}

export default Create