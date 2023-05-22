import React from 'react';

const SkillSetSkills = ({ Skills }) => {

    return (
        <div className="skills">
            {Skills.map((Elem) => (
                <div className='SkillItem' key={Elem.id} data-aos="flip-left" data-aos-delay="80">
                    <img className='SkillsImage' src={Elem.Image} alt={Elem.Text} />
                </div>
            ))}
        </div>
    )
}

export default SkillSetSkills;