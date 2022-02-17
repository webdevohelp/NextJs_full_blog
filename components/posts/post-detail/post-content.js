import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
    slug: 'Cats are awesome!',
    title: 'Cats',
    image: '1.JPG',
    date: '2022-02-10',
    content: '# This is a first post',
};

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            {DUMMY_POST.content}
        </article>
    );
}

export default PostContent;
