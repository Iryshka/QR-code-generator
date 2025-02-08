import { Links } from "./data";
import { motion } from "framer-motion";
import MobileNavStyles from "./MobileNav.module.css";

const perspective = {
  initial: { opacity: 0, rotateX: 90, translateY: 80, translateX: -20 },
  enter: (index) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: {
        duration: 0.35,
      },
      delay: 0.2 + index * 0.1,
    },
  }),
  exit: { opacity: 0 },
};

function MobileNav() {
  return (
    <div className={MobileNavStyles.nav}>
      <div className={MobileNavStyles.links}>
        {Links.map((link, index) => {
          return (
            <div key={index} className={MobileNavStyles.link__container}>
              <motion.div
                className={MobileNavStyles.link}
                custom={index}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <a>{link.title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MobileNav;

// import { AnimatePresence, motion } from "framer-motion";
// import MobileNavStyles from "./MobileNav.module.css";
// import { useEffect } from "react";
//
// function MobileNav({ isMobileNavVisible }) {
//   console.log(isMobileNavVisible);
//   const numberOfColumns = 8;
//   function anim(variants, custom) {
//     return {
//       initial: "initial",
//       animate: "enter",
//       exit: "exit",
//       variants,
//       custom,
//     };
//   }
//
//   const expand = {
//     initial: { top: "0%" },
//     enter: (index) => ({
//       top: "100%",
//
//       transition: {
//         duration: 0.5,
//         delay: 0.05 * index,
//       },
//       transitionEnd: {
//         height: 0,
//         top: 0,
//       },
//     }),
//     exit: (index) => ({
//       height: "100%",
//       transition: {
//         duration: 0.5,
//         delay: 0.05 * index,
//       },
//     }),
//   };
//
//   const shrink = {
//     initial: { bottom: "0" },
//     enter: (index) => ({
//       bottom: "100%",
//       transition: {
//         duration: 0.5,
//         delay: 0.05 * index,
//       },
//       transitionEnd: {
//         height: 0,
//         bottom: 0,
//       },
//     }),
//     exit: (index) => ({
//       height: "0",
//       transition: {
//         duration: 0.5,
//         delay: 0.05 * index,
//       },
//     }),
//   };
//
//   const animation = isMobileNavVisible ? expand : shrink;
//
//   return (
//     <motion.div
//       className={MobileNavStyles.page__container}
//       initial="initial"
//       animate={isMobileNavVisible ? "enter" : "initial"}
//       exit="exit"
//     >
//       <div className={MobileNavStyles.background}>
//         <nav className={MobileNavStyles.nav}>
//           <ul className={MobileNavStyles.menu}>
//             <li className={MobileNavStyles.menu__item}>About</li>
//             <li className={MobileNavStyles.menu__item}>Pricing</li>
//             <li className={MobileNavStyles.menu__item}>Contacts</li>
//           </ul>
//         </nav>
//       </div>
//       <div className={MobileNavStyles.transition__container}>
//         {[...Array(numberOfColumns)].map((_, index) => (
//           <motion.div
//             {...anim(animation, numberOfColumns - index)}
//             className={MobileNavStyles.column}
//             key={index}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// }
//
// export default MobileNav;
