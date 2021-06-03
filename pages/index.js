import { client } from '../client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    client.getEntries()
      .then(function (entries) {
        console.log(entries) // 200
      })
  })

  return (
    <section>
      <p>Hello World! This is Sahil's NextJS here</p>
    </section>
  )
}
