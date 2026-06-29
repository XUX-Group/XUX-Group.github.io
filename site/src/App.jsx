import { useEffect, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { courses, gallery, linkGroups, members, profileLinks, publications, researchAreas, software, tutorials } from "./data.js";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "auto" }), [pathname]);
  return null;
}

function DocumentTitle() {
  const { pathname } = useLocation();
  const titles = {
    "/": "Xuefei Xu's Group",
    "/members": "Members | Xuefei Xu's Group",
    "/research": "Research | Xuefei Xu's Group",
    "/publications": "Publications | Xuefei Xu's Group",
    "/teaching": "Teaching | Xuefei Xu's Group",
    "/tutorials": "Tutorials | Xuefei Xu's Group",
    "/software": "Software | Xuefei Xu's Group",
    "/links": "Links | Xuefei Xu's Group",
    "/contact": "Contact | Xuefei Xu's Group",
  };
  useEffect(() => { document.title = titles[pathname] || "Xuefei Xu's Group"; }, [pathname]);
  return null;
}

function ExternalLink({ href, children, className = "" }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  const items = [["/", "Home"], ["/members", "Members"], ["/research", "Research"], ["/publications", "Publications"], ["/teaching", "Teaching"], ["/tutorials", "Tutorials"], ["/software", "Software"], ["/links", "Links"], ["/contact", "Contact"]];
  return <header className="site-header"><div className="header-inner"><Link className="site-identity" to="/">Xuefei Xu's Group</Link><button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}</button><nav id="primary-navigation" className={`primary-navigation ${open ? "is-open" : ""}`} aria-label="Primary navigation">{items.map(([path, label]) => <NavLink key={path} to={path} end={path === "/"} className={({ isActive }) => isActive ? "active" : undefined}>{label}</NavLink>)}</nav></div></header>;
}

function Footer() {
  return <footer className="site-footer"><div className="section-shell footer-inner">© {new Date().getFullYear()} Xuefei Xu's Group, Tsinghua University</div></footer>;
}

function PageTitle({ children }) {
  return <div className="section-shell page-title"><h1>{children}</h1></div>;
}

