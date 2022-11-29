function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent() {
    return (<h1>I am learning React!</h1>)
}

ReactDOM.render(<h1>Hello, everyone</h1>, document.getElementById("root"))
ReactDOM.render(<p>My name is Germano Costa</p>, document.querySelector("#root-1"))
ReactDOM.render(<p>This is my first React Code</p>, document.querySelector("#root-2"))
ReactDOM.render(<ul><li>Lista 1</li><li>Lista 2</li></ul>, document.getElementById("root-3"))
ReactDOM.render(<Navbar />, document.getElementById("root-4"))
ReactDOM.render(<MainContent/>, document.getElementById("root-5"))
ReactDOM.render(<div><Navbar /><MainContent /></div>, document.getElementById("root-6"))
 

// vanilla JS

// const h1 = document.createElement("h1")
// h1.textContent = "Following is an an example fo how to use vanilla JS imperative way to program"
// h1.className = "header"
// document.getElementById("root-5").append(h1)

/*
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// <h1 class="header">

const element = <h1 className="header">This is JSX</h1>
console.log(element)

ReactDOM.render(element, document.getElementsById("root"))
*/


// JSX - Flavor of JS that looks like HTML
ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root-7"))

// Alternative 


// JSX
const page = (
    <div>
        <h1 className="header">This is an ALternative synthax to JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

console.log(page)

ReactDOM.render(
    page,
    document.getElementById("root-8")
)

// Example website 

const navbar = (
    <nav>
        <h1 className="header">Title`s website</h1>
        <ul><li>Menu</li><li>Pricing</li><li>About</li><li>Contact</li></ul>
    </nav>
)

console.log(navbar)

ReactDOM.render(
    navbar,
    document.getElementById("root-9")
)

