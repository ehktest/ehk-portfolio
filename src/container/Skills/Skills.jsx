import "./Skills.scss";

import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import useProfileCall from "../../hooks/useProfileCall";
import { useSelector } from "react-redux";
import CustomPagination from "../../components/CustomPagination";

const Skills = () => {
  const { skills, experiences } = useSelector((state) => state.profile);
  const { getSkillsAndExperiencesData } = useProfileCall();

  const [pageSkills, setPageSkills] = useState(0);
  const [rowsPerPageSkills, setRowsPerPageSkills] = useState(16);

  const [pageExp, setPageExp] = useState(0);
  const [rowsPerPageExp, setRowsPerPageExp] = useState(4);

  const handleChangePageSkills = (event, newPage) => {
    setPageSkills(newPage);
  };

  const handleChangeRowsPerPageSkills = (event) => {
    setRowsPerPageSkills(parseInt(event.target.value, 10));
    setPageSkills(0);
  };

  const handleChangePageExp = (event, newPage) => {
    setPageExp(newPage);
  };

  const handleChangeRowsPerPageExp = (event) => {
    setRowsPerPageExp(parseInt(event.target.value, 10));
    setPageExp(0);
  };

  const addClassToPaginationButtons = () => {
    const elements = document.querySelectorAll(
      "div.pagination__container svg.MuiSvgIcon-root"
    );
    elements.forEach((element) => {
      element.classList.add("pointer-cursor");
    });
  };

  useEffect(() => {
    getSkillsAndExperiencesData();
    addClassToPaginationButtons();
  }, []);

  return (
    <>
      <h2 className="head--text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills
            .slice(
              pageSkills * rowsPerPageSkills,
              pageSkills * rowsPerPageSkills + rowsPerPageSkills
            )
            .map((skill, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex pointer-cursor"
                key={`${skill.name}-${index}`}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill?.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p--text">{skill.name.slice(0, 6)}</p>
              </motion.div>
            ))}
          <div className="pagination__container">
            <CustomPagination
              count={skills.length}
              page={pageSkills}
              rowsPerPage={rowsPerPageSkills}
              onChangePage={handleChangePageSkills}
              onChangeRowsPerPage={handleChangeRowsPerPageSkills}
            />
          </div>
        </motion.div>

        <div className="app__skills-exp">
          {experiences
            .slice(
              pageExp * rowsPerPageExp,
              pageExp * rowsPerPageExp + rowsPerPageExp
            )
            .map((experience, index) => (
              <motion.div
                className="app__skills-exp-item"
                key={`${experience.year}-${index}`}
              >
                <div className="app__skills-exp-year">
                  <p className="bold--text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work, index) => (
                    <React.Fragment key={`${work.name}-${index}`}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work pointer-cursor"
                        data-tip // for tooltips
                        data-tooltip-id={work.name} // for tooltips
                        data-tooltip-content={work.desc} // for tooltips
                      >
                        <h4 className="bold--text">{work.name}</h4>
                        <p className="p--text">{work.company}</p>
                      </motion.div>
                      <Tooltip
                        id={work.name} // must be equal data-tooltip-id
                        effect="solid"
                        arrowColor="var(--skills-tooltipArrowColor)"
                        className="skills-tooltip pointer-cursor"
                      />
                    </React.Fragment>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          <div
            className="pagination__container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <CustomPagination
              count={experiences.length}
              page={pageExp}
              rowsPerPage={rowsPerPageExp}
              onChangePage={handleChangePageExp}
              onChangeRowsPerPage={handleChangeRowsPerPageExp}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  // Skills,
  "skills",
  "app__oddsbg"
);
