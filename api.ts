import { ITask } from "./types/tasks";


const baseUrl = 'http://localhost:3001';

export const getAllLists = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/posts`, {cache: 'no-store'});
    const lists = await res.json();
    return lists;
};

// post api
export const addList = async (list: ITask): Promise<ITask> => {
    const res = await fetch (`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(list)
    })
    const newList = await res.json();
    return newList;
}

// edit api
export const editList = async (list: ITask): Promise<ITask> => {
    const res = await fetch (`${baseUrl}/posts/${list.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(list)
    })
    const updatedList = await res.json();
    return updatedList;
}

// delete api
export const deleteListItem = async (id: string): Promise<void> => {
    await fetch (`${baseUrl}/posts/${id}`, {
        method: 'DELETE',
    })
}