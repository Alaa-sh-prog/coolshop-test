import { Header } from "./components/Header/Header";
import { Layout } from "./components/Layout";
import { Adder } from "./components/Adder";
function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Adder />
      </Layout>
    </div>
  );
}

export default App;
