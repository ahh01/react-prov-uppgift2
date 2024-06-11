import Link from "next/link";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Post titlar</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
