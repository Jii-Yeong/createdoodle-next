'use client';

import {PostListItemType} from '@/types/post.types';
import Image from 'next/image';

type PostListItemProps = {
  item: PostListItemType;
};

export default function PostListItem({item}: PostListItemProps) {
  const thumbnail = require(`@/data/posts/thumbnail/${item.thumbnail}.png`);
  return (
    <div className="flex flex-row bg-[#ffffff] rounded-lg p-6">
      <div className="flex flex-col gap-y-2 flex-1">
        <p className="text-[#7b71be]">{item.category}</p>
        <p className="text-xl">{item.title}</p>
      </div>
      <Image src={thumbnail} alt="post-thumbnail" width={128} height={80} />
    </div>
  );
}
