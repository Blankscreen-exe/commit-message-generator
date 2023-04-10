import React from 'react'

export default function Display(props) {
  return (
    <div>Display
        <h1>{props.title}</h1>
        <h1>{props.body}</h1>
    </div>
  )
}
