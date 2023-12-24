import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
      <>
        <Header/>


        <section>
          {/*// <!-- Input Data -->*/}
          <Form/>

          {/*// <!-- Preview Data -->*/}
          <Table/>
        </section>
      </>
  );
}

export default App;
