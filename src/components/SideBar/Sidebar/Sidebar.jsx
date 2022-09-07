import './Sidebar.css';
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    return <div >
        <div id="viewport">
       <div id="sidebar">
    <header>
      <NavLink to='/admin'>ADMIN PANEL</NavLink>
    </header>
    <ul>
      <li>
        <NavLink to="/admin">
         Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/addSlider">
         Add Slider
        </NavLink>
      </li>
      <li>
        <NavLink to="/sliderDetail">
         Slider Detail
        </NavLink>
      </li>
      <li>
        <NavLink to="/addphotos">
          Add Photos
        </NavLink>
      </li>
      <li>
        <NavLink to="/photosDetail">
          Photos Detail
        </NavLink>
      </li>
      <li>
        <NavLink to="/addproducts">
         Add Products to Card
        </NavLink>
      </li>
      <li>
        <NavLink to="/productdetail">
         Products Detail
        </NavLink>
      </li>
    </ul>
  </div>
 
  <div id="content">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <NavLink to="/"><i className="zmdi zmdi-notifications text-danger"></i>
            </NavLink>
          </li>
          <li><NavLink to="/"></NavLink></li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
      <h1> </h1>
      <p>
      </p>
    </div>
  </div>
  </div>
    </div>;
};

export default Sidebar;