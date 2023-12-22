import { ITask } from "@/types/tasks";
import React from "react";
import List from "./List";

interface BookListProps {
  tasks: ITask[];
}

const BookList: React.FC<BookListProps>  = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Book Title</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (<List key={task.id} task={task}/> 
      ))}
    </tbody>
  </table>
</div>
  );
};

export default BookList;

