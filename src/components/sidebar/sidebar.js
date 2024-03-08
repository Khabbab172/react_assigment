import { Box, IconButton, styled, useMediaQuery } from "@mui/material";
import { useState } from "react";
import logo from '../../assets/icons/logo.svg'
import ArrowLeftToLine from "../../assets/icons/ArrowLeftToLine";
import Scrollbar from "../common/ScrollBar";
import MultiLevelMenu from "./MultilevelMenu";



const TOP_HEADER_AREA = 70;
const SidebarWrapper = styled(Box)(({
  theme,
  compact
}) => ({
  height: "100vh",
  position: "fixed",
  width: compact ? 86 : 280,
  
  transition: "all .2s ease",
  zIndex: theme.zIndex.drawer,
  backgroundColor: theme.palette.background.paper,
  "&:hover": compact && {
    width: 280
  }
}));
const NavWrapper = styled(Box)(() => ({
  paddingLeft: 16,
  paddingRight: 16,
  height: "100%"
}));
const StyledLogo = styled(Box)(() => ({
  paddingLeft: 8,
  fontWeight: 700,
  fontSize: 20
}));
const StyledArrow = styled(ArrowLeftToLine)(() => ({
  display: "block"
}));
const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover
  }
})); // -----------------------------------------------------------------------------

// ---------------------- Flexbetween -----------------------
const FlexBetween = ({
  children,
  ...props
}) => <Box display="flex" alignItems="center" justifyContent="space-between" {...props}>
    {children}
  </Box>;


// ----------------------- Flexbox ------------------------------
const FlexBox = ({
  children,
  ...props
}) => <Box display="flex" {...props}>
    {children}
  </Box>;




const  Sidebar = (props) => {
  const {
    sidebarCompact,
    showMobileSideBar,
    setShowMobileSideBar,
    setSidebarCompact
  } = props;
  const [onHover, setOnHover] = useState(false);
  const COMPACT = sidebarCompact && !onHover ? 1 : 0; //   IF MOBILE
  return (
    <SidebarWrapper compact={sidebarCompact ? 1 : 0} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => sidebarCompact && setOnHover(false)}>
      <FlexBetween pt={3} pr={2} pl={4} pb={1} height={TOP_HEADER_AREA}>
          <FlexBox>
          <img src={logo} alt="logo" width={18} />
          {!COMPACT && <StyledLogo>UKO</StyledLogo>}
        </FlexBox>
        <Box mx={"auto"}></Box>

        <StyledIconButton onClick={setSidebarCompact} sx={{
        display: COMPACT ? "none" : "block"
      }}>
          <StyledArrow />
        </StyledIconButton>
      </FlexBetween>


      <Scrollbar autoHide clickOnTrack={false} sx={{
      overflowX: "hidden",
      maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`
    }}>

      <NavWrapper>
        <MultiLevelMenu  sidebarCompact={!!COMPACT}/>
      </NavWrapper>
    </Scrollbar>

    </SidebarWrapper>
  )
}

export default Sidebar
