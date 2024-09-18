--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-09-18 14:46:26

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 8 (class 2615 OID 16397)
-- Name: pgagent; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA pgagent;


ALTER SCHEMA pgagent OWNER TO postgres;

--
-- TOC entry 5079 (class 0 OID 0)
-- Dependencies: 8
-- Name: SCHEMA pgagent; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA pgagent IS 'pgAgent system tables';


--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 5080 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


--
-- TOC entry 3 (class 3079 OID 16398)
-- Name: pgagent; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgagent WITH SCHEMA pgagent;


--
-- TOC entry 5081 (class 0 OID 0)
-- Dependencies: 3
-- Name: EXTENSION pgagent; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgagent IS 'A PostgreSQL job scheduler';


--
-- TOC entry 943 (class 1247 OID 33049)
-- Name: status_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.status_enum AS ENUM (
    'pending',
    'approved',
    'rejected'
);


ALTER TYPE public.status_enum OWNER TO postgres;

--
-- TOC entry 949 (class 1247 OID 41249)
-- Name: tag_connection_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.tag_connection_enum AS ENUM (
    '0',
    '2'
);


ALTER TYPE public.tag_connection_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 243 (class 1259 OID 16652)
-- Name: add_job; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.add_job (
    email character varying(30) NOT NULL,
    role character varying(10),
    duration character varying(20),
    jobtype character varying(20),
    remuneration character varying(20),
    requirements character varying(30),
    description character varying(20)
);


ALTER TABLE public.add_job OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 16615)
-- Name: add_mentor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.add_mentor (
    mentor_id character varying(9),
    mentor_name character varying(40),
    mentor_logo character varying(70),
    mento_description character varying(200),
    years_of_exp integer,
    area_of_expertise character varying(25),
    designation character varying(30),
    institution character varying(50),
    qualification character varying(20),
    year_of_passing_out character varying(20),
    startup_assoc character varying(30),
    contact_num character varying(20),
    email_address character varying(40) NOT NULL,
    linkedin_id character varying(50),
    password character varying(18),
    hashkey character varying(50),
    user_role character varying(3)
);


ALTER TABLE public.add_mentor OWNER TO postgres;

--
-- TOC entry 246 (class 1259 OID 16670)
-- Name: aws_applied; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.aws_applied (
    team_email character varying(50) NOT NULL,
    aws_startup_name character varying(20),
    aws_email character varying(50),
    aws_description character varying(30),
    created_at timestamp without time zone,
    valid_till timestamp without time zone,
    status public.status_enum DEFAULT 'pending'::public.status_enum
);


ALTER TABLE public.aws_applied OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 16630)
-- Name: establish_connections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.establish_connections (
    connection_name character varying(20),
    organization character varying(20),
    connect_for character varying(20),
    contact_number character varying(15) NOT NULL,
    email_address character varying(40),
    connection_desig character varying(20)
);


ALTER TABLE public.establish_connections OWNER TO postgres;

--
-- TOC entry 250 (class 1259 OID 41270)
-- Name: events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events (
    event_type character varying(50),
    event_title character varying(20),
    event_privacy character varying(20),
    event_description character varying(300),
    event_date character varying(20),
    event_time character varying(20),
    created_by character varying(40),
    select_speaker character varying(35)
);


ALTER TABLE public.events OWNER TO postgres;

--
-- TOC entry 244 (class 1259 OID 16660)
-- Name: founder_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.founder_details (
    name character varying(20),
    email character varying(25) NOT NULL,
    number bigint,
    gender character varying(30),
    studentid bigint,
    linkedin character varying(40),
    role character varying(10)
);


ALTER TABLE public.founder_details OWNER TO postgres;

--
-- TOC entry 248 (class 1259 OID 24852)
-- Name: mentor_schedule; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mentor_schedule (
    team_mail character varying(25),
    startup character varying(20),
    mentor_mail character varying(25),
    date character varying(30),
    "time" character varying(30),
    description character varying(50),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.mentor_schedule OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 16583)
