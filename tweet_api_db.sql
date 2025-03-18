--
-- PostgreSQL database dump
--

-- Dumped from database version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 16.8 (Ubuntu 16.8-0ubuntu0.24.04.1)

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
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tweets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tweets (
    id character varying NOT NULL,
    fullname character varying,
    username character varying,
    text text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp without time zone
);


ALTER TABLE public.tweets OWNER TO postgres;

--
-- Data for Name: tweets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tweets (id, fullname, username, text, created_at, updated_at, deleted_at) FROM stdin;
dd12faaf-ac1c-4934-9468-579b24b7f887	Wvoyak Akne	wvakne	TESTING TWEET 123	2025-03-18 03:05:09.69	2025-03-18 03:05:09.69	\N
a94a63bd-959e-406e-ad3c-885d98ae82c2	Wvoyak Akne	wvakne	NO NEW ALBUM DROP 123	2025-03-14 04:16:08.942	2025-03-14 04:16:08.942	\N
663a5056-dbb2-4856-972b-2b9a36e23f84	Wvoyak Akne	wvakne	I AM MUSIC IS DROPPED	2025-03-18 02:11:29.291	2025-03-18 02:11:29.291	\N
b8fb7853-1114-46f8-b1d9-f03cbf2bd688	Wvoyak Akne	wvakne	hello gaes	2025-03-18 05:33:13.162	2025-03-18 05:33:13.162	\N
ccd345e5-5c28-479f-b237-e02a6bb3baed	Wvoyak Akne	wvakne	awokakwoaokwakowa\r\nkocak gaming	2025-03-18 05:33:20.237	2025-03-18 05:33:20.237	\N
45409b08-735b-4912-ac0e-3ebc51147c96	Wvoyak Akne	wvakne	damn bruh	2025-03-18 06:20:12.832	2025-03-18 06:20:12.832	\N
38669003-7a57-4e90-8724-a8cc74217c8c	Wvoyak Akne	wvakne	HELLO MISTER 123	2025-03-18 04:52:31.219	2025-03-18 04:52:31.219	\N
3282fb9e-7199-4bda-822b-af723fc3c88f	Wvoyak Akne	wvakne	kocak gaming nih orang loh\r\nawokaokoa\r\nkocak	2025-03-18 06:20:26.879	2025-03-18 06:20:26.879	\N
02c08ca4-a1ff-4af1-bb01-a4396a4bb44a	Wvoyak Akne	wvakne	useEffect(() => {\r\n  setTextTweet(tweet.text);\r\n}, [tweet]);	2025-03-18 09:42:52.609	2025-03-18 09:42:52.609	\N
7e367c90-a34d-4c6b-9974-1e2c67d6fd72	Wvoyak Akne	wvakne	Samples from Playboi Carti’s "MUSIC" Thread 💿🔊	2025-03-18 09:57:13.877	2025-03-18 09:57:13.877	\N
5222c948-02cc-49b3-bc92-4ce875e1ff50	Wvoyak Akne	wvakne	I HAAAAAATED NOT LIKE US	2025-03-18 09:57:36.853	2025-03-18 09:57:36.853	\N
\.


--
-- Name: tweets tweets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tweets
    ADD CONSTRAINT tweets_pkey PRIMARY KEY (id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

