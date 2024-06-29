import {useState} from "react";
import { Outlet } from "react-router-dom";
import "../index.css"
import Topbar from "../components/Topbar";
import Table from "../components/Table";
import Searchbar from "../components/Searchbar";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Dashboard() {
  const item = [
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "}
  ]
  const [posts, setPosts] = useState(item);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
return (
    <div className="layout">
      <div></div>
      <div className="container">
        <Topbar name="Super Admin Dashboard"/>
        <Searchbar/>
        <Table item={currentPosts} />
        <div className="downbar">
          <div className="downbar-buttons">
            <Button data="+ Add new" width="150px"/>
            <Button data="Back" width="100px"/>
          </div>
          <div className="downbar-pages">
            <FaAngleLeft />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
            <FaAngleRight />
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default Dashboard;