import { useState, useRef, useEffect } from "react";
import GeneratorDropDownStyles from "./GeneratorDropDown.module.css";
import LinkIcon from "../../assets/images/dropDownIcons/link.svg";
import EmailIcon from "../../assets/images/dropDownIcons/email.svg";
import Mp3Icon from "../../assets/images/dropDownIcons/mp3.svg";
import ArrowDownIcon from "../../assets/images/dropDownIcons/arrowDown.svg";

function GeneratorDropDown() {
  const [selectedValue, setSelectedValue] = useState({
    label: "Website",
    icon: LinkIcon,
  });

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleOutsideClicks = (event) => {
    if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClicks);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClicks);
    };
  }, [isOpen]);

  function changeValue(newLabel, newIcon) {
    setSelectedValue({ label: newLabel, icon: newIcon });
    setIsOpen(false);
  }

  return (
    <div className={GeneratorDropDownStyles.dropdown}>
      <button
        className={GeneratorDropDownStyles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className={GeneratorDropDownStyles.icon}
          src={selectedValue.icon}
          alt={selectedValue.label}
        />
        {selectedValue.label}
        <img
          className={GeneratorDropDownStyles.icon}
          src={ArrowDownIcon}
          alt="arrow-down"
        />
      </button>

      {/*Dropdown menu*/}
      {isOpen && (
        <div ref={menuRef} className={GeneratorDropDownStyles.dropdownMenu}>
          <div
            className={GeneratorDropDownStyles.dropdownItem}
            onClick={() => changeValue("Website", LinkIcon)}
          >
            <img
              className={GeneratorDropDownStyles.icon}
              src={LinkIcon}
              alt="Website"
              style={{ width: "20px", marginRight: "8px" }}
            />
            Website
          </div>

          <div
            className={GeneratorDropDownStyles.dropdownItem}
            onClick={() => changeValue("Email", EmailIcon)}
          >
            <img
              className={GeneratorDropDownStyles.icon}
              src={EmailIcon}
              alt="Email"
            />
            Email
          </div>

          <div
            className={GeneratorDropDownStyles.dropdownItem}
            onClick={() => changeValue("Mp3", Mp3Icon)}
          >
            <img
              className={GeneratorDropDownStyles.icon}
              src={Mp3Icon}
              alt="Mp3"
            />
            Mp3
          </div>
        </div>
      )}
    </div>
  );
}

export default GeneratorDropDown;


