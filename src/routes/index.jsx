import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { Container } from "./styles";
import Footer from "../components/footer";
import Header from "../components/header";

export function Routes() {
  return (
    <Container>
      <BrowserRouter>
        <Footer />
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </Container>
  );
}
