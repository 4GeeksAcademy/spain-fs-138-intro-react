import React, { useState } from "react";

// Datos iniciales en memoria (misma estructura que la API de JSONPlaceholder)
const initialPosts = [
    { userId: 1, id: 1, title: "Primer post", body: "content" },
    { userId: 1, id: 2, title: "Segundo post", body: "content" },
    { userId: 1, id: 3, title: "Tercer post", body: "content" },
];

export default function PostCrudWithOutFetch() {
    const [posts, setPosts] = useState(initialPosts);
    const [newTitle, setNewTitle] = useState("");
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState("");

    // CREATE: agrega un post al estado
    const handleAdd = () => {
        if (!newTitle.trim()) return;
        // id único: el mayor id existente + 1 (o 1 si la lista está vacía)
        const nextId = posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
        const post = { id: nextId, title: newTitle };
        setPosts([post, ...posts]);
        setNewTitle("");
    };

    // UPDATE: reemplaza el título del post editado
    const handleEdit = (id) => {
        setPosts(posts.map((p) => (p.id === id ? { ...p, title: editTitle } : p)));
        setEditId(null);
        setEditTitle("");
    };

    // DELETE: filtra el post del estado
    const handleDelete = (id) => {
        setPosts(posts.filter((p) => p.id !== id));
    };

    return (
        <div className="card p-3 mb-4">
            <h4 className="mb-3">Posts CRUD Example (estado local)</h4>
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
