'use client'; 
import { ITask } from "@/types/tasks"
import React, { FormEventHandler, useState } from "react"
import { CiEdit } from "react-icons/ci";
import { BsTrash3 } from "react-icons/bs";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteListItem, editList } from "@/api";

interface ListProps {
    task: ITask
}

const List: React.FC<ListProps> = ({task}) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false); 
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false); 
  const [listToEdit, setListToEdit] = useState<string>(task.text)

  const handleSubmitEditList: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editList({
      id: task.id,
      text: listToEdit,
    });
    setListToEdit("");
    setOpenModalEdit(false);
    router.refresh();
    };

    const handleDeleteListItem = async ( id: string ) => {
        await deleteListItem(id);
        setOpenModalDeleted(false);
        router.refresh();
    };

  return (
    <tr key={task.id}>
    <td className="w-full">{task.text}</td>
    <td className="flex gap-2">
    <CiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className='text-blue-500' size={25}/> 

    <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleSubmitEditList}>
            <h3 className="font-bold  text-lg">Edit List</h3>
            <div className="modal-action">
            <input 
            value={listToEdit}
            onChange={(e)=> setListToEdit(e.target.value)}
            type="text" 
            placeholder="Type here" 
            className="input input-bordered w-full " 
            />
            <button type="submit" className="btn">Submit</button>
             </div>
           </form>
    </Modal>

    <BsTrash3 onClick={() => setOpenModalDeleted(true)} cursor="pointer" className='text-red-500' size={20}/>

    <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
      <h3 className="text-lg">
        Do you still want to proceed to deleting this item?
        </h3>
        <div className="modal-action">
          <button
          onClick={() => handleDeleteListItem(task.id)} 
          className="btn"
          >
            Yes proceed...
          </button>
        </div>
    </Modal>

    </td>
  </tr>
  )
}

export default List;