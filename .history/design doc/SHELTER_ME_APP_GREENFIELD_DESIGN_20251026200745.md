# New Project Template: Curriculum App MVP


## 1. Introduction


This document outlines the architectural plan for the Minimum Viable Product (MVP) of the ShelterMe App. It's intended for the project's development team and future architects. It will guide the initial development and future enhancements.



### 1.2 Scope

The architecture covers the MVP of the Curriculum App, focusing on user account Student feature, AgentFeature, Payment GateWay, AdminFeature.



### 1.3 Definitions, Acronyms, and Abbreviations


* **MVP:** Minimum Viable Product
* **API:** Application Programming Interface
* **DB:** Database


### 1.5 Overview

The document proceeds to detail the architectural style, system stakeholders and concerns, a high-level system overview, architectural strategies, system architecture, key decisions, quality attributes, risks, and technical debt.



## 2. Architectural Representation


### 2.1 Architectural Style and Rationale

The system will use a **Monolithic Architectural Style** for the MVP to simplify deployment and development. We are focusing on time to launch so we can get real users on the platform and start iterating. Given the scope and scale at this stage, a monolithic approach is cost-effective and straightforward to implement.



## 3. System Stakeholders and Concerns


### 3.1 Stakeholders


* **Users:** Students Looking to find lodge off campus in G.K, Agents/Landlords looking to list their Lodges online, Admin the person that appoves the House listing made by an agent or Landlord
* **Developers:** The team developing and maintaining the app.
* **Business Owners:** Stakeholders interested in the commercial success and growth of the app.


### 3.2 System Concerns


* **Performance:** Ensuring the app is responsive and efficient.
* **Scalability:** Ability to accommodate a growing number of users.
* **Security:** Protecting user data and privacy.


## 4. System Overview



4.1 High-Level Description

The ShelterMe app is a plafrom that allows for swift and easy Lodge Finding in G.k.  It includes user authentication, Agent/Landlord House Listing, Student Lodge Finding, Admin House Verification, Safe and Secure Lodge Payment.



## 5. Architectural Strategies


### 5.1 Key Strategies
