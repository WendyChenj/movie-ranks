import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";

import { GetStaticProps } from "next";

import styles from "../styles/Home.module.css";

interface Post {
  title: string;
}

interface ResultRes {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  video_average?: number;
}

interface PostRes {
  page: number;
  results: ResultRes[];
  total_results: number;
  total_pages: number;
}

interface ReProps {
  imPosts: Post[];
}

const Home = ({ imPosts }: ReProps) => {
  console.log("executing");
  return (
    <Layout>
      <ul className={styles.movieContainer}>
        {imPosts.map((post) => (
          <MovieCard title={post.title} />
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=5f7293e6512e3aa75bac684d74986d90&language=en-US&page=1"
  );
  const posts: PostRes = await res.json();

  const imPosts = posts.results.map((ele) => ({ title: ele.original_title }));

  return {
    props: {
      imPosts,
    },
  };
};

export default Home;
