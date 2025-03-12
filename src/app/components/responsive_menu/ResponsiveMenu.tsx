import { useState } from "react";
import styles from "./ResponsiveMenu.module.css";
import Link from "next/link";

const ResponsiveMenu = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const openSidebar = () => {
          setIsOpen(true);
        };
      
        const closeSidebar = () => {
          setIsOpen(false);
        };
      
        const handleClickOutside = (e) => {
          if (e.target.id === 'sidebar-overlay') {
            closeSidebar();
          }
        };
      
        return (
          <div className={styles.sidebar_resposive}>
            {/* Botão para abrir a sidebar */}
            <button className={styles.sidebarToggle} onClick={openSidebar}>
            <i className="fa-solid fa-bars"></i>
            </button>
      
            {/* Overlay para fechar a sidebar ao clicar fora */}
            {isOpen && <div id="sidebar-overlay" className={styles.overlay} onClick={handleClickOutside}></div>}
      
            {/* Sidebar */}
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
              <button className={styles.closeBtn} onClick={closeSidebar}>
              <i className="fa-solid fa-xmark"></i>
              </button>
              <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/products">produtos</Link></li>
                <li><Link href="/about">sobre</Link></li>
                <li><Link href="/contact">contato</Link></li>
                <li><Link href="/location">localização</Link></li>
                <li><Link href="/partners">lojas & parceiros</Link></li>
              </ul>
            </div>
          </div>
        );
      }

export default ResponsiveMenu;