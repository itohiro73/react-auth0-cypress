import React from "react";
import { Avatar, Box, Flex, Heading, Link, Menu, MenuButton, MenuItem, MenuList, } from "@chakra-ui/core";
import { Link as ReactRouterLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavMenuItem = ({ to, children }: any) => (
// @ts-ignore
  <Link mt={{ base: 4, md: 0 }} mr={4} display="block" as={ReactRouterLink} to={to}>
    {children}
  </Link>
);

const Navbar = () => {
  const { user, logout } = useAuth0();
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.0rem"
        bg="teal.400"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            <ReactRouterLink to='/'>Auth0 / React Application</ReactRouterLink>
          </Heading>
        </Flex>

        <Box
          display="flex"
          width="auto"
          alignItems="center"
          flexGrow={1}
        >
        </Box>
        <NavMenuItem to='/menu1'>Menu1</NavMenuItem>
        <NavMenuItem to='/menu2'>Menu2</NavMenuItem>
        <NavMenuItem to='/menu3'>Menu3</NavMenuItem>

        <Box
          display="block"
          mt={{ base: 4, md: 0 }}
          color="gray.600"
        >
          <Menu closeOnSelect>
            <MenuButton id="avatar-menu">
              <Avatar
                size="sm"
                name={user.name}
                src={user.picture}
              />
            </MenuButton>
            <MenuList>
              <ReactRouterLink to='/profile'><MenuItem id="profile">Profile</MenuItem></ReactRouterLink>
              <MenuItem id="logout" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;