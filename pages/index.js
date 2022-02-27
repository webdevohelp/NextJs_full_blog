import Head from 'next/head';
import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

import { getFeaturedPosts } from '../helpers/posts-util';

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Study Mantra</title>
                <meta
                    name="description"
                    content="Here we post content related to government exams' preperation."
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
}
export default HomePage;

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
        revalidate: 1200,
    };
}
