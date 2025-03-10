import React from 'react';
import { Box, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from '../../assets/icons/icon-home.svg';
import invoiceIcon from '../../assets/icons/icon-invoice.svg';
import blogIcon from '../../assets/icons/icon-blog.svg';
import pincodeIcon from '../../assets/icons/pin-code.svg';

const drawerWidth = 240;

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

// Define the navLinks array with custom icons
const navLinks = [
  {
    name: "Ifsc",
    icon: homeIcon,
    link: "/ifsc",
  },
  {
    name: "Quotes",
    icon: invoiceIcon,
    link: "/quotes",
  },
  {
    name: "Blogs",
    icon: blogIcon,
    link: "/blog",
  },
  {
    name: "Pin-Code Search",
    icon: pincodeIcon,
    link: "/pincode",
  },
  {
    name: "NEWS",
    icon: blogIcon,
    link: "/news",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, handleDrawerToggle }) => {
  const location = useLocation();

  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.name} disablePadding style={{ width: '100%' }}>
            <Link to={item.link} style={{ textDecoration: "none", color: "inherit",width:'100%' }}>
              <ListItemButton selected={location.pathname === item.link} style={{ width: '100%' }}>
                <ListItemIcon>
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    style={{
                      width: 24,
                      filter: location.pathname === item.link
                        ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                        : "invert(84%)",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      {/* Temporary Drawer for Mobile  */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Improve mobile performance
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Permanent Drawer for Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
