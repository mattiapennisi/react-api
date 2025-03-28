export default function Main({ posts, setPosts }) {
    function handleDelete(slug) {
        fetch(`http://localhost:3000/posts/${slug}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res.ok) {
                    setPosts(posts.filter(post => post.slug !== slug))
                } else {
                    throw new Error('Delete failed')
                }
            })
            .catch(error => {
                console.error('Error:', error)
            })
    }

    return (
        <main id="main" className="container py-4">
            <div className="table-responsive shadow rounded">
                <table className="table table-hover mb-0">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col" className="fw-bold">Name</th>
                            <th scope="col" className="fw-bold">Image</th>
                            <th scope="col" className="fw-bold text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts && posts.map(post => (
                            <tr key={post.slug}>
                                <td className="align-middle">{post.title}</td>
                                <td className="align-middle">
                                    <img
                                        src={`http://localhost:3000/public/imgs/posts/${post.image}`}
                                        alt={post.title}
                                        className="img-thumbnail"
                                    />
                                </td>
                                <td className="align-middle text-center">
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(post.slug)}
                                    >
                                        <i className="fa-solid fa-trash me-2"></i>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}