-- Name: mentors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mentors (
    mentor_id integer NOT NULL,
    mentor_logo bytea,
    mentor_description character varying(100),
    mentor_experience character varying(10),
    mentor_area_expertise character varying(20),
    mentor_current_designation character varying(20),
    mentor_insti character varying(40),
    mentor_qualification character varying(20),
    mentor_year_of_passing character varying(20),
    mentor_starup_associated character varying(35),
    mentor_contact_number character varying(15),
    mentor_email character varying(30),
    mentor_linkedin character varying(60),
    mentor_password character varying(20),
    created_at timestamp without time zone
);


ALTER TABLE public.mentors OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 16626)
-- Name: messages_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.messages_data (
    message_id character varying(18),
    sender_id character varying(25),
    message character varying(100),
    receiver_id character varying(25),
    sent_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.messages_data OWNER TO postgres;

--
-- TOC entry 247 (class 1259 OID 16677)
-- Name: raised_request; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.raised_request (
    team_mail character varying(30) NOT NULL,
    request_type character varying(70),
    description character varying(50),
    time_stamp timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.raised_request OWNER TO postgres;

--
-- TOC entry 251 (class 1259 OID 41273)
-- Name: request_speaker; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.request_speaker (
    speaker_name character varying(30),
    event_description character varying(200),
    created_by character varying(35)
);


ALTER TABLE public.request_speaker OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 16593)
-- Name: resume_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.resume_data (
    resume_name character varying(25),
    resume_email character varying(30) NOT NULL,
    college_data character varying(50),
    college_department character varying(20),
    resume_url character varying(150),
    resume_year integer,
    created_at timestamp without time zone
);


ALTER TABLE public.resume_data OWNER TO postgres;

--
-- TOC entry 249 (class 1259 OID 41240)
-- Name: tag_connection; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tag_connection (
    startup_team_mail character varying(30) NOT NULL,
    connection_email character varying(30),
    email_content character varying(100),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    user_role public.tag_connection_enum
);


ALTER TABLE public.tag_connection OWNER TO postgres;

--
-- TOC entry 245 (class 1259 OID 16665)
-- Name: team_member_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.team_member_details (
    team_name character varying(25),
    team_email character varying(30) NOT NULL,
    team_number bigint,
    team_designation character varying(30)
);


ALTER TABLE public.team_member_details OWNER TO postgres;

--
-- TOC entry 252 (class 1259 OID 41278)
-- Name: test_startup; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.test_startup (
    basic jsonb,
    official jsonb,
    founder jsonb,
    description jsonb,
    official_email_address text NOT NULL
);


ALTER TABLE public.test_startup OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 16565)
-- Name: user_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_data (
    user_id integer NOT NULL,
    user_mail character varying(50),
    user_password character varying(30),
    user_hash character varying(40),
    user_department character varying(20),
    user_role integer NOT NULL,
    created_at timestamp with time zone,
    user_name character varying(30) DEFAULT 'Nandhini K S'::character varying NOT NULL,
    user_contact character varying(20) DEFAULT '7092311114'::character varying NOT NULL,
    personal_email character varying(30) DEFAULT 'nandhini.ramu@gmail.com'::character varying NOT NULL
);


ALTER TABLE public.user_data OWNER TO postgres;

--
-- TOC entry 4805 (class 0 OID 16399)
-- Dependencies: 222
-- Data for Name: pga_jobagent; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobagent (jagpid, jaglogintime, jagstation) FROM stdin;
7616	2024-09-18 10:19:06.293581+05:30	EliteBook
\.


--
-- TOC entry 4806 (class 0 OID 16408)
-- Dependencies: 224
-- Data for Name: pga_jobclass; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobclass (jclid, jclname) FROM stdin;
\.


--
-- TOC entry 4807 (class 0 OID 16418)
-- Dependencies: 226
-- Data for Name: pga_job; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_job (jobid, jobjclid, jobname, jobdesc, jobhostagent, jobenabled, jobcreated, jobchanged, jobagentid, jobnextrun, joblastrun) FROM stdin;
\.


