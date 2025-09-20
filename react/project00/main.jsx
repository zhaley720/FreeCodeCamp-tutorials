import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(
  <Page />
);
























//project 1

// root.render(
//   <div>
//     <img src="react-logo.png" width="40px"/>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on GitHub</li>
//       <li>Is maintained by Meta</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );













// function MainContent() {
//   return (
//     <h1>heading for the practice</h1>
//   );
// }

// root.render(
//   <div>
//     <MainContent/>
//   </div>
// );