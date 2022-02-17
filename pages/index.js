import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

import { getFeaturedPosts } from '../helpers/posts-util';

function HomePage(props) {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
}
export default HomePage;

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    console.log(featuredPosts);

    return {
        props: {
            posts: featuredPosts,
        },
        revalidate: 1200,
    };
}
