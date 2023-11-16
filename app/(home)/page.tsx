import { Container, Info } from "./styles";

export default function Home() {
  return (
   <Container>
    <Info>
      <div>
      <h3>Hi all. I am</h3>
      <h1>Gustavo Gommes </h1>
      <h2>{'>'} Front-end developer</h2>
      <p className="find">// find my profile on Github:</p>
      </div>
      <div>
        <p><span>const </span><span>githubLink </span>= <span>“https://<br className="quebra"/>github.com/example/url”</span></p>      </div>
    </Info>
   </Container>
  )
}
