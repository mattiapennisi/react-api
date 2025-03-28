export default function Main({ posts, setPosts }) {
    return (
        <main id="main">
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col" className="fw-bold h4">Name</th>
                            <th scope="col" className="fw-bold h4">Image</th>
                            <th scope="col" className="fw-bold h4">Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts && posts.map(post => (
                            <tr key={post.slug}>
                                <td scope="row">{post.title}</td>
                                <td>{post.image}</td>
                                <td><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}