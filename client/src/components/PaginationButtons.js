import React from "react";
import ReactPaginate from "react-paginate";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {m, motion} from "framer-motion";
const PaginationButtons = ({setCurrentPage, currentPage, totalPages}) =>{
    const handlePageClick = ({selected}) => {
        setCurrentPage(selected);
    };
    const paginationVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition : {
                type: "spring",
                stiffness: 260,
                dampling: 20,
                duration: 1
            }
        }
    }
    const showNextButton = currentPage !== totalPages - 1;
    const showPrevButton = currentPage !== 0;
    return (
        <motion.div variants={paginationVariants} initial="hidden" animate="visible"> 
            <ReactPaginate
                breakLabel={
                    <span className="mr-4">... </span>
                }
                nextLabel={
                    showNextButton ? (
                        <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md">
                                <BsChevronRight />
                        </span>  
                    ): null
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel={
                    showPrevButton ? (
                        <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md mr-4">
                            <BsChevronLeft />
                        </span>
                    ) : null
                }
                //renderOnZeroPageCount={null}
                containerClassName="flex items-center justify-center mt-8 mb-4"
                pageClassName="block border- border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4"
                activeClassName="bg-green-500 text-white"
            />
        </motion.div>
    );
};
export default PaginationButtons;