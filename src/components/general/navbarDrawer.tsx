import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./navbarDrawer.css";

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

interface NavbarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  mensaje: string;
}

export const NavbarDrawer = ({ isOpen, onClose, mensaje }: NavbarDrawerProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: "Inicio", href: "/" },
    {
      label: "Disciplinas Terapéuticas",
      href: "#",
      subItems: [
        { label: "Tai Chi", href: "/taichi" },
        { label: "Yoga", href: "/yoga" },
        { label: "Aplicación de Emplastos", href: "/emplastos" },
      ]
    },
    {
      label: "Disciplinas Marciales",
      href: "#",
      subItems: [
        { label: "Arte Marcial / Defensa Personal", href: "/artemarcial" },
        { label: "Arte Marcial Niños", href: "/artemarcialninos" },
        { label: "Acrobacia", href: "/acrobacia" },
      ]
    },
    {
      label: "Cursos Terapéuticos",
      href: "#",
      subItems: [
        { label: "Masajes Orientales", href: "/curso-masajes" },
        { label: "Ventosas", href: "/cursoventosas" },
        { label: "Auriculoterapia", href: "/auriculoterapia" },
        { label: "Perfil Oriental", href: "/perfil-oriental" },
      ]
    },
    {
      label: "Cursos Marciales",
      href: "#",
      subItems: [
        { label: "Defensa Cuerpo a Cuerpo", href: "/cuerpo-a-cuerpo" },
        { label: "Lucha Libre", href: "/lucha" },
        { label: "Nunchaku", href: "/nunchaku" },
        { label: "Espada Jian", href: "/jian" },
      ]
    },
    { label: "Aula Virtual", href: "https://aula.espaciopakua.com.ar" },
    { label: "Contacto", href: mensaje },
  ];

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(prev => prev === label ? null : label);
  };

  const handleLinkClick = () => {
    onClose();
    setOpenSubmenu(null);
  };

  return (
    <div className={`navbar-drawer ${isOpen ? 'open' : ''}`}>
      <nav className="drawer-nav">
        <ul className="drawer-menu">
          {navItems.map((item, index) => (
            <li key={index} className={`drawer-item ${item.subItems ? 'has-submenu' : ''}`}>
              {item.subItems ? (
                <>
                  <button
                    className="drawer-link drawer-toggle"
                    onClick={() => toggleSubmenu(item.label)}
                    aria-expanded={openSubmenu === item.label}
                  >
                    <span>{item.label}</span>
                    {openSubmenu === item.label ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <ul className={`drawer-submenu ${openSubmenu === item.label ? 'expanded' : ''}`}>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.href}
                          className="drawer-sublink"
                          onClick={handleLinkClick}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  href={item.href}
                  className="drawer-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