--
-- TOC entry 4809 (class 0 OID 16466)
-- Dependencies: 230
-- Data for Name: pga_schedule; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_schedule (jscid, jscjobid, jscname, jscdesc, jscenabled, jscstart, jscend, jscminutes, jschours, jscweekdays, jscmonthdays, jscmonths) FROM stdin;
\.


--
-- TOC entry 4810 (class 0 OID 16494)
-- Dependencies: 232
-- Data for Name: pga_exception; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_exception (jexid, jexscid, jexdate, jextime) FROM stdin;
\.


--
-- TOC entry 4811 (class 0 OID 16508)
-- Dependencies: 234
-- Data for Name: pga_joblog; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_joblog (jlgid, jlgjobid, jlgstatus, jlgstart, jlgduration) FROM stdin;
\.


--
-- TOC entry 4808 (class 0 OID 16442)
-- Dependencies: 228
-- Data for Name: pga_jobstep; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobstep (jstid, jstjobid, jstname, jstdesc, jstenabled, jstkind, jstcode, jstconnstr, jstdbname, jstonerror, jscnextrun) FROM stdin;
\.


--
-- TOC entry 4812 (class 0 OID 16524)
-- Dependencies: 236
-- Data for Name: pga_jobsteplog; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobsteplog (jslid, jsljlgid, jsljstid, jslstatus, jslresult, jslstart, jslduration, jsloutput) FROM stdin;
\.


--
-- TOC entry 5064 (class 0 OID 16652)
-- Dependencies: 243
-- Data for Name: add_job; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.add_job (email, role, duration, jobtype, remuneration, requirements, description) FROM stdin;
test@gmail.com	a	s	s	s	s	s
\.


--
-- TOC entry 5061 (class 0 OID 16615)
-- Dependencies: 240
-- Data for Name: add_mentor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.add_mentor (mentor_id, mentor_name, mentor_logo, mento_description, years_of_exp, area_of_expertise, designation, institution, qualification, year_of_passing_out, startup_assoc, contact_num, email_address, linkedin_id, password, hashkey, user_role) FROM stdin;
1	Kannan Santhanam	1	Kannan, with over 34 years of experience in corporate finance, capital markets, and IT, has expertise in change management, data analytics, and investment services. He is also a Certified Money Coach.	34		Money Coach	IIT-D, IIM-C	B.Tech	1981		9962513944	s_kannan99@yahoo.co.in		Nirmaan_IMS	1	1
1	C.P.Madhusudhan	1		15		Head of Sales	IIT-M, IM-B	B.Tech, PGDM	\N		9840920889	madhu@lucidindia.com		test22	1	1
\.


--
-- TOC entry 5067 (class 0 OID 16670)
-- Dependencies: 246
-- Data for Name: aws_applied; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.aws_applied (team_email, aws_startup_name, aws_email, aws_description, created_at, valid_till, status) FROM stdin;
sath@gnail.mom	Plenome	sathik@gmail.com	HealthCare	2024-07-22 16:13:32.638	2024-07-23 15:13:32.638	approved
M2Gi92OVDZ4Mk4UWYI7p8A==	Plenome	uNA8/CGeVbxHYssl/BLZv7gWqP0NNv8XXE/mqIrhZio=	HealthCare	2024-07-22 16:41:35.501	2024-07-23 15:41:35.501	approved
sat@gnail.mom	Plenome	sathi@gmail.com	HealthCare	2024-07-22 11:52:43.539	2024-07-23 10:52:43.539	approved
\.


--
-- TOC entry 5063 (class 0 OID 16630)
-- Dependencies: 242
-- Data for Name: establish_connections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.establish_connections (connection_name, organization, connect_for, contact_number, email_address, connection_desig) FROM stdin;
Prasath Narayanan	OIE	Technical Assistance	9962383309	tech_support.ie@imail.iitm.ac.in	Technical Support
Satyajit Seal	OIE	Content Assistance	8335840840	cm.ie@imail.iitm.ac.in	Content Manager
Liya	OIE	Design Assistance	8606240571	design_ie@icsrpis.iitm.ac.in	Design Intern
Sundarraj E	OIE	Patent Assistance	9790510340	pm.ie@imail.iitm.ac.in	Project Manager
Jayaprakash M	OIE	Technical Assistance	6379120338	IC40580@imail.iitm.ac.in	Trainee
\.


