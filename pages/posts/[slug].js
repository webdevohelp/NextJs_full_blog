// @ts-nocheck
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../helpers/posts-util';

function PostDetailPage(props) {
    return <PostContent post={props.post} />;
}

export default PostDetailPage;

export function getStaticProps(context) {
    const { params } = context;

    const { slug } = params;

    const postData = getPostData(slug);
    return {
        props: {
            post: postData,
        },
        revalidate: 1200,
    };
}

export function getStaticPaths() {
    const postFilenames = getPostsFiles();
    const slugs = postFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );
    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: true,
    };
}
