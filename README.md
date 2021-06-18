# ATKV Developer Assessment
# ASP.Net Core & React Application
# Goal:
You are tasked with writing a small application using Entity Framework and MVC-pattern to manage a database of employees. The application should allow for creating, deleting and editing employee information that is stored in a SQL database. 
The code provided at https://github.com/bren182/DevAssessment.git contains the starting code that must be used to finish this assessment. 
Submit solution by [deadline] by sending a link to a Google drive document (entire solution must be zipped) to brendanj@atkv.org.za.

# Getting started:
1.	Download and install Visual Studio 2019 Community edition (link to download: https://visualstudio.microsoft.com/downloads/).
  a.	While installing Visual Studio 2019 Community edition, make sure the following features are selected in the setup: 
    i.	Node.js development.
    ii.	ASP.net and web development.
    iii.	.Net Core cross-platform development.
2.	Download and install .NET 5.0 runtime and SDK (link to download: https://dotnet.microsoft.com/download/visual-studio-sdks ).
3.	Download and install Node.js (link to download: https://nodejs.org/en/ ).
4.	Start Visual Studio 2019 and select ‘Clone a repository’, paste in link to repo: https://github.com/bren182/DevAssessment.git .
5.	Open ‘Project.sln’ by double-clicking the file in the solution explorer. 
a.	If Visual Studio prompts that some features are required to load the project, install features.
6.	Build project by selecting ‘Build’ => ‘Build solution’.
7.	Run project by selecting ‘Debug’ => ‘Start debugging’. 

# Screen design:
 
-	Display a table with all employees and their information.
  -	Table should contain columns:
    -	Full Name
    -	Age
    -	Mobile Number
    -	Edit functionality
    -	Delete functionality
-	Display a form for creating a new employee record.
  -	When form is submitted via clicking the blue ‘Submit’ button, the table refreshes to show the new employee record.
-	When ‘Delete’ is clicked, the table refreshes to show that the record is deleted.