--
-- TOC entry 5071 (class 0 OID 41270)
-- Dependencies: 250
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.events (event_type, event_title, event_privacy, event_description, event_date, event_time, created_by, select_speaker) FROM stdin;
Masterclass	Test	Public	Test MasterClass	2024-09-16	15:23	manager.ie@imail.iitm.ac.in	C.P.Madhusudhan
Webinar	Test2	Private	Test2	2024-09-11	15:26	manager.ie@imail.iitm.ac.in	C.P.Madhusudhan
\.


--
-- TOC entry 5065 (class 0 OID 16660)
-- Dependencies: 244
-- Data for Name: founder_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.founder_details (name, email, number, gender, studentid, linkedin, role) FROM stdin;
\.


--
-- TOC entry 5069 (class 0 OID 24852)
-- Dependencies: 248
-- Data for Name: mentor_schedule; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mentor_schedule (team_mail, startup, mentor_mail, date, "time", description, created_at) FROM stdin;
test@gmail.com	nirmaan	sath@gmail.com	2024-07-09	14:59	I want Mentor Hour to be shown\n	2024-07-16 14:59:11.212786
\.


--
-- TOC entry 5059 (class 0 OID 16583)
-- Dependencies: 238
-- Data for Name: mentors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mentors (mentor_id, mentor_logo, mentor_description, mentor_experience, mentor_area_expertise, mentor_current_designation, mentor_insti, mentor_qualification, mentor_year_of_passing, mentor_starup_associated, mentor_contact_number, mentor_email, mentor_linkedin, mentor_password, created_at) FROM stdin;
4321	\\x69333239392e2f6c6b692e6a7067	-	10+	Management	Associate Prof	IITM	Phd	2007	Grow your farm	9962383309	sath@gmail.com	NULL	Nirmaan123	2024-05-03 16:48:40.432112
\.


--
-- TOC entry 5062 (class 0 OID 16626)
-- Dependencies: 241
-- Data for Name: messages_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.messages_data (message_id, sender_id, message, receiver_id, sent_at) FROM stdin;
qwesaez12aA	prasath@gmail.com	Hi Prof! how are you	prajagopal@iitm.ac.in	2024-05-31 15:21:45.899332
\.


--
-- TOC entry 5068 (class 0 OID 16677)
-- Dependencies: 247
-- Data for Name: raised_request; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.raised_request (team_mail, request_type, description, time_stamp) FROM stdin;
test@gmail.com	Request regarding Members	zds	2024-07-12 12:22:02.61322
test@gmail.com	Request regarding Members	as	2024-07-12 14:42:53.423314
test@gmail.com	Request regarding Members	as	2024-07-12 14:42:55.46152
test@gmail.com	Request regarding Contact / Connections	as	2024-07-12 14:43:01.116408
test@gmail.com	Request regarding Contact / Connections	as	2024-07-12 14:45:32.357573
test@gmail.com	Request regarding Members	fg	2024-07-12 14:46:04.287054
test@gmail.com	Type of Request	fg	2024-07-12 14:47:31.310117
test@gmail.com	Request regarding Members	fgsfc	2024-07-12 14:48:23.164817
test@gmail.com	Request regarding Members	For web development	2024-07-16 14:53:38.376454
test@gmail.com	Request regarding Documentation	n	2024-07-16 15:15:09.586183
test@gmail.com	Request regarding Internship Certificate	Working	2024-07-16 16:17:55.532369
\.


