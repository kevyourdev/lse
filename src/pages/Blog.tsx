const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies in web development.",
      date: "2024-03-15",
      author: "John Doe"
    },
    {
      id: 2,
      title: "Building Better User Interfaces",
      excerpt: "Tips and tricks for creating intuitive and accessible UIs.",
      date: "2024-03-08",
      author: "Jane Smith"
    },
    {
      id: 3,
      title: "State Management in Modern Apps",
      excerpt: "Understanding different approaches to state management.",
      date: "2024-03-01",
      author: "Mike Johnson"
    }
  ]

  return (
    <div className="container max-w-4xl space-y-6">
      <h1 className="font-heading text-4xl">Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="group relative rounded-lg border p-6">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span>By {post.author}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog 