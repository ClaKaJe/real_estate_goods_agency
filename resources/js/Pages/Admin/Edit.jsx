import PropertyForm from '@/Components/PropertyForm'
import React from 'react'

const Edit = ({ property }) => {
  return (
    <main>
      <PropertyForm property={ property }/>
    </main>
  )
}

export default Edit