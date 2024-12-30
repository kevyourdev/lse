const Episodes = () => {
  const episodes = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      description: "Learn the basics of web development and how to get started.",
      date: "2024-03-15",
      duration: "45 minutes"
    },
    {
      id: 2,
      title: "Modern JavaScript Frameworks",
      description: "Explore popular JavaScript frameworks and their use cases.",
      date: "2024-03-08",
      duration: "50 minutes"
    },
    {
      id: 3,
      title: "Building Scalable Applications",
      description: "Best practices for building scalable web applications.",
      date: "2024-03-01",
      duration: "55 minutes"
    }
  ]

  return (
    <div className="container max-w-4xl space-y-6">
      <h1 className="font-heading text-4xl">Episodes</h1>
      <div className="grid gap-6">
        {episodes.map((episode) => (
          <div key={episode.id} className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold">{episode.title}</h2>
            <p className="mt-2 text-muted-foreground">{episode.description}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{episode.date}</span>
              <span>{episode.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Episodes 