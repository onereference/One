import type { Job } from "@/components/job/job-card";
import type { MyApplication } from "@/components/application/my-application-card";
import type { CommunityPost } from "@/components/community/community-post-card";

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    agencyName: "Innovate Solutions",
    agencyLogo: "https://placehold.co/60x60.png?text=IS",
    location: "Remote",
    jobType: "Full-time",
    postedDate: "3 days ago",
    descriptionSnippet: "Join our dynamic team to build cutting-edge web applications using React and Next.js. We are looking for a passionate developer with 5+ years of experience.",
    salaryRange: "$120k - $150k",
  },
  {
    id: "2",
    title: "UX/UI Designer",
    agencyName: "Creative Co.",
    agencyLogo: "https://placehold.co/60x60.png?text=CC",
    location: "New York, NY",
    jobType: "Contract",
    postedDate: "1 week ago",
    descriptionSnippet: "Seeking a talented UX/UI Designer to create intuitive and visually appealing interfaces for mobile and web platforms. Portfolio required.",
  },
  {
    id: "3",
    title: "Marketing Intern",
    agencyName: "Growth Hackers Inc.",
    location: "San Francisco, CA (Hybrid)",
    jobType: "Internship",
    postedDate: "1 day ago",
    descriptionSnippet: "Exciting internship opportunity for a marketing student to gain hands-on experience in digital marketing, SEO, and content creation.",
    salaryRange: "$20 - $25/hr",
  },
   {
    id: "4",
    title: "Backend Engineer (Python/Django)",
    agencyName: "Tech Wizards Ltd.",
    agencyLogo: "https://placehold.co/60x60.png?text=TW",
    location: "Austin, TX",
    jobType: "Full-time",
    postedDate: "5 days ago",
    descriptionSnippet: "We're hiring a Backend Engineer skilled in Python and Django to develop and maintain scalable server-side applications and APIs.",
    salaryRange: "$110k - $140k",
  },
   {
    id: "5",
    title: "Data Analyst",
    agencyName: "Data Insights Group",
    location: "Remote",
    jobType: "Part-time",
    postedDate: "2 weeks ago",
    descriptionSnippet: "Part-time Data Analyst needed to interpret data, analyze results using statistical techniques, and provide ongoing reports.",
  },
];

export const mockMyApplications: MyApplication[] = [
  {
    id: "app1",
    jobTitle: "Senior Frontend Developer",
    agencyName: "Innovate Solutions",
    appliedDate: "2 days ago",
    status: "Under Review",
  },
  {
    id: "app2",
    jobTitle: "UX/UI Designer",
    agencyName: "Creative Co.",
    appliedDate: "6 days ago",
    status: "Interview Scheduled",
    interviewDate: "2024-08-15T10:00:00Z"
  },
  {
    id: "app3",
    jobTitle: "Product Manager",
    agencyName: "Future Tech",
    appliedDate: "10 days ago",
    status: "Rejected",
  },
];

export const mockAgencyJobs = [
  {
    id: "jobA1",
    title: "Lead Software Architect",
    postedDate: "2024-07-20",
    status: "Active",
    applicantCount: 35,
  },
  {
    id: "jobA2",
    title: "Junior Graphic Designer",
    postedDate: "2024-07-15",
    status: "Paused",
    applicantCount: 12,
  },
  {
    id: "jobA3",
    title: "DevOps Engineer",
    postedDate: "2024-06-30",
    status: "Closed",
    applicantCount: 58, // Hired 1
  },
];

export const mockApplicants = [
    { id: 'applicant1', name: 'Alice Wonderland', appliedDate: '2024-07-28', status: 'New', resumeUrl: '#' },
    { id: 'applicant2', name: 'Bob The Builder', appliedDate: '2024-07-27', status: 'Reviewed', resumeUrl: '#' },
    { id: 'applicant3', name: 'Charlie Chaplin', appliedDate: '2024-07-26', status: 'Interviewing', resumeUrl: '#' },
    { id: 'applicant4', name: 'Diana Prince', appliedDate: '2024-07-25', status: 'Offer Extended', resumeUrl: '#' },
    { id: 'applicant5', name: 'Edward Scissorhands', appliedDate: '2024-07-24', status: 'Hired', resumeUrl: '#' },
];


export const mockCommunityPosts: CommunityPost[] = [
  {
    id: "post1",
    authorName: "Jane Doe",
    authorAvatar: "https://placehold.co/40x40.png?text=JD",
    postedDate: "2 hours ago",
    title: "Tips for nailing remote job interviews?",
    content: "Hey everyone! I have a few remote job interviews lined up next week. Any tips on how to best prepare, especially for video interviews? What are some common pitfalls to avoid? Thanks in advance!",
    tags: ["interviews", "career advice", "remote work"],
    upvotes: 15,
    commentsCount: 4,
  },
  {
    id: "post2",
    authorName: "John Smith",
    authorAvatar: "https://placehold.co/40x40.png?text=JS",
    postedDate: "1 day ago",
    title: "Best portfolio practices for UX Designers in 2024",
    content: "I'm updating my UX portfolio and wondering what are the current best practices. Should I focus on case studies, visual design, or process? Any examples of great portfolios would be appreciated!",
    tags: ["ux design", "portfolio", "job search"],
    upvotes: 28,
    commentsCount: 9,
  },
];
