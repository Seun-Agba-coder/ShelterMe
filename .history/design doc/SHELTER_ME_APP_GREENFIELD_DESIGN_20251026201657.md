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


Given the current experience of the team and the requirements for this project, we will use the follow technologies:

* Utilize Next.js (react) for a dynamic and responsive front-end.
* Implement Supabase For authentication and storing user data and Flask for simple APi call.
* Use Postgre in both Flask and Supabse for flexible and scalable database management. The complexity, scale, and dynamic nature of our data align well with this type of database. Given the security considerations for our system, we will use the follow strategy:
* Security credentials will be stored in an `auth` table in the database and related to the user table through a foreign key. This will make our system flexible enough to easily swap out this table for a third party auth service as our needs change.
* Passwords will be hashed and salted using standard encryption libraries.
* Authentication tokens will be passed between the front-end and the API to check for authorization for objects and resources.



## 6. System Architecture


### 6.1 Overview of Layers/Modules

* **Front-End Module:** Handles the user interface and client-side logic.
* **Back-End Module:** Manages server-side logic, API requests, and database interactions.
* **Database Module:** Stores and retrieves all application data.


### 6.2 Component Diagrams



### 6.3 Database Design




## 7. Key Architectural Decisions


### 7.1 Decision Log


* **Monolithic Architecture:** Chosen for its simplicity and ease of deployment for the MVP.
* **Tech Stack Selection:** Chosen based on team expertise, project requirements, speed of development, and community support.
* **Authentication & Authorization:** Made the choise to handle this internally to cut down the cost and complexity to launch while still architecting to easily be able to swap for a third party system later.


## 8. Quality Attributes

### 8.1 Performance

* Optimize response times with efficient API design and database indexing.

### 8.2 Scalability

* Prepare for future scaling by designing a modular and maintainable codebase.

### 8.3 Security

* Implement secure authentication, data validation, and encryption practices.

### 8.4 Maintainability

* Follow best coding practices and comprehensive documentation for easy maintenance.

## 9. Risks and Technical Debt


### 9.1 Identified Risks


* **User Adoption:** Risks related to market competition and user acquisition.
* **Technical Challenges:** Potential issues with integrating different technologies.

### 9.2 Technical Debt


* **Rapid Development:** Some best practices might be compromised for faster MVP rollout.

## 10. Appendices

[](https://github.com/faraday-academy/intro-to-software-architecture/blob/main/design_docs/CURRICULUM_APP_GREENFIELD_DESIGN.md#10-appendices)

### 10.1 Glossary

[](https://github.com/faraday-academy/intro-to-software-architecture/blob/main/design_docs/CURRICULUM_APP_GREENFIELD_DESIGN.md#101-glossary)

* *Define any additional terms used throughout the document.*

### 10.2 Index

[](https://github.com/faraday-academy/intro-to-software-architecture/blob/main/design_docs/CURRICULUM_APP_GREENFIELD_DESIGN.md#102-index)

* *Include an index of terms and sections for easy navigation.*

### 10.3 Revision History

[](https://github.com/faraday-academy/intro-to-software-architecture/blob/main/design_docs/CURRICULUM_APP_GREENFIELD_DESIGN.md#103-revision-history)

* *Document the revision history of this document.*
