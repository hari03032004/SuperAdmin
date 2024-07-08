import {useState} from "react";
import "../index.css"
import Topbar from "../components/Topbar";
import Table from "../components/Table";
import Searchbar from "../components/Searchbar";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { HospitalData } from "../components/HospitalData";
import { Modal } from "../components/Modal";



function Dashboard() {
  const item = HospitalData;
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState(item);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const [rowToEdit, setRowToEdit] = useState(null);
  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };
  const handleSubmit = (newRow) => {
    console.log("Received");
    rowToEdit === null
      ? setPosts([...posts, newRow])
      : setPosts(
          posts.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            
            return newRow;
          })
        );
        console.log(posts);
  };
  const handleDeleteRow = (targetIndex) => {
    setPosts(posts.filter((_, idx) => idx !== targetIndex));
  };
  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    console.log(currentPage); 
  }
  function modalOpenable(){
    setModalOpen(true);
    setRowToEdit(null)
  }
  
return (
    <div className="layout">
      <div> </div>
      <div className="container">
        <Topbar 
          name="Super Admin Dashboard"
          user={true}
          dashboard={true}
          dash={true}
          />
        <Searchbar/>
        <div className="details-box">
          <p className="details">Details</p>
        </div>
        <Table item={currentPosts} name="HospitalDetails"  editRow={handleEditRow} deleteRow={handleDeleteRow}/>
        {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && posts[rowToEdit]}
        />
      )}
        <div className="downbar">
          <div className="downbar-buttons">
            <Button data="+ Add new" width="150px" click={modalOpenable}/>
            <Button data="Back" width="100px"/>
          </div>
          <div className="downbar-pages">
            <FaAngleLeft style={{marginTop:'5px'}}/>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
            <FaAngleRight style={{marginTop:'5px'}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;