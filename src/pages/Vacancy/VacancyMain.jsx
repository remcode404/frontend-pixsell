import React from 'react';
import JobBenefits from './JobBenefits';
import MainPageVacancy from './MainPageVacancy';
import VacancyList from './VacancyList';

const VacancyMain = () => {
  return (
    <div>
      <MainPageVacancy/>
      <VacancyList />
      <JobBenefits />
    </div>
  );
};

export default VacancyMain;