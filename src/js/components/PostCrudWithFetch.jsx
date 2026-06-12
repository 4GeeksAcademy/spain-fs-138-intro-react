import React, { useEffect, useState } from "react";

export default function PostCRUD() {
    const [posts, setPosts] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // GET
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/posts?_limit=10"
                );
                const data = await res.json();
                setPosts(data);
                setLoading(false);
            } catch {
                setError("Error loading posts");
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    // POST
    const handleAdd = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: newTitle, body: "content", userId: 1 }),
            });
            const post = await res.json();
            setPosts([post, ...posts]);
            setNewTitle("");
        } catch {
            setError("Error adding post");
        }
    };

    // PUT
    const handleEdit = async (id) => {
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        id: id,
                        title: editTitle,
                        body: "edited content",
                        userId: 1,
                    }),
                }
            );
            const updated = await res.json();
            setPosts(posts.map((p) => (p.id === id ? updated : p)));
            setEditId(null);
            setEditTitle("");
        } catch {
            setError("Error editing post");
        }
    };

    // DELETE
    const handleDelete = async (id) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "DELETE",
            });
            setPosts(posts.filter((p) => p.id !== id));
        } catch {
            setError("Error deleting post");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="card p-3 mb-4">
            <h4 className="mb-3">Posts CRUD Example</h4>
            <div className="mb-2 d-flex">
                <input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="New post title"
                    className="form-control me-2"
                />
                <button className="btn btn-success" onClick={handleAdd}>
                    Add
                </button>
            </div>
            <ul className="list-group">
                {posts.map((post) => (
                    <li
                        key={post.id}
                        className="list-group-item d-flex align-items-center"
                    >
                        {editId === post.id ? (
                            <>
                                <input
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    placeholder="Edit title"
                                    className="form-control me-2"
                                />
                                <button
                                    className="btn btn-primary btn-sm me-2"
                                    onClick={() => handleEdit(post.id)}
                                >
                                    Save
                                </button>
                                <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => {
                                        setEditId(null);
                                        setEditTitle("");
                                    }}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <span className="me-2">{post.title}</span>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => {
                                        setEditId(post.id);
                                        setEditTitle(post.title);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(post.id)}
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
