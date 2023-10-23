import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { Container } from "./styles";
import Footer from "../components/footer";
import Header from "../components/header/desktop";
import { useState } from "react";
import HeaderMobile from "../components/header/mobile";

export function Routes() {
  const [mobile, setMobile] = useState(true);
  return (
    <Container>
      <BrowserRouter>
        {mobile ? "" : <Footer />}
        {mobile ? <HeaderMobile /> : <Header />}
        <AppRoutes />
      </BrowserRouter>
    </Container>
  );
}
