// Spend a minute memorizing the line below
// Re-write the line of code as best you can from memory
function MainContent() {
    return (
        <div className="card" styles="width: 18rem;">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

function Navigation() {
    return (
        <nav>
            <h1>New Website</h1>
            <ul>
                <li>Pricing</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </nav>
    )
}
ReactDOM.render(<div>
    <Navigation />
    </div>, document.querySelector("#navnav"))

ReactDOM.render(<div>
    <MainContent />
    </div> , document.querySelector("#root"))

// var header = document.createElement("H1")
// header.innerHTML = "Human Cyborg relations"
// document.querySelector("#root").appendChild(header)