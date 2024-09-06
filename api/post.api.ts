export const getPostMd = async (id: string) => {
  const response = await fetch(`http://localhost:3000/posts/${id}.md`);
  return response.text();
};
