import Head from 'next/head';
import Link from 'next/link';
import posts from '../data/posts';
import styles from './page.module.css';

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Amazing Blog</title>
        <meta name="description" content="A blog showcasing interesting articles." />
      </Head>
      <h1 className={styles.heading}>Welcome to My Blog</h1>
      <div className={styles.postList}>
        {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.id} className={styles.postTitle}>
          <div  className={styles.postCard}>
              <h2>{post.title}</h2>
              <p className={styles.showMore}>Show more</p>
          </div>
            </Link>
        ))}
      </div>
    </div>
  );
}