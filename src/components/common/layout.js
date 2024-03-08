import { Fragment, useState } from 'react'
import Sidebar from '../sidebar/sidebar';
import LayoutBodyWrapper from './LayoutBodyWrapper';
import DashboardHeader from './DashboardHeader';

const Layout = ()=> {

  const [sidebarCompact, setSidebarCompact] = useState(false);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  const handleCompactToggle = () => setSidebarCompact(!sidebarCompact);

  const handleMobileDrawerToggle = () => setShowMobileSideBar(state => !state); // dashboard body wrapper custom style


  const customStyle = {
    width: `calc(100% - ${sidebarCompact ? "86px" : "280px"})`,
    marginLeft: sidebarCompact ? "86px" : "280px"
  };
  return (
    <>
      <Fragment>
      <Sidebar sidebarCompact={sidebarCompact} showMobileSideBar={showMobileSideBar} setSidebarCompact={handleCompactToggle} setShowMobileSideBar={handleMobileDrawerToggle} />

      <LayoutBodyWrapper   sx={customStyle}>
          <DashboardHeader setShowSideBar={handleCompactToggle} setShowMobileSideBar={handleMobileDrawerToggle} />

      </LayoutBodyWrapper>

      </Fragment>
    </>
  )
}

export default Layout ;
