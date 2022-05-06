import { useState } from 'react';

export const usePagination = (data, cnt) => {
    const [currentPage, setCarrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / cnt);

    const current = () => {
        const start = (currentPage - 1) * cnt;
        const end = start + cnt;
        try {
           return data.slice(start, end)
        }
        catch (error) {
           window.location.reload()
        }
 
    };

    const jump = (page) => {
        setCarrentPage(page);
    };

  return { currentPage, maxPage, current, jump }
};
