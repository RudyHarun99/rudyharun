type CareerJourney = {
  title: string;
  companyName: string;
  dateFrom: string;
  dateTo: string;
  description: string[];
};

export const careerJourney: CareerJourney[] = [
  {
    title: 'Lead Instructor',
    companyName: 'Hacktiv8',
    dateFrom: 'Nov 2023',
    dateTo: 'Oct 2024',
    description: [
      'Mentored 6 - 8 instructors and improved teaching delivery.',
      'Managed course schedules and standardized grading.',
      'Increased student graduation rate by 20%.',
    ],
  },
  {
    title: 'Fullstack Javascript Instructor',
    companyName: 'Hacktiv8',
    dateFrom: 'Nov 2020',
    dateTo: 'Oct 2023',
    description: [
      'Delivered live/recorded sessions on JavaScript, React.js, Node.js.',
      'Designed a full stack curriculum and project-based assessments.',
      'Improved student success rate by 30%.',
    ],
  },
  {
    title: 'Academic Instructor',
    companyName: 'MSIB Campus Merdeka',
    dateFrom: 'Feb 2024',
    dateTo: 'Jul 2024',
    description: [
      'Supervised interns with regular performance reviews.',
      'Achieved 100% intern task completion and growth feedback.',
    ],
  },
];