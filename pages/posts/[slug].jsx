import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import posts from '../../data/posts';
import styles from './[slug].module.css';

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((post) => post.slug === params.slug);
  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.substring(0, 150) + '...'} />
      </Head>
      <h1 className={styles.title}>{post.title}</h1>
      {post.image && (
        <div className={styles.imageContainer}>
          <img src={`/Assets/${post.image}`} alt={post.title} className={styles.image} />
        </div>
      )}
      <p className={styles.content}>{post.content}</p>
      <Link href="/" className={styles.backLink}>
        Back to Homepage
      </Link>
    </div>
  );
}