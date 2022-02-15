import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
    {
        slug: 'Cats are awesome!',
        title: 'Cats',
        image: '1.JPG',
        excerpt: 'Cats are sooooo awesome!!!',
        date: '2022-02-10',
    },
    {
        slug: 'Cats are awesome!22',
        title: 'Cats',
        image: '1.JPG',
        excerpt: 'Cats are sooooo awesome!!!',
        date: '2022-02-10',
    },
];

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    );
}
export default HomePage;
