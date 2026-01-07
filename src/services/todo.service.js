import { db } from "../config/firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

export const addTodo = (userId, data) =>
  addDoc(collection(db, "todos"), { ...data, userId });

export const getTodos = async (userId) => {
  const snapshot = await getDocs(collection(db, "todos"));
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(todo => todo.userId === userId);
};

export const updateTodo = (id, data) =>
  updateDoc(doc(db, "todos", id), data);

export const deleteTodo = (id) =>
  deleteDoc(doc(db, "todos", id));
