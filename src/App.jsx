import logo from "./logo.svg";
import "./App.css";
import HeaderComponents from "./Components/HeaderComponents";
import CardComponent from "./Components/CardComponent";
import RandomComponent from "./Components/RandomComponent";

function App() {
    return (
        <div className="App">
            <HeaderComponents logo={logo}>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </HeaderComponents>
            <HeaderComponents logo={logo}>
                <button>CLick me </button>
                <input type="text" id="input1" placeholder="scrivi qualcosa..." />
            </HeaderComponents>
            <div className="container-card-parent">
                <CardComponent>
                    <h2>Titolo prova 1</h2>
                    <form action="#">
                        <label htmlFor=""> content</label>
                        <input type="text" />
                    </form>
                </CardComponent>
                <CardComponent>
                    <h2>Titolone numero 2 </h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </CardComponent>
                <CardComponent>
                    <h2>CHIAMA APP.JS IN APP.JSX COSI TI SUGGERISCE I TAG HTML </h2>
                    <p>ashdhdhshakjdhsajkdashdjashkdfjfjfjfjkashdja</p>
                    <p>ashdhdhshadhsajkdashdjashkdkashdja</p>
                </CardComponent>
            </div>
            <RandomComponent
                content_h2="ciao ciao "
                content_h2_2="bello bello"
                content_p="paragrafo"
                content_p_2="paragrafo222"
            />
        </div>
    );
}

export default App;
