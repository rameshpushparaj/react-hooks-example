import React from "react";
const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumbers.map((pageNumber) => (
        <li className="page-item">
          <a
            onClick={() => paginate(pageNumber)}
            href="!#"
            className="page-link"
          >
            {pageNumber}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
