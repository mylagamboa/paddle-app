import React from 'react';
import "./StepThree.css";
import 	{ useState } from 'react';

const StepThree = (prop) => {
	
	const [skillsList, setSkillList] = useState(prop.listOfSkills);
	const [skillsSearch, setSkillsSearch] = useState("");
	const [selectedSkills, setSelectedSkill] = useState([]);
	var finalSkillList = [];
	var distinctSkills = [];
	
	const handleSelectedSkill = e => {
		const { id } = e.target.parentElement;
		selectedSkills[id] = !selectedSkills[id];
		setSelectedSkill([...selectedSkills]);
		finalSkillList = [];
		
		for (var i = 0; i <= selectedSkills.length; i++) {
			if (selectedSkills[i] !== undefined && skillsList[i] !== undefined) { 
				skillsList[i].selected = selectedSkills[i];
				if (skillsList[i].selected) { 
					finalSkillList.push(skillsList[i]);
					distinctSkills = [...new Set(finalSkillList)];
					console.log(distinctSkills); //TO DO (MJG) : Supposed to be passed to last step to display the selected skills
				}
			}
		}
	}

  return (
	<div className="step3-body">
	<br/>
		<div className="step3-title">Select your Skills</div>
			<span className="step3-label">Add any skill you would like, and select all that apply</span>
			<div className="step3-search-wrapper">
			<br/>
				<span className="col-sm-4 col-md-4 col-lg-4"></span>
				<span className="col-sm-4 col-md-4 col-lg-4">
					<input placeholder="Search for a skill..."
						onChange={e => {
						  const filteredSkills = prop.listOfSkills.filter(item => {
							return item.skill.toLowerCase().includes(e.target.value.toLowerCase());
						  });

						  setSkillList(filteredSkills);
						  setSkillsSearch(e.target.value);
						}}
						type="text"
						value={skillsSearch}
					  />
					<button><i className="fa fa-search"></i></button>
				</span>
				<span className="col-sm-4 col-md-4 col-lg-4"></span>
			</div>
			<span className="col-sm-4 col-md-4 col-lg-4"></span>
				<span className="col-sm-4 col-md-4 col-lg-4">
				{skillsList.map((skills, index) => (
					<div className="step3-skill-list-wrapper" key={skills.skill} id={index}>
						<button
							className={skills.selected ? 'step3-skill-list-selected' : 'step3-skill-list-not-selected'}
							onClick={handleSelectedSkill}>
								{skills.skill}
						</button>
						<span className={skills.selected ? 'step3-checkmark-selected' : 'step3-checkmark-not-selected'}>
							{ skills.selected && <i className="fa fa-check"></i> }
						</span>
					</div>					
				  ))}
				  </span>
				<span className="col-sm-4 col-md-4 col-lg-4"></span>
			<br/>
		<br/>
	</div>
  )
};

export default StepThree;
