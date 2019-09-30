import React from 'react';
import logo from './paddle-logo.png';
import './App.css';
import StepThree from "./ChildComponents/StepThree";
import skills from "./skills.json";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<StepThree listOfSkills={skills}/>			
				<footer className="steps-footer">
					<span className="col-sm-4 col-md-4 col-lg-4"></span>
					<span className="col col-sm-4 col-md-4 col-lg-4">
						<button className="back-btn">Back</button>
							<span className="steps-pagination"><i className="fa fa-circle"></i></span>
							<span className="steps-pagination"><i className="fa fa-circle"></i></span>
							<span className="steps-pagination-active"><i className="fa fa-circle"></i></span>
						<button className="continue-btn">Continue</button>
					</span>
					<span className="col-sm-4 col-md-4 col-lg-4"></span>
				</footer>
			</div>
		);
	}
}

export default App;
