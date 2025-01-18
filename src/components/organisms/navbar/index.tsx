import './styles.css'

import { FC, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

export const Navbar: FC<NavbarProps> = ({ className, ...props }) => {
  return (
    <nav className={cn('navbar', className)} {...props}>
      <div className="nav-item">
        <NavLink to="colors">Colors</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="typography">Typography</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="form">Form</NavLink>
      </div>
    </nav>
  )
}
