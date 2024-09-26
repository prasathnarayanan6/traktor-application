--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-09-26 11:08:05

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
-- TOC entry 5089 (class 0 OID 0)
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
-- TOC entry 5090 (class 0 OID 0)
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
-- TOC entry 5091 (class 0 OID 0)
-- Dependencies: 3
-- Name: EXTENSION pgagent; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgagent IS 'A PostgreSQL job scheduler';


--
-- TOC entry 945 (class 1247 OID 33049)
-- Name: status_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.status_enum AS ENUM (
    'pending',
    'approved',
    'rejected'
);


ALTER TYPE public.status_enum OWNER TO postgres;

--
-- TOC entry 951 (class 1247 OID 41249)
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
    startup character varying(50),
    mentor_mail character varying(50),
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
    official_email_address text NOT NULL,
    startup_status character varying(20)
);


ALTER TABLE public.test_startup OWNER TO postgres;

--
-- TOC entry 254 (class 1259 OID 41301)
-- Name: update_funding; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.update_funding (
    id integer NOT NULL,
    startup_name character varying(255),
    funding_type character varying(50),
    amount numeric(15,2),
    purpose character varying(255),
    funding_date character varying(20),
    reference_number character varying(50),
    document text,
    description text
);


ALTER TABLE public.update_funding OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 41300)
-- Name: update_funding_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.update_funding_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.update_funding_id_seq OWNER TO postgres;

--
-- TOC entry 5092 (class 0 OID 0)
-- Dependencies: 253
-- Name: update_funding_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.update_funding_id_seq OWNED BY public.update_funding.id;


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
-- TOC entry 4856 (class 2604 OID 41304)
-- Name: update_funding id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.update_funding ALTER COLUMN id SET DEFAULT nextval('public.update_funding_id_seq'::regclass);


--
-- TOC entry 4810 (class 0 OID 16399)
-- Dependencies: 222
-- Data for Name: pga_jobagent; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobagent (jagpid, jaglogintime, jagstation) FROM stdin;
9736	2024-09-22 10:31:13.083301+05:30	EliteBook
\.


--
-- TOC entry 4811 (class 0 OID 16408)
-- Dependencies: 224
-- Data for Name: pga_jobclass; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobclass (jclid, jclname) FROM stdin;
\.


--
-- TOC entry 4812 (class 0 OID 16418)
-- Dependencies: 226
-- Data for Name: pga_job; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_job (jobid, jobjclid, jobname, jobdesc, jobhostagent, jobenabled, jobcreated, jobchanged, jobagentid, jobnextrun, joblastrun) FROM stdin;
\.


--
-- TOC entry 4814 (class 0 OID 16466)
-- Dependencies: 230
-- Data for Name: pga_schedule; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_schedule (jscid, jscjobid, jscname, jscdesc, jscenabled, jscstart, jscend, jscminutes, jschours, jscweekdays, jscmonthdays, jscmonths) FROM stdin;
\.


--
-- TOC entry 4815 (class 0 OID 16494)
-- Dependencies: 232
-- Data for Name: pga_exception; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_exception (jexid, jexscid, jexdate, jextime) FROM stdin;
\.


--
-- TOC entry 4816 (class 0 OID 16508)
-- Dependencies: 234
-- Data for Name: pga_joblog; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_joblog (jlgid, jlgjobid, jlgstatus, jlgstart, jlgduration) FROM stdin;
\.


--
-- TOC entry 4813 (class 0 OID 16442)
-- Dependencies: 228
-- Data for Name: pga_jobstep; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobstep (jstid, jstjobid, jstname, jstdesc, jstenabled, jstkind, jstcode, jstconnstr, jstdbname, jstonerror, jscnextrun) FROM stdin;
\.


--
-- TOC entry 4817 (class 0 OID 16524)
-- Dependencies: 236
-- Data for Name: pga_jobsteplog; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobsteplog (jslid, jsljlgid, jsljstid, jslstatus, jslresult, jslstart, jslduration, jsloutput) FROM stdin;
\.


--
-- TOC entry 5072 (class 0 OID 16652)
-- Dependencies: 243
-- Data for Name: add_job; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.add_job (email, role, duration, jobtype, remuneration, requirements, description) FROM stdin;
test@gmail.com	a	s	s	s	s	s
\.