function InlineLinks({ links }) {
  return <div className="inline-links">{links.map((link) => <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}</div>;
}

function PublicationEntry({ publication }) {
  return <article className="publication-entry"><div className="publication-year">{publication.year}</div><div><h2>{publication.title}</h2><p>{publication.authors}</p><p className="publication-details">{publication.details}</p><div className="publication-links"><ExternalLink href={publication.doi}>DOI</ExternalLink></div></div></article>;
}

function MemberCard({ person }) {
  return <article className="member-card"><img src={person.image} alt={person.name} loading="lazy" /><div><h3>{person.name}</h3><p className="member-role">{person.role}</p>{person.lines.map((line) => <p key={line}>{line}</p>)}{person.email && <p><a href={`mailto:${person.email}`}>{person.email}</a></p>}</div></article>;
}

function MemberSection({ title, people }) {
  if (!people.length) return null;
  return <section className="content-section"><h2>{title}</h2><div className="member-grid">{people.map((person) => <MemberCard key={person.name} person={person} />)}</div></section>;
}

function HomePage() {
  return <main className="section-shell"><section className="home-intro group-home"><div className="home-text"><h1>Xuefei Xu's Group</h1><p className="position">Theoretical and Computational Chemistry<br />Tsinghua University</p><p>We study chemical reaction dynamics, surface and interfacial catalysis, molecular simulation, and computational methods for energy-related chemistry.</p><InlineLinks links={profileLinks} /></div><img className="profile-photo" src="/assets/members/xuefei-xu.jpg" alt="Xuefei Xu" width="400" height="533" /></section><section className="content-section notice-section"><h2>Open Positions</h2><p>The group welcomes motivated graduate students and postdoctoral researchers in theoretical chemistry, molecular simulation, machine learning for atomistic modeling, enhanced sampling, and high-performance scientific computing.</p><p>Postdoctoral applicants should send a CV, representative publications, and contact information for references to <a href="mailto:xuxuefei@tsinghua.edu.cn">xuxuefei@tsinghua.edu.cn</a> or <a href="mailto:xuxuefei@gmail.com">xuxuefei@gmail.com</a>.</p></section><section className="content-section"><div className="section-heading"><h2>Research Directions</h2><Link to="/research">More</Link></div><ul className="plain-list">{researchAreas.map((area) => <li key={area.title}>{area.title}</li>)}</ul></section><section className="content-section"><div className="section-heading"><h2>Recent Publications</h2><Link to="/publications">Full publications</Link></div><div className="publication-stack">{publications.filter((paper) => paper.featured).map((paper) => <PublicationEntry key={paper.doi} publication={paper} />)}</div></section></main>;
}

function MembersPage() {
  return <main><PageTitle>Members</PageTitle><div className="section-shell page-content"><MemberSection title="Principal Investigator" people={members.pi} /><MemberSection title="Postdocs" people={members.postdocs} /><MemberSection title="Graduate Students" people={members.graduate} /><MemberSection title="Undergraduate Students" people={members.undergraduate} /><MemberSection title="Alumni" people={members.alumni} /><section className="content-section"><h2>Gallery</h2><div className="gallery-grid">{gallery.map((item) => <img key={item.src} src={item.src} alt={item.alt} loading="lazy" />)}</div></section></div></main>;
}

function ResearchPage() {
  return <main><PageTitle>Research</PageTitle><div className="section-shell page-content"><div className="research-card-list">{researchAreas.map((area) => <article key={area.title} className="research-card"><div><h2>{area.title}</h2><p>{area.description}</p><p className="image-caption">{area.caption}</p></div><img src={area.image} alt={area.caption} loading="lazy" /></article>)}</div></div></main>;
}

function PublicationsPage() {
  return <main><PageTitle>Publications</PageTitle><div className="section-shell page-content"><section className="content-section first"><div className="section-heading"><h2>Recent Publications</h2><ExternalLink href="https://scholar.google.com/citations?user=dYIdNgIAAAAJ&hl=en">Google Scholar</ExternalLink></div><div className="publication-stack">{publications.map((paper) => <PublicationEntry key={paper.doi} publication={paper} />)}</div></section><section className="content-section"><h2>Full Publications</h2><p>For the complete and updated publication list, please visit the group PI's Google Scholar profile.</p></section></div></main>;
}

function TeachingPage() {
  return <main><PageTitle>Teaching</PageTitle><div className="section-shell page-content"><div className="resource-list">{courses.map((course) => <article key={course.title}><h3>{course.title}</h3><p>{course.detail}</p></article>)}</div></div></main>;
}

function TutorialsPage() {
  return <main><PageTitle>Tutorials</PageTitle><div className="section-shell page-content"><div className="resource-list">{tutorials.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></main>;
}

function SoftwarePage() {
  return <main><PageTitle>Software</PageTitle><div className="section-shell page-content"><div className="resource-list">{software.map((item) => <article key={item.href}><h3><ExternalLink href={item.href}>{item.title}</ExternalLink></h3><p>{item.description}</p></article>)}</div></div></main>;
}

function LinksPage() {
  return <main><PageTitle>Links</PageTitle><div className="section-shell page-content"><div className="resource-groups">{linkGroups.map((group) => <section key={group.title} className="resource-group"><h2>{group.title}</h2><div className="link-list">{group.links.map((link) => <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}</div></section>)}</div></div></main>;
}

function ContactPage() {
  return <main><PageTitle>Contact</PageTitle><div className="section-shell page-content contact-content"><section><h2>Address</h2><p>Room B-551, Lee Shau Kee Technology Building</p><p>Tsinghua University, Beijing 100084, China</p></section><section><h2>Email</h2><p><a href="mailto:xuxuefei@tsinghua.edu.cn">xuxuefei@tsinghua.edu.cn</a></p><p><a href="mailto:xuxuefei@gmail.com">xuxuefei@gmail.com</a></p></section><section><h2>Telephone</h2><p>010-62796755</p></section><section><h2>Academic Profiles</h2><InlineLinks links={profileLinks} /></section></div></main>;
}

function NotFoundPage() {
  return <main><PageTitle>Page Not Found</PageTitle><div className="section-shell page-content"><p><Link to="/">Return to the home page.</Link></p></div></main>;
}

function AppLayout() {
  return <><ScrollToTop /><DocumentTitle /><Header /><Routes><Route path="/" element={<HomePage />} /><Route path="/members" element={<MembersPage />} /><Route path="/research" element={<ResearchPage />} /><Route path="/publications" element={<PublicationsPage />} /><Route path="/teaching" element={<TeachingPage />} /><Route path="/tutorials" element={<TutorialsPage />} /><Route path="/software" element={<SoftwarePage />} /><Route path="/links" element={<LinksPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} /></Routes><Footer /></>;
}

export function App() {
  return <BrowserRouter><AppLayout /></BrowserRouter>;
}
