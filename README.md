## Digital CV for Solveig Béen.
#### This is an examination task in course Frontend frameworks with React. 35yhp at education for Frontend development.

Web-site description:

The start page/Home includes a short personal presentation. Competences are divided into Job, Education, and Additional areas. Separate buttons will show each of these competences separatly.
The second page/Projects there are links to selected Frontend prjects published on Git-hub. On this page there are also some screenshot images from the projects, placed in a 'carousel' to easy toggle the images.
The last page/Contact includes a form where a web-site visitor can add a message for contact. When submitting the form the visitor's name is fetched to the confirming modal.
For all pages it is possible to switch between a light and dark color theme.

Technical Description:

- React by Vite.
- Installed React Router Dom for routing pages.
- Installed Redux for easy state handling between pages and components.


The 'ButtonGeneral' is a component that is re-used for all buttons on the web-site. It is customized to fit different usage by its props (className, onClick, title).


React Router is used to obtain navigation between the views Home/ Project /Contact. 
'NavLink' is used on Nav.jsx to be able to style the links in the navigation menu. To improve the usabiltiy impression to highlight the active page.
If the url is invalid, an error page is presented.

Redux is used for global statehandling. It is used to set different style themes that affects the whole web-site.  ThemeProvide.jsx together with ThemeToggler is ised for the Theme toggling.

Interaction with Git-Api is used in the ProjectOnGitHub component, where data is fethed from the GitHub. The data  is then populated on the Project page.  


 React Hooks that are used:

-useState. 

-useEffect. Used to fetch data from GitHub-Api in FetchData.jsx component. The useEffect Hook is useful when synchronizing a component with an external system.
-useEffect. Also used to add toggling of body background color when the Theme-toggler is done. 

-useSelector. Used to access the Redux store to retreive the current theme mode. Applied in ThemeProvider.jsx.

useRef. Used on Contact.jsx to create a reference to the modal element.  It is used to facilitate the functionality of closing the modal when clicking outside of it.
