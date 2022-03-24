import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { ALL_LINKS, GET_ALL_IMAGES } from '../graphql/queries'
import styles from '../styles/Home.module.css'
import { apolloClient } from './_app'
import Image from 'next/image'

interface Image {
  id?: String;
  url: String;
  name?: String;
  description?: String;
  tagId?: String;
}

interface ImagesPageProps {
  images: Image[];
  data: String;
}

const ImagesPage: NextPage<ImagesPageProps> = ({ images, data }) => {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Images
        </h1>

        <p>{data}</p>
        {images.map((image) =>
          <Image
            key={image.id}
            src={image.url}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        )}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apolloClient.query({ query: GET_ALL_IMAGES })

  return {
    props: {
      images: data.GetAllImages,
      data: 'something',
    },
  }
}

export default ImagesPage
