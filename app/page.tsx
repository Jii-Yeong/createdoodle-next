import PostList from '@/components/list/PostList';
import {postList} from '@/data/posts/types/post-list.data';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <PostList list={postList} />
    </div>
  );
}
