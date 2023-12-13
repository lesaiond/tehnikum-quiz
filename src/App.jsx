import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/themeProvider";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import "./styles/main.css";
// import { Test } from "./test/test";
import { Result } from "./test/Result";
// import { MainContext } from "./test/MyContext";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  // {
  //   path: "/test",
  //   element: <Test />,
  // },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/step-one",
    element: <StepOne />,
  },
  {
    path: "/step-two",
    element: <StepTwo />,
  },
  {
    path: "/step-three",
    element: <StepThree />,
  },
  {
    path: "/step-four",
    element: <StepFour />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
]);

const App = () => {
  // const [textName, setTextName] = useState();

  const Thanks1 = () => {
    // setTextName(textName);
  };
  if (false) {
    Thanks1();
  }

  return (
    <div className="App">
      <ThemeProvider>
        {/* <MainContext.Provider value={{ textName, setTextName }}> */}
        <RouterProvider router={routerConfig} />
        {/* </MainContext.Provider> */}
      </ThemeProvider>
    </div>
  );
};

export default App;
