import {Link} from "react-router-dom"

function landingPage() {
    return (
        <div>
            <h1>Self Maintainable Resturant Website</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus. Nam accumsan a ex ac molestie. Nulla vel accumsan tellus. Quisque eget ex urna. Aenean pharetra eget neque et euismod.
            </p>

            <Link to="/Home">Home</Link> 
            <Link to="/Login">Login</Link> 

        </div>
    );
} 

export default landingPage;