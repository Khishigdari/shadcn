import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PagePagination = () => {
  return (
    <div className="w-[1437px] mb-[25px]">
      <Pagination className="mt-[32px] mr-[80px] w-[1277px] flex justify-end">
        <PaginationContent>
          <PaginationItem>
            {/* className="py-[8px] px-[16px] rounded-[6px] bg-[#FFFFFF]" */}
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PagePagination;
