import { client } from '../client'

const Home = ({ entries }) => {
  // console.log('Home ===>>> ',entries)
  return (
    <section>
      <h2>Sahil's Pages</h2>
      {
        entries.items.map((item, idx) => {
          return (
            <p key={idx}>{item.fields.name}</p>
          )
        })
      }
    </section>
  )
}

export const getStaticProps = async () => {
  const entries = await client.getEntries({
    content_type: 'page'
  });
  // const entries = await result.json();
  console.log('getStaticProps ===>>> ',entries.items.length)
  return {
    props: { entries: entries }
  }
}

export default Home