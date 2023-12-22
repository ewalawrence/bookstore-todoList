import { getAllLists } from "@/api";
import AddTask from "./components/AddTask";
import BookList from "./components/BookList";

export default async function Home() {
  const tasks = await getAllLists();
  console.log(tasks);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap 4">
        <h1 className="text-2xl font-bold">Book Store App</h1>
        <AddTask/>
      </div>
      <BookList tasks = {tasks}/>
    </main>
  );
};
