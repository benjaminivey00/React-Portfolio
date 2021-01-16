import Project from '../components/Project';

const ProjectPortfolio = () => {
  const projects = [
    {
      title: 'Fitness Tracker',
      repo: 'https://github.com/benjaminivey00/fitnessTracker',
      link: 'https://agile-scrubland-19929.herokuapp.com/',
    //   img: './img/fitnessTracker.jpg'
    },
    {
      title: 'Note Taker',
      repo: 'https://github.com/benjaminivey00/note-taker',
      link: 'https://fierce-ridge-86718.herokuapp.com/',
    //   img: './img/noteTaker.jpg'
    },
    {
      title: 'Martha Stewarts Video Game Bible', 
      repo: 'https://github.com/Teknix420/Martha-Stewarts-VG-Bible',
      link: 'https://teknix420.github.io/Martha-Stewarts-VG-Bible/index.html',
    //   img: './img/MSVB.jpg'
    },
    {
        title: 'Code Quiz Game', 
        repo: 'https://github.com/benjaminivey00/codeQuizGame',
        link: 'https://github.com/benjaminivey00/codeQuizGame',
        // img: './img'
      },
      {
        title: 'Password Generator', 
        repo: 'https://github.com/benjaminivey00/password-generator',
        link: 'https://github.com/benjaminivey00/password-generator',
        // img: './img/'
      },
    {
      title: 'Daily Planner',
      repo: 'https://github.com/benjaminivey00/Day-planner',
      link: 'https://github.com/benjaminivey00/Day-planner',
    //   img: './img/'
    }
  ]
    return (
      <>
        <Project 
          projects = {projects}
        />
      </>
    )
}
export default ProjectPortfolio;