--
-- TOC entry 5069 (class 0 OID 16615)
-- Dependencies: 240
-- Data for Name: add_mentor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.add_mentor (mentor_id, mentor_name, mentor_logo, mento_description, years_of_exp, area_of_expertise, designation, institution, qualification, year_of_passing_out, startup_assoc, contact_num, email_address, linkedin_id, password, hashkey, user_role) FROM stdin;
1	C.P.Madhusudhan	1		15		Head of Sales	IIT-M, IM-B	B.Tech, PGDM	\N		9840920889	madhu@lucidindia.com		test22	1	1
\.


--
-- TOC entry 5075 (class 0 OID 16670)
-- Dependencies: 246
-- Data for Name: aws_applied; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.aws_applied (team_email, aws_startup_name, aws_email, aws_description, created_at, valid_till, status) FROM stdin;
sath@gnail.mom	Plenome	sathik@gmail.com	HealthCare	2024-07-22 16:13:32.638	2024-07-23 15:13:32.638	approved
M2Gi92OVDZ4Mk4UWYI7p8A==	Plenome	uNA8/CGeVbxHYssl/BLZv7gWqP0NNv8XXE/mqIrhZio=	HealthCare	2024-07-22 16:41:35.501	2024-07-23 15:41:35.501	approved
sat@gnail.mom	Plenome	sathi@gmail.com	HealthCare	2024-07-22 11:52:43.539	2024-07-23 10:52:43.539	approved
\.


--
-- TOC entry 5071 (class 0 OID 16630)
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
-- TOC entry 5079 (class 0 OID 41270)
-- Dependencies: 250
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.events (event_type, event_title, event_privacy, event_description, event_date, event_time, created_by, select_speaker) FROM stdin;
Masterclass	Test	Public	Test MasterClass	2024-09-16	15:23	manager.ie@imail.iitm.ac.in	C.P.Madhusudhan
Webinar	Test2	Private	Test2	2024-09-11	15:26	manager.ie@imail.iitm.ac.in	C.P.Madhusudhan
Workshop	Demo Day	Public	Test	2024-09-27	09:30	manager.ie@imail.iitm.ac.in	C.P.Madhusudhan
\.


--
-- TOC entry 5073 (class 0 OID 16660)
-- Dependencies: 244
-- Data for Name: founder_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.founder_details (name, email, number, gender, studentid, linkedin, role) FROM stdin;
\.


--
-- TOC entry 5077 (class 0 OID 24852)
-- Dependencies: 248
-- Data for Name: mentor_schedule; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mentor_schedule (startup, mentor_mail, date, "time", description, created_at) FROM stdin;
me17d002@smail.iitm.ac.in	madhu@lucidindia.com	2024-09-30	16:30		2024-09-25 12:31:26.272011
\.


--
-- TOC entry 5067 (class 0 OID 16583)
-- Dependencies: 238
-- Data for Name: mentors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mentors (mentor_id, mentor_logo, mentor_description, mentor_experience, mentor_area_expertise, mentor_current_designation, mentor_insti, mentor_qualification, mentor_year_of_passing, mentor_starup_associated, mentor_contact_number, mentor_email, mentor_linkedin, mentor_password, created_at) FROM stdin;
4321	\\x69333239392e2f6c6b692e6a7067	-	10+	Management	Associate Prof	IITM	Phd	2007	Grow your farm	9962383309	sath@gmail.com	NULL	Nirmaan123	2024-05-03 16:48:40.432112
\.


--
-- TOC entry 5070 (class 0 OID 16626)
-- Dependencies: 241
-- Data for Name: messages_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.messages_data (message_id, sender_id, message, receiver_id, sent_at) FROM stdin;
qwesaez12aA	prasath@gmail.com	Hi Prof! how are you	prajagopal@iitm.ac.in	2024-05-31 15:21:45.899332
\.


--
-- TOC entry 5076 (class 0 OID 16677)
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
-- TOC entry 5080 (class 0 OID 41273)
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
-- TOC entry 5068 (class 0 OID 16593)
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
-- TOC entry 5078 (class 0 OID 41240)
-- Dependencies: 249
-- Data for Name: tag_connection; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tag_connection (startup_team_mail, connection_email, email_content, created_at, user_role) FROM stdin;
cm.ie@imail.iitm.ac.in	cm.ie@imail.iitm.ac.in	ad	2024-08-23 12:16:30.813262+05:30	2
cm.ie@imail.iitm.ac.in	pm.ie@imail.iitm.ac.in	axc	2024-08-23 12:24:55.983827+05:30	2
\.


