import {useState} from 'react'
import Dtable from '../components/Dtable'
import Topbar from '../components/Topbar';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import { FaAngleLeft, FaLeaf } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Pagination from '../components/Pagination';
import { SidebarData } from '../components/SidebarData';
import { useLocation } from 'react-router-dom';
import { doctorData } from '../components/HospitalData';
import {DModal} from "../components/DoctorModal"

export default function DoctorDetails() {
  const item = doctorData;
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState(item);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const location = useLocation();
  const { doctor } = location.state || {};
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
  };
  const handleDeleteRow = (targetIndex) => {
    setPosts(posts.filter((_, idx) => idx !== targetIndex));
  };
  function modalOpenable(){
    setModalOpen(true);
    setRowToEdit(null)
  }
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
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
        <h1>Hospital {doctor}</h1>
        <div className="details-box">
          <p className="details">Doctor Details</p>
        </div>
        <Dtable item={currentPosts} name="DoctorDetails" editRow={handleEditRow} deleteRow={handleDeleteRow}/>
        {modalOpen && (
        <DModal
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
            />
            <FaAngleRight style={{marginTop:'5px'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

