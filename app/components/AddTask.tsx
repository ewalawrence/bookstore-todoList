'use client'

import { FaRegSquarePlus } from "react-icons/fa6";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addList } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';


const AddTask = () => {
const router = useRouter();

const [modalOpen, setModalOpen] = useState<boolean>(false); 

const [newListValue, setNewListValue] = useState<string>(''); 

const handleSubmitNewList: FormEventHandler<HTMLFormElement> = async (e) => {
e.preventDefault();

await addList({
  id: uuidv4(),
  text: newListValue,
});
setNewListValue("");
setModalOpen(false);
router.refresh();
};
  return (
    <div>
        <button
        
            onClick={() => setModalOpen(true)}
        className="btn btn-info w-full">
           <form >
            <h3 className="font-bold text-lg">Add new book</h3>
           </form>
            <FaRegSquarePlus />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <form onSubmit={handleSubmitNewList}>
            <h3 className="font-bold text-lg">Add new book</h3>
            <div className="modal-action">
            <input 
            value={newListValue}
            onChange={(e)=> setNewListValue(e.target.value)}
            type="text" 
            placeholder="Type here" 
            className="input input-bordered w-full " 
            />
            <button type="submit" className="btn">Submit</button>
             </div>
           </form>
            </Modal>
    </div>
  )}
export default AddTask