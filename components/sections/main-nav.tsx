"use client"
import Link from 'next/link'
import { useTheme } from "next-themes"

import { MenuIcon, Moon, Sun } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { siteInfo } from '@/siteinfo'

export default function MainNav(){

  const { setTheme } = useTheme()
  const isDesktop = useMediaQuery("(min-width:850px)")
  const navigation = [
    { name: "Know more", href: "#aboutus" },
    { name: "Where you stay", href: "#stay" },
    { name: "Review", href: "#review" },
    { name: "Amenities", href: "#ameneties" },
    { name: "Contact", href: "#footer" },
  ];

  return(
    <header className="sticky top-0 left-0 flex w-full items-center bg-accent drop-shadow-lg z-50">
      <div className="container mx-auto bg-transparent">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <h2 className="text-lg font-bold hover:text-foreground/75">
              <Link href="/" className="block w-full py-5 font-semibold text-sm uppercase">
                  {siteInfo.sitename}
              </Link>
            </h2>
          </div>
          <div className="flex justify-end items-center w-full px-4">
            <div>
              <nav
                id="navbarCollapse"
                className="flex w-full px-6 py-5 bg-transparent dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent"
              >
              { isDesktop ?
                  <ul className="flex space-x-5 items-center text-sm text-nowrap">
                    { navigation.map((item)=>(
                        <li key={item.name}>
                          <Link 
                            href={item.href}
                            className="flex py-2 text-sm font-medium hover:text-secondary-foreground/50 dark:text-dark-6 dark:hover:text-secondary-foreground lg:ml-12 lg:inline-flex"
                          >{item.name}
                          </Link>
                        </li>
                      ))}
                    <li>
                      <Button 
                        className="font-bold uppercase text-secondary border-2 border-primary w-full px-8 py-6 rounded-none text-nowrap"
                      >
                        <a href={siteInfo.donation} target="__blank" >Donate now</a>
                      </Button>
                      </li>
                    <li>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                  </ul>   
                  :
                  <ul className='flex items-center'> 
                    <li className='mr-11 flex items-center'>
                        <Button 
                          className="bg-primary hover:bg-primary/80 text-primary-foreground w-full p-3 rounded-none text-nowrap"
                        >
                          <a href={siteInfo.donation} target="__blank" >Donate now</a>
                        </Button>
                    </li>
                    <li>
                    <Drawer direction="left">
                      <DrawerTrigger>
                        <MenuIcon className="dark:text-white" />
                      </DrawerTrigger>

                      <DrawerContent className='bg-white flex flex-col rounded-t-[10px] h-full w-[400px] mt-24 fixed bottom-0 right-0' >
                        <nav className='p-4 bg-white flex-1 h-full"'> 
                          <ul className="max-w-md mx-auto">   
                            {
                              navigation.map((item)=>(
                                <Link 
                                  key={item.name}
                                  href={item.href}
                                  className="flex px-2 py-2 text-base font-medium text-body-color hover:text-dark hover:bg-secondary dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                                >
                                  {item.name}
                                </Link>
                                ))
                              }
                              <li className='ml-8'>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    
                                    <Button variant="outline" size="icon">
                                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                      <span className="sr-only">Toggle theme</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                      Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                      Dark
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                      System
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>

                                </DropdownMenu>
                              </li>
                            </ul>
                          </nav>
                        </DrawerContent>
                      </Drawer>
                    </li>
                </ul>
              }
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}