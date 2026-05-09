import React, { useState, useRef, useEffect } from 'react';

const FloatingActions = () => {
  const [showCallMenu, setShowCallMenu] = useState(false);
  const menuRef = useRef(null);
  
  const primaryNumber = "+918078278254";
  const secondaryNumber = "+918075836367";
  const whatsappMessage = "Hello Zyro Trips, I'm interested in a bespoke journey.";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowCallMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="floating-actions" ref={menuRef}>
      <div style={{ position: 'relative' }}>
        <div className={`call-menu ${showCallMenu ? 'active' : ''}`}>
          <a href={`tel:${primaryNumber}`} className="call-menu-item">
            <span>Primary Support</span>
            <strong>+91 80782 78254</strong>
          </a>
          <a href={`tel:${secondaryNumber}`} className="call-menu-item">
            <span>Secondary Support</span>
            <strong>+91 80758 36367</strong>
          </a>
        </div>

        <button 
          className="floating-btn call-btn" 
          onClick={() => setShowCallMenu(!showCallMenu)}
        >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
        </svg>
        <span className="btn-label">CALL US</span>
        </button>
      </div>

      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${primaryNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn" 
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42 1.56 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24m-3.53 4.75c-.19 0-.51.07-.77.34-.26.27-.99.97-.99 2.38 0 1.41 1.03 2.78 1.17 2.97.14.19 2.03 3.1 4.91 4.35.69.29 1.22.47 1.64.6.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.27-.19-.57-.34-.3-.15-1.7-.84-1.97-.93-.26-.1-.45-.15-.65.15-.2.3-.77.97-.95 1.17-.18.21-.36.24-.67.1-.3-.15-1.29-.47-2.45-1.51-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.14.3-.34.46-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.51-.07-.14-.65-1.58-.89-2.17-.23-.58-.47-.5-.65-.51z" />
        </svg>
        <span className="btn-label">WHATSAPP</span>
      </a>

      <style>
        {`
          .floating-actions {
            position: fixed;
            bottom: 40px;
            right: 40px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            z-index: 2100;
          }

          .floating-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
            text-decoration: none;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            position: relative;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            animation: floatingReveal 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards;
            opacity: 0;
          }

          .btn-label {
            position: absolute;
            right: 80px;
            background: var(--accent-gold);
            color: black;
            padding: 8px 15px;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.4s ease;
            pointer-events: none;
            white-space: nowrap;
          }

          .floating-btn:hover .btn-label {
            opacity: 1;
            transform: translateX(0);
          }

          .floating-btn svg {
            width: 24px;
            height: 24px;
            transition: transform 0.3s ease;
          }

          .floating-btn:hover svg {
            transform: scale(1.2);
          }

          .call-menu {
            position: absolute;
            bottom: 70px;
            right: 0;
            background: rgba(20, 20, 20, 0.95);
            backdrop-filter: blur(15px);
            border: 1px solid var(--accent-gold);
            border-radius: 16px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1);
            min-width: 220px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.6);
            z-index: 2110;
          }

          .call-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .call-menu-item {
            display: flex;
            flex-direction: column;
            padding: 12px 15px;
            border-radius: 8px;
            color: white;
            text-decoration: none;
            transition: background 0.3s ease;
          }

          .call-menu-item:hover {
            background: rgba(212, 175, 55, 0.15);
          }

          .call-menu-item span {
            font-size: 10px;
            color: var(--accent-gold);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 4px;
          }

          .call-menu-item strong {
            font-size: 14px;
            letter-spacing: 1px;
            font-weight: 500;
          }

          .call-btn {
            background: var(--accent-gold);
            color: black;
            animation-delay: 0.2s;
          }

          .whatsapp-btn {
            background: #25D366;
            color: white;
            animation-delay: 0.4s;
          }

          .whatsapp-btn::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #25D366;
            z-index: -1;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.5; }
            100% { transform: scale(1.6); opacity: 0; }
          }

          .floating-btn:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
            border-color: rgba(255, 255, 255, 0.4);
          }

          @keyframes floatingReveal {
            0% { opacity: 0; transform: translateY(20px) scale(0.9); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }

          @media (max-width: 768px) {
            .floating-actions { bottom: 20px; right: 20px; gap: 15px; }
            .floating-btn { width: 50px; height: 50px; }
            .btn-label { display: none; }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingActions;
