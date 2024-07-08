import {useState} from 'react'
import Dtable from '../components/Dtable'
import Topbar from '../components/Topbar';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import { FaAngleLeft, FaLeaf } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Pagination from '../components/Pagination';
import { SidebarData } from '../components/SidebarData';
import { useLocation,useNavigate } from 'react-router-dom';
import { patientData } from '../components/HospitalData';
import Ptable from '../components/Ptable'
import {PModal} from "../components/PModal"


export default function DoctorDetails() {
  const item = patientData;
  console.log(item)
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState(item);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const location = useLocation();
  const {hosp } = location.state || {};
  const [rowToEdit, setRowToEdit] = useState(null);
  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };
  const handleSubmit = (newRow) => {
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
  const navigate = useNavigate();
  function prevPage() { 
    console.log("prev page clickd")
    
    navigate(-1);
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
        <h1>Hospital {hosp}</h1>
        <div className="details-box">
          <p className="details">Patient Details</p>
        </div>
        <Ptable item={currentPosts} name="patientDetails" editRow={handleEditRow} deleteRow={handleDeleteRow}/>
        {modalOpen && (
        <PModal
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
            <Button data="Back" width="100px" click={prevPage} />
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

