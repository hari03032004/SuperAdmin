import {useState} from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [clicked,setClicked] = useState(1);

  function handleClick(key) {
      setClicked(key);
    }
  
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li  
            key={number} 
            className={clicked == number ? "page-item-active" : "page-item"}>
            <a onClick={(event) =>{
              paginate(number);
              handleClick(number);
            } } 
                className='page-link'>
                {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;