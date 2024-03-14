import React from 'react';
import Pagination from '@mui/material/Pagination';

export default function PaginationComponent(props) {
    const {
        page,
        setPage,
        totalNoOfPages,
    } = props;

    const onPaginationChange = ( _ , updatedPage) => {
        setPage(updatedPage);
    }

    return (
        <Pagination page={page} onChange={onPaginationChange} count={totalNoOfPages} shape="rounded" size='large' />
    );
}