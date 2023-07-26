"use client";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import React from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

function NavBar() {
    const pathname = usePathname();
    return (
        <Navbar
            bg="primary"
            variant="dark"
            sticky="top"
            expand="sm"
            collapseOnSelect
        >
            <Container>
                <Navbar.Brand as={Link} href="/">
                    NextJS 13.4 Image Gallery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link
                            as={Link}
                            href="./static"
                            active={pathname === "/static"}
                        >
                            static
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            href="./dynamic"
                            active={pathname === "/dynamic"}
                        >
                            dynamic
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            href="./isr"
                            active={pathname === "/isr"}
                        >
                            isr
                        </Nav.Link>

                        <NavDropdown title="Topics" id="topics-dropdown">
                            <NavDropdown.Item as={Link} href="/topics/health">
                                Health
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/coding">
                                Coding
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/flag">
                                Flag
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link
                            as={Link}
                            href="./search"
                            active={pathname === "/search"}
                        >
                            search
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