--
-- TOC entry 5072 (class 0 OID 41273)
-- Dependencies: 251
-- Data for Name: request_speaker; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.request_speaker (speaker_name, event_description, created_by) FROM stdin;
B.Vaidyanathan	fn	manager.ie@imail.iitm.ac.in
B.Vaidyanathan	ad	manager.ie@imail.iitm.ac.in
B.Vaidyanathan	ad	manager.ie@imail.iitm.ac.in
B.Vaidyanathan	ad	manager.ie@imail.iitm.ac.in
B.Vaidyanathan	ad	manager.ie@imail.iitm.ac.in
B.Vaidyanathan	ad	manager.ie@imail.iitm.ac.in
B.Vaidyanathan	ad	manager.ie@imail.iitm.ac.in
B.Vaidyanathan	Demo Day -24	manager.ie@imail.iitm.ac.in
B.Vaidyanathan	ajd	manager.ie@imail.iitm.ac.in
C.P.Madhusudhan	test	manager.ie@imail.iitm.ac.in
B.Vaidyanathan	ad	manager.ie@imail.iitm.ac.in
\.


--
-- TOC entry 5060 (class 0 OID 16593)
-- Dependencies: 239
-- Data for Name: resume_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resume_data (resume_name, resume_email, college_data, college_department, resume_url, resume_year, created_at) FROM stdin;
Shayno Beryl	shaynoberyl2302@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/1000062794.png	2	\N
Karthik	karthiksiky@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/CV.pdf	2	\N
Aswin K	k.ashwin.2603@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Aswin's+Resume+(7).pdf	2	\N
Chandra sekaran S	scsvr2004@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Chandra+Sekaran+Resume.pdf	2	\N
Navitha M	Navithanavitha342@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/DOC-20240326-WA0003_.pdf	2	\N
Ubadulla R	ubadulla125@gmail.com	St. Joseph's Institute of technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Grey+Clean+CV+Resume+Photo.pdf	2	\N
LAKSHMI PRIYA R	rajeshkumarc127@gmail.com	St.Joseph's Institute of technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/LAKSHMI+PRIYA+RESUME.docx	2	\N
IMMAN	mmanfrk23@gmail.com	St.Joseph's Institute of technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Imman+F.pdf	2	\N
Soundariya B	soundarsoundariya@gmail.com	St.Joseph's Institute of technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Minimalist+White+and+Grey+Professional+Resume.jpg	2	\N
\.


--
-- TOC entry 5070 (class 0 OID 41240)
-- Dependencies: 249
-- Data for Name: tag_connection; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tag_connection (startup_team_mail, connection_email, email_content, created_at, user_role) FROM stdin;
cm.ie@imail.iitm.ac.in	cm.ie@imail.iitm.ac.in	ad	2024-08-23 12:16:30.813262+05:30	2
cm.ie@imail.iitm.ac.in	pm.ie@imail.iitm.ac.in	axc	2024-08-23 12:24:55.983827+05:30	2
\.


--
-- TOC entry 5066 (class 0 OID 16665)
-- Dependencies: 245
-- Data for Name: team_member_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.team_member_details (team_name, team_email, team_number, team_designation) FROM stdin;
prasath narayanan	admin@machintell.co.in	9962383309	OIE
JayaPrakash JP	prasathnarayanan6@gmail.com	9962383309	CTO
Prasath Narayanan	prasathnarayanan@gmail.com	9962383309	Developer
Prasath Narayanan	prasathnarayana@gmail.com	9962383309	Developer
Prasath Narayanan	jayaprakash@hotmail.in	99872441	Tech_support
scsdf	sath@gmail.com	123445667	skfkwf
zscsc	jp@gmail.com	12345678	Test
\.


--
-- TOC entry 5073 (class 0 OID 41278)
-- Dependencies: 252
-- Data for Name: test_startup; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.test_startup (basic, official, founder, description, official_email_address) FROM stdin;
{"cohort": "2024-09-19", "program": "Nirmaan", "startup_name": "Test", "startup_tech": "Deep Technology (Anything with  deep technical expertise)", "startup_type": "Hardware", "startup_program": "Advertising", "startup_industry": "Health, Wellness & Allied Industries"}	{"password": "Nirmaan", "linkedin_id": "https://linktree.com/bug", "website_link": "http:122.32.12.33/mentor", "mentor_associated": "ada", "registration_number": "CIN1234566789", "official_email_address": "sath@gmail.com", "official_contact_number": "123456790"}	{"linkedInid": "data", "founder_name": "test", "founder_email": "test@gmail.com", "founder_gender": "Male", "founder_number": "Test", "founder_student_id": "test@gmail.com"}	{"logo_image": "", "startup_description": "ada"}	sath@gmail.com
\.


