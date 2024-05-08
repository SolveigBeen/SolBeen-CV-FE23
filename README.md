Digital CV for Solveig Béen.

Web-site description:

The start page/Home includes a short personal presentation. Competences are divided into Job, Education, and Additional areas. Separate buttons will show each of these competences separatly.
The second page/Projects there are links to selected Frontend prjects published on Git-hub. On this page there are also some screenshot images from the projects, placed in a 'carousel' to easy toggle the images.
The last page/Contact includes a form where a web-site visitor can add a message for contact. When submitting the form the visitor's name is fetched to the confirming modal.
For all pages it sis possible to switch between a light and dark color theme.

Technical Description:

- React by Vite.
- Installed React Router Dom for routing pages.
- Installed Redux for easy state handling between pages and components.

different React Hooks that are used




React Router is used to obtain navigation between the views Home/ Project /Contact. 
'NavLink' is used on Nav.jsx to be able to style the links in the navigation menu. To improve the usabiltiy impression to highlight the active page.

Redux is used to globally set different style themes that affects the whole web-site.  ThemeProvide.jsx together with ThemeToggler is ised for the Theme toggling.

Interaction with Git-Api is used on the Project page, where the FetchData feature requests data from GitHub which are then populated on the Project page.  

 React Hooks that are used:

-useState. 

-useEffect. Used to fetch data from GitHub-Api in FetchData.jsx component. The useEffect Hook is useful when synchronizing a component with an external system.
-useEffect. Also used to add toggling of body background color when the Theme-toggler is done. 

-useSelector. Used to access the Redux store to retreive the current theme mode. Applied in ThemeProvider.jsx.