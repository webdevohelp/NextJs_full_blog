import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
    {
        slug: 'Cats are awesome!',
        title: 'Cats',
        image: '1.JPG',
        excerpt: 'All Posts> Cats are sooooo awesome!!!',
        date: '2022-02-10',
    },
    {
        slug: 'Cats are awesome!22',
        title: 'Cats',
        image: '1.JPG',
        excerpt: 'All Posts> Cats are sooooo awesome!!!',
        date: '2022-02-10',
    },
];

function AllPostsPage() {
    return <AllPosts posts={DUMMY_POSTS} />;
}
export default AllPostsPage;
