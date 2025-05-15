import Section from './Section/Section';
import Header from './Header/Header';
import logoImgPath from '../images/logo.svg';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

import Backdrop from './Backdrop/Backdrop';

import Sidebar from './Sidebar/Sidebar';
import menuItems from '../data/sidebarMenu.json';

import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const feedbackInitModel = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const homeWork = {
  number: '2',
  title: 'State and life cycle.',
};

const App = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
  const [feedbacks, setFeedbacks] = useLocalStorage(
    'saved-feedbacks',
    feedbackInitModel
  );

  function updateModuleMenuStatus(mobileMenuStatus) {
    setMobileMenuStatus((mobileMenuStatus = !mobileMenuStatus));
  }

  function updateFeedback(feedbackType) {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  }

  function resetFeedback() {
    setFeedbacks(feedbackInitModel);
  }

  const totalFeedback = Object.values(feedbacks).reduce((a, b) => a + b, 0);

  const positiveFeedback = Math.round(
    (feedbacks['good'] / totalFeedback) * 100
  );

  return (
    <Section>
      <Header
        logoImgPath={logoImgPath}
        moduleNumber={homeWork.number}
        moduleTitle={homeWork.title}
        onUpdate={updateModuleMenuStatus}
      />
      <Main>
        <Description
          title="Sip Happens Café"
          description="Please leave your feedback about our service by selecting one of the options below."
        />
        <Options
          buttons={feedbacks}
          onUpdate={updateFeedback}
          total={totalFeedback}
          reset={resetFeedback}
        />
        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <Feedback
            feedbacks={feedbacks}
            total={totalFeedback}
            positive={positiveFeedback}
          />
        )}
      </Main>
      <Footer />
      <Backdrop mobileMenu={mobileMenuStatus}>
        <Sidebar
          menuItems={menuItems}
          variant="mobileMenu"
          mobileMenu={mobileMenuStatus}
          moduleNumber={homeWork.number}
          moduleTitle={homeWork.title}
          onUpdate={updateModuleMenuStatus}
        />
      </Backdrop>
    </Section>
  );
};

export default App;
