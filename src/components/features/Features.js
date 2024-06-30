import React from 'react'
import Title from '../layouts/Title'
import { featuresData } from '../../data/Data'
import Card from './Card'

function Features() {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
      <Title title="Features" des="What I do" />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl-gap-20'>
{featuresData.map((feature)=>(
  <Card item={feature} key={feature.id}/>
))}
      </div>
    </section>
  )
}

export default Features
