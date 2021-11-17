const API = 'http://192.168.43.190:3000/api/shoes';

export const getShoes = async () => {
    const res = await fetch(API);
    return await res.json();
};