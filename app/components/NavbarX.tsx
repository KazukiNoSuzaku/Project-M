import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Divider } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/react"
import Image from "next/image";

export default function NavbarX(){
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

      const toggleClick = () => {
        setIsMenuOpen(false)
      }
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    return(
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-foreground"
          />

          <Link
          role="button"
          onClick={()=>scrollToTop()}>
            
          <NavbarBrand className='text-neutral-700'>
          <div className="pr-3 pb-1">
            <Image
            src="/frostforge_logo.png"
            width={36}
            height={36}
            alt="Frostforge"
            />
          </div>
            <p className="font-bold text-white">Frost Forge</p>
          </NavbarBrand>
          </Link>
          
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" 
              href="#features"
              role="button">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link
              color="foreground"
              href="#services"
              role="button">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link 
             aria-current="page"
              href='/pricing'>
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground"
              href="#contact"
              role="button">
              Contact
            </Link>
          </NavbarItem>
          
        </NavbarContent>
        <NavbarContent justify="end">
          
          <NavbarItem className="md:hidden">
            <Button as={Link} color="primary" href="/pricing" variant="flat">
              Get started
            </Button>
          </NavbarItem>
        </NavbarContent>
        
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                onClick={toggleClick}
                color={
                  index === 3 ? "primary" : "foreground"
                }
                className="w-full"
                href={
                  item === "Home" ? "/" :
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