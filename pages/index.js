import { client } from '../client'

const Home = ({ entries }) => {
  console.log('Home ===>>> ',entries.items.length)
  return (
    <section>
      <p>Hello World! This is Sahil's NextJS here</p>
    </section>
  )
}

export const getStaticProps = async () => {
  const entries = await client.getEntries();
  // const entries = await result.json();
  console.log('getStaticProps ===>>> ',entries.items.length)
  return {
    props: { entries: entries }
  }
}

export default Home