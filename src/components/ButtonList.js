import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All" />
      <Button name="Real Madrid C.F." />
      <Button name="Music" />
      <Button name="Good Mythical Morning" />
      <Button name="Superhero Movies" />
      <Button name="Sports" />
      <Button name="Film Reviews" />
      <Button name="Formula 1" />
      <Button name="Science Fiction" />
      <Button name="Technology" />
    </div>
  )
}

export default ButtonList