--
-- TOC entry 5058 (class 0 OID 16565)
-- Dependencies: 237
-- Data for Name: user_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_data (user_id, user_mail, user_password, user_hash, user_department, user_role, created_at, user_name, user_contact, personal_email) FROM stdin;
24080503	test@gmail.com	data@gmail.com	m76ii1t$3sh-+yUaai+=	student	5	2024-05-08 11:16:45.016111+05:30	test	9677293620	test@yahoo.com
250420241	manager.ie@imail.iitm.ac.in	qwerty223344	bwesubaoxjnxidydgwj+:+	MANAGEMENT	2	2024-04-25 17:26:37.221773+05:30	Nandhini K S	7092311114	nandhini.ramu@gmail.com
\.


--
-- TOC entry 4900 (class 2606 OID 16656)
-- Name: add_job add_job_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.add_job
    ADD CONSTRAINT add_job_pkey PRIMARY KEY (email);


--
-- TOC entry 4896 (class 2606 OID 41269)
-- Name: add_mentor add_mentor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.add_mentor
    ADD CONSTRAINT add_mentor_pkey PRIMARY KEY (email_address);


--
-- TOC entry 4906 (class 2606 OID 33059)
-- Name: aws_applied aws_applied_aws_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aws_applied
    ADD CONSTRAINT aws_applied_aws_email_key UNIQUE (aws_email);


--
-- TOC entry 4908 (class 2606 OID 33057)
-- Name: aws_applied aws_applied_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aws_applied
    ADD CONSTRAINT aws_applied_pkey PRIMARY KEY (team_email);


--
-- TOC entry 4898 (class 2606 OID 16644)
-- Name: establish_connections establish_connections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.establish_connections
    ADD CONSTRAINT establish_connections_pkey PRIMARY KEY (contact_number);


--
-- TOC entry 4902 (class 2606 OID 16664)
-- Name: founder_details founder_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.founder_details
    ADD CONSTRAINT founder_details_pkey PRIMARY KEY (email);


--
-- TOC entry 4912 (class 2606 OID 24857)
-- Name: mentor_schedule mentor_schedule_mentor_mail_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mentor_schedule
    ADD CONSTRAINT mentor_schedule_mentor_mail_key UNIQUE (mentor_mail);


--
-- TOC entry 4890 (class 2606 OID 16592)
-- Name: mentors mentors_mentor_contact_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mentors
    ADD CONSTRAINT mentors_mentor_contact_number_key UNIQUE (mentor_contact_number);


--
-- TOC entry 4892 (class 2606 OID 16589)
-- Name: mentors mentors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mentors
    ADD CONSTRAINT mentors_pkey PRIMARY KEY (mentor_id);


--
-- TOC entry 4914 (class 2606 OID 41293)
-- Name: test_startup pk_official_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test_startup
    ADD CONSTRAINT pk_official_email PRIMARY KEY (official_email_address);


--
-- TOC entry 4910 (class 2606 OID 24851)
-- Name: raised_request raised_request_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.raised_request
    ADD CONSTRAINT raised_request_pkey PRIMARY KEY (team_mail, time_stamp);


--
-- TOC entry 4894 (class 2606 OID 16597)
-- Name: resume_data resume_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resume_data
    ADD CONSTRAINT resume_data_pkey PRIMARY KEY (resume_email);


--
-- TOC entry 4904 (class 2606 OID 16669)
-- Name: team_member_details team_member_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.team_member_details
    ADD CONSTRAINT team_member_details_pkey PRIMARY KEY (team_email);


--
-- TOC entry 4886 (class 2606 OID 16569)
-- Name: user_data user_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_pkey PRIMARY KEY (user_id);


--
-- TOC entry 4888 (class 2606 OID 16571)
-- Name: user_data user_data_user_mail_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_user_mail_key UNIQUE (user_mail);


-- Completed on 2024-09-18 14:46:29

--
-- PostgreSQL database dump complete
--
