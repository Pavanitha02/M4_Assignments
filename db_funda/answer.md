# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

`db.json` is a file-based storage system and is not suitable for real-world or production-level applications due to several limitations.

### Limitations of File-Based Storage:

**Performance:**
- Every read or write operation requires reading the entire file.
- As data grows, operations become slow.
- Not optimized for frequent queries or large datasets.

**Scalability:**
- Cannot handle large amounts of data efficiently.
- Not suitable when multiple users access data at the same time.
- Difficult to scale when the application grows.

**Reliability:**
- High risk of data corruption if the server crashes during a write operation.
- No automatic backup or recovery mechanisms.
- No transaction support (commit / rollback).

Because of these reasons, `db.json` is only suitable for learning, testing, or small demo projects.

---

## 2. What are the ideal characteristics of a database system (apart from just storage)?

A good database system does much more than just store data. Some important characteristics are:

**Performance:**
- Should fetch and update data quickly.
- Optimized queries even for large datasets.

**Concurrency:**
- Multiple users should be able to access and modify data at the same time without conflicts.

**Reliability:**
- Data should not be lost even