--
-- TOC entry 5074 (class 0 OID 16665)
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
-- TOC entry 5081 (class 0 OID 41278)
-- Dependencies: 252
-- Data for Name: test_startup; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.test_startup (basic, official, founder, description, official_email_address, startup_status) FROM stdin;
{"cohort": "", "program": "Akshar", "startup_name": "Nexuscare", "startup_tech": "Others", "startup_type": "Service", "startup_program": "Software & Data", "startup_industry": "Healthcare"}	{"password": "Nexuscare", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "nithinmaloth.44f@gmail.com", "official_contact_number": "7680054781"}	{"linkedInid": "", "founder_name": "Nithin Maloth", "founder_email": "nithinmaloth.44f@gmail.com", "founder_gender": "Male", "founder_number": "7680054781", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	nithinmaloth.44f@gmail.com	Active
{"cohort": "", "program": "Pratham", "startup_name": "MeDow", "startup_tech": "Others", "startup_type": "Hybrid", "startup_program": "Ecommerce & Retail", "startup_industry": "Sustainability"}	{"password": "MeDow", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "itismesaksham@gmail.com", "official_contact_number": "7017274036"}	{"linkedInid": "", "founder_name": "Saksham", "founder_email": "itismesaksham@gmail.com", "founder_gender": "Male", "founder_number": "7017274036", "founder_student_id": "cy23s400"}	{"logo_image": "", "startup_description": "An eco-friendly alternative to synthetic fibers like nylon, polyester, and acrylic used excessively in fast fashion clothing is the use of banana silk, combined with fast fashion designs and clothing techniques, to create garments that are not only biodegradable and have a lower environmental footprint throughout their lifecycle but also satisfy customers with their desired favourite fast fashion clothes."}	itismesaksham@gmail.com	Active
{"cohort": "", "program": "Pratham", "startup_name": "i-Genie", "startup_tech": "Others", "startup_type": "Service", "startup_program": "services", "startup_industry": "Industry 4.0"}	{"password": "Igenie", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "me23s401@smail.iitm.ac.in", "official_contact_number": "7014129168"}	{"linkedInid": "", "founder_name": "Srijan Tiwari", "founder_email": "me23s401@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "7014129168", "founder_student_id": ""}	{"logo_image": "", "startup_description": "i-Genie is a platform created to develop a market place for the global non-destructive testing and evaluation industries, as well as an educational platform for the NDT sector that includes academic courses as well as training certifications."}	me23s401@smail.iitm.ac.in	Active
{"cohort": "", "program": "Akshar", "startup_name": "Sukoon", "startup_tech": "Others", "startup_type": "", "startup_program": "Manufacturing & Industry", "startup_industry": "Industry 4.0"}	{"password": "", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "ch19b076@smail.iitm.ac.in", "official_contact_number": "9049617869"}	{"linkedInid": "", "founder_name": "Phalgun Vyas", "founder_email": "ch19b076@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "9049617869", "founder_student_id": ""}	{"logo_image": "", "startup_description": "At Sukoon we are solving the problem of excessive heat stress, which impacts health & productivity of individuals working in heat intensive environments. We are creating the next generation Wearables which provide an unparalleled sensation of comfort through smart customised temperature controlled apparel."}	ch19b076@smail.iitm.ac.in	Active
{"cohort": "", "program": "Akshar", "startup_name": "Seat of Joy", "startup_tech": "Others", "startup_type": "Service", "startup_program": "Hardware & IOT", "startup_industry": "Industry 4.0"}	{"password": "Seat123", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "ed19b063@smail.iitm.ac.in", "official_contact_number": ""}	{"linkedInid": "", "founder_name": "Sai Gowtham Tamminaina", "founder_email": "ed19b063@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	ed19b063@smail.iitm.ac.in	Active
{"cohort": "", "program": "Akshar", "startup_name": "Inbound Aerospace", "startup_tech": "Others", "startup_type": "Service", "startup_program": "Manufacturing & Industry", "startup_industry": "Industry 4.0"}	{"password": "Inbound123", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "ae14d402@smail.iitm.ac.in", "official_contact_number": "8111927056"}	{"linkedInid": "", "founder_name": "Aravind I B", "founder_email": "ae14d402@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "8111927056", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	ae14d402@smail.iitm.ac.in	Active
{"cohort": "", "program": "Akshar", "startup_name": "CaptioPath", "startup_tech": "Others", "startup_type": "Service", "startup_program": "Software & Data", "startup_industry": "Healthcare"}	{"password": "CaptioPath123", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "cs19d002@smail.iitm.ac.in", "official_contact_number": "9880139699"}	{"linkedInid": "", "founder_name": "Krishna P", "founder_email": "cs19d002@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "9880139699", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	cs19d002@smail.iitm.ac.in	Active
{"cohort": "", "program": "Akshar", "startup_name": "See O2", "startup_tech": "Others", "startup_type": "", "startup_program": "Energy & Environment", "startup_industry": "Sustainability"}	{"password": "Seeo2", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "ae19b010@smail.iitm.ac.in", "official_contact_number": ""}	{"linkedInid": "", "founder_name": "Sai S Kalyan", "founder_email": "ae19b010@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "", "founder_student_id": ""}	{"logo_image": "", "startup_description": "Awareness of Greenhouse gas emmission, carbon emmission through a tracker, recommensation app."}	ae19b010@smail.iitm.ac.in	Active
{"cohort": "", "program": "Pratham", "startup_name": "Melango", "startup_tech": "Others", "startup_type": "Software", "startup_program": "Edtech", "startup_industry": "Education & Research"}	{"password": "qwerty223344", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "nihalojha99@gmail.com", "official_contact_number": "960011481"}	{"linkedInid": "", "founder_name": "Nihal Ojha", "founder_email": "nihalojha99@gmail.com", "founder_gender": "Male", "founder_number": "960011481", "founder_student_id": "CE16B107"}	{"logo_image": "", "startup_description": ""}	nihalojha99@gmail.com	Active
{"cohort": "", "program": "Pratham", "startup_name": "Terracline", "startup_tech": "Internet of Things", "startup_type": "Hardware", "startup_program": "Energy & Environment", "startup_industry": "Others"}	{"password": "", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "hmanoharan22@gmail.com", "official_contact_number": "9945107599"}	{"linkedInid": "", "founder_name": "Hariprasad Manoharan", "founder_email": "hmanoharan22@gmail.com", "founder_gender": "Male", "founder_number": "9945107599", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	hmanoharan22@gmail.com	Active
{"cohort": "", "program": "Pratham", "startup_name": "TARANG", "startup_tech": "Others", "startup_type": "Software", "startup_program": "Energy & Environment", "startup_industry": "Others"}	{"password": "qwerty223344", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "oe21d011@smail.iitm.ac.in", "official_contact_number": "8951590972"}	{"linkedInid": "", "founder_name": "Avinash", "founder_email": "oe21d011@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "9851590972", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	oe21d011@smail.iitm.ac.in	Active
{"cohort": "", "program": "Pratham", "startup_name": "MachIntell Corporation", "startup_tech": "Internet of Things", "startup_type": "Hybrid", "startup_program": "Manufacturing & Industry", "startup_industry": "Manufacturing & Processing"}	{"password": "", "linkedin_id": "", "website_link": "https://machintell.co.in", "mentor_associated": "", "registration_number": "", "official_email_address": "me17d002@smail.iitm.ac.in", "official_contact_number": "7002533125"}	{"linkedInid": "", "founder_name": "Shashi Bhushan Gunjan", "founder_email": "me17d002@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "7002533125", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	me17d002@smail.iitm.ac.in	Active
{"cohort": "", "program": "Pratham", "startup_name": "Opto-mag-Diagnostics", "startup_tech": "Deep Technology (Anything with  deep technical expertise)", "startup_type": "Hardware", "startup_program": "Hardware & IOT", "startup_industry": "Healthcare"}	{"password": "optomagdiagnostics", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "ph22d041@smail.iitm.ac.in", "official_contact_number": "9972551157"}	{"linkedInid": "", "founder_name": "Praveena Ganapati Hedge", "founder_email": "ph22d041@smail.ac.in", "founder_gender": "Male", "founder_number": "9972551157", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	ph22d041@smail.iitm.ac.in	Active
{"cohort": "", "program": "Pratham", "startup_name": "HelpingUDrive", "startup_tech": "Internet of Things", "startup_type": "Hardware", "startup_program": "Hardware & IOT", "startup_industry": "Mobility"}	{"password": "HUD", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "me21b094@smail.iitm.ac.in", "official_contact_number": "7977509081"}	{"linkedInid": "", "founder_name": "Kunal Bibolia", "founder_email": "me21b094@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "7977509081", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	me21b094@smail.iitm.ac.in	Active
{"cohort": "", "program": "Pratham", "startup_name": "NexB2B Solutions", "startup_tech": "Internet of Things", "startup_type": "Hybrid", "startup_program": "Hardware & IOT", "startup_industry": "Others"}	{"password": "qwerty223344", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "ed19b046@smail.iitm.ac.in", "official_contact_number": "7721836932"}	{"linkedInid": "", "founder_name": "Atish Gaykar", "founder_email": "ed19b046@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "7721836932", "founder_student_id": "ed19b046"}	{"logo_image": "", "startup_description": ""}	ed19b046@smail.iitm.ac.in	Active
{"cohort": "", "program": "Akshar", "startup_name": "Plenome", "startup_tech": "App Development", "startup_type": "Software", "startup_program": "Software & Data", "startup_industry": "E-Commerce Platform"}	{"password": "qwerty22334", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "1234567CIN", "official_email_address": "plenome@plenome.in", "official_contact_number": "1234567890"}	{"linkedInid": "", "founder_name": "Plenome", "founder_email": "test", "founder_gender": "Male", "founder_number": "Number", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	plenome@plenome.in	Active
{"cohort": "", "program": "Pratham", "startup_name": "MatLoad Solutions", "startup_tech": "Others", "startup_type": "Hardware", "startup_program": "Manufacturing & Industry", "startup_industry": "Industry 4.0"}	{"password": "Matload", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "mm20d016@smail.iitm.ac.in", "official_contact_number": "829787082"}	{"linkedInid": "", "founder_name": "Allamula Ashok", "founder_email": "mm20d016@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "829787082", "founder_student_id": "mm20d016"}	{"logo_image": "", "startup_description": "Imagine you want to build a house with golden appearance;  bricks coated with a very thin layer of gold (like paint) can give that appearance but effective way of coating is not known."}	mm20d016@smail.iitm.ac.in	Active
{"cohort": "", "program": "Pratham", "startup_name": "Tribla", "startup_tech": "Others", "startup_type": "Service", "startup_program": "Ecommerce & Retail", "startup_industry": "Industry 4.0"}	{"password": "Tribla", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "ce23e16@smail.iitm.ac.in", "official_contact_number": "7087685466"}	{"linkedInid": "", "founder_name": "Mubasher Ahmad", "founder_email": "ce23e016@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "7087685466", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	ce23e16@smail.iitm.ac.in	Active
{"cohort": "", "program": "Pratham", "startup_name": "Mainto ", "startup_tech": "App Development", "startup_type": "Service", "startup_program": "services", "startup_industry": "Industry 4.0"}	{"password": "Mainto", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "kartikthombare.kvt@gmail.com", "official_contact_number": "7972294961"}	{"linkedInid": "", "founder_name": "Kartik Vinod Thombare", "founder_email": "kartikthombare.kvt@gmail.com", "founder_gender": "Male", "founder_number": "7972294961", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	kartikthombare.kvt@gmail.com	Active
{"cohort": "", "program": "Pratham", "startup_name": "DemCare", "startup_tech": "Others", "startup_type": "Service", "startup_program": "Hardware & IOT", "startup_industry": "Healthcare"}	{"password": "DemCare", "linkedin_id": "", "website_link": "", "mentor_associated": "", "registration_number": "", "official_email_address": "ep20b033@smail.iitm.ac.in", "official_contact_number": "9384843008"}	{"linkedInid": "", "founder_name": "Sanjay Krishnan S", "founder_email": "ep20b033@smail.iitm.ac.in", "founder_gender": "Male", "founder_number": "9384843008", "founder_student_id": ""}	{"logo_image": "", "startup_description": ""}	ep20b033@smail.iitm.ac.in	Active
\.


--
-- TOC entry 5083 (class 0 OID 41301)
-- Dependencies: 254
-- Data for Name: update_funding; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.update_funding (id, startup_name, funding_type, amount, purpose, funding_date, reference_number, document, description) FROM stdin;
19	me17d002@smail.iitm.ac.in	Funding Distributed	200000.00	Pratham Fund 	2024-09-25	00000		Pratham Fund 2L
20	mm20d016@smail.iitm.ac.in	Funding Distributed	200000.00	Pratham Fund	2024-09-25	00000		Pratham Fund 2L
21	ae19b010@smail.iitm.ac.in	Funding Distributed	500000.00	Akshar Fund	2024-09-25	00000		Akshar Fund 5L
22	cs19d002@smail.iitm.ac.in	Funding Distributed	500000.00	Akshar Fund Allocation	2024-09-25	00000		Akshar fund 5L Distributed
23	me17d002@smail.iitm.ac.in	Funding Utilized	2000.00	Standee	2024-09-25	00000		Standee
\.


--
-- TOC entry 5066 (class 0 OID 16565)
-- Dependencies: 237
-- Data for Name: user_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_data (user_id, user_mail, user_password, user_hash, user_department, user_role, created_at, user_name, user_contact, personal_email) FROM stdin;
24080503	test@gmail.com	data@gmail.com	m76ii1t$3sh-+yUaai+=	student	5	2024-05-08 11:16:45.016111+05:30	test	9677293620	test@yahoo.com
250420241	manager.ie@imail.iitm.ac.in	qwerty223344	bwesubaoxjnxidydgwj+:+	MANAGEMENT	2	2024-04-25 17:26:37.221773+05:30	Nandhini K S	7092311114	nandhini.ramu@gmail.com
24080504	finance_new@imail.iitm.ac.in	securepassword	generatedhash123	FINANCE	3	2024-09-21 12:52:12.592895+05:30	Finance Team	9876543210	finance@imail.com
\.


--
-- TOC entry 5093 (class 0 OID 0)
-- Dependencies: 253
-- Name: update_funding_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.update_funding_id_seq', 23, true);


--
-- TOC entry 4906 (class 2606 OID 16656)
-- Name: add_job add_job_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.add_job
    ADD CONSTRAINT add_job_pkey PRIMARY KEY (email);


--
-- TOC entry 4902 (class 2606 OID 41269)
-- Name: add_mentor add_mentor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.add_mentor
    ADD CONSTRAINT add_mentor_pkey PRIMARY KEY (email_address);


--
-- TOC entry 4912 (class 2606 OID 33059)
-- Name: aws_applied aws_applied_aws_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aws_applied
    ADD CONSTRAINT aws_applied_aws_email_key UNIQUE (aws_email);


--
-- TOC entry 4914 (class 2606 OID 33057)
-- Name: aws_applied aws_applied_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aws_applied
    ADD CONSTRAINT aws_applied_pkey PRIMARY KEY (team_email);


--
-- TOC entry 4904 (class 2606 OID 16644)
-- Name: establish_connections establish_connections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.establish_connections
    ADD CONSTRAINT establish_connections_pkey PRIMARY KEY (contact_number);


--
-- TOC entry 4908 (class 2606 OID 16664)
-- Name: founder_details founder_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.founder_details
    ADD CONSTRAINT founder_details_pkey PRIMARY KEY (email);


--
-- TOC entry 4918 (class 2606 OID 41322)
-- Name: mentor_schedule mentor_schedule_mentor_mail_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mentor_schedule
    ADD CONSTRAINT mentor_schedule_mentor_mail_key UNIQUE (mentor_mail);


--
-- TOC entry 4896 (class 2606 OID 16592)
-- Name: mentors mentors_mentor_contact_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mentors
    ADD CONSTRAINT mentors_mentor_contact_number_key UNIQUE (mentor_contact_number);


--
-- TOC entry 4898 (class 2606 OID 16589)
-- Name: mentors mentors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mentors
    ADD CONSTRAINT mentors_pkey PRIMARY KEY (mentor_id);


--
-- TOC entry 4920 (class 2606 OID 41293)
-- Name: test_startup pk_official_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test_startup
    ADD CONSTRAINT pk_official_email PRIMARY KEY (official_email_address);


--
-- TOC entry 4916 (class 2606 OID 24851)
-- Name: raised_request raised_request_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.raised_request
    ADD CONSTRAINT raised_request_pkey PRIMARY KEY (team_mail, time_stamp);


--
-- TOC entry 4900 (class 2606 OID 16597)
-- Name: resume_data resume_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resume_data
    ADD CONSTRAINT resume_data_pkey PRIMARY KEY (resume_email);


--
-- TOC entry 4910 (class 2606 OID 16669)
-- Name: team_member_details team_member_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.team_member_details
    ADD CONSTRAINT team_member_details_pkey PRIMARY KEY (team_email);


--
-- TOC entry 4922 (class 2606 OID 41308)
-- Name: update_funding update_funding_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.update_funding
    ADD CONSTRAINT update_funding_pkey PRIMARY KEY (id);


--
-- TOC entry 4892 (class 2606 OID 16569)
-- Name: user_data user_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_pkey PRIMARY KEY (user_id);


--
-- TOC entry 4894 (class 2606 OID 16571)
-- Name: user_data user_data_user_mail_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_user_mail_key UNIQUE (user_mail);


-- Completed on 2024-09-26 11:08:09

--
-- PostgreSQL database dump complete
--

