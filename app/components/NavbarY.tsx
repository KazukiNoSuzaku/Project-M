import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Divider } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import { Image, Button } from "@nextui-org/react"
export default function NavbarY(){
    const [activeSection, setActiveSection] = useState("about-section");
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Home",
        "Features",
        "Services",
        "Pricing",
        "Terms & Conditions",
        "Privacy Policy",
        "Contact",
      ];
    
      const handleClick = (targetId: string) => {
        setActiveSection(targetId);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    return(
        <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-foreground"
          />

          <Link
          role="button"
          
          href="/">
            
          <NavbarBrand className='text-black'>
          <div className="pr-3 pb-1">
            <Image
            src="/frostforge_logo.png"
            width={36}
            height={36}
            alt="Frostforge"
            />
          </div>
            <p className="font-bold text-white">Merge 2 Minds</p>
          </NavbarBrand>
          </Link>
          
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" 
              href="/"
              role="button">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground"
              role="button"
              href="/#features"
              >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground"
              href='/#services'>
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground"
              href="/#contact"
              tabIndex={3}
              role="button">
              Contact
            </Link>
          </NavbarItem>
          
        </NavbarContent>
        <NavbarContent justify="end">
          
          <NavbarItem className="hidden md:hidden">
            <Button as={Link} color="primary" href="#" variant="flat">
              Get started
            </Button>
          </NavbarItem>
        </NavbarContent>
        
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 3 ? "primary" :  "foreground"
                }
                className="w-full"
                href={
                  item === "Home" ? "/":
                  item === "Pricing" ? "/pricing" :
                  item === "Terms & Conditions" ? "/terms" :
                  item === "Privacy Policy" ? "/privacy" :
                  `/#${item.toLowerCase()}`
                }
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        </Navbar>
    )
    
}