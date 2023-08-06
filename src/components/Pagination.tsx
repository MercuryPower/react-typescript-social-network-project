import React from 'react';
import Button from "../UI/Button/Button";
import Flex from "./Flex";
import {usePagination} from "../hooks/usePagination";

type PaginationProps = {
    totalPages:number;
    page:number;
    changePage:(currentPage:number) => void;
}
const Pagination = ({totalPages, page, changePage }:PaginationProps ) => {
    let pagesArray = usePagination(totalPages);
    return (
        <Flex justifyContent={'center'} alignItems={'center'} margin={'5rem'}>
            {pagesArray.map((p: number) => (
                <div className={'PagesNumeric'}>
                    <Button  onClick={() => changePage(p)} color={page === p ? '#FFFFFF' : '#000000'} background={page === p ? 'black' : 'white'} key={p}>
                        {p}
                    </Button>
                </div>
            ))}
        </Flex>
    );
};

export default Pagination;