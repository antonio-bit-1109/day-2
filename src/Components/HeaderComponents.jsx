const HeaderComponents = (props) => {
    console.log("HEADER", HeaderComponents);
    return (
        <>
            <header className="App-header">
                <img src={props.logo} className="App-logo" alt="logo" />
                {props.children}
            </header>
        </>
    );
};

export default HeaderComponents;
