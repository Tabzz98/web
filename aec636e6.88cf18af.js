(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),o=(n(0),n(77)),r=n(78),s={title:"Dependencies and Auth"},c={unversionedId:"tutorials/todo-app/2-dependencies-and-auth",id:"tutorials/todo-app/2-dependencies-and-auth",isDocsHomePage:!1,title:"Dependencies and Auth",description:"We assume that you went through Todo App: Basics and are continuing from there.",source:"@site/docs/tutorials/todo-app/2-dependencies-and-auth.md",slug:"/tutorials/todo-app/2-dependencies-and-auth",permalink:"/docs/tutorials/todo-app/2-dependencies-and-auth",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/tutorials/todo-app/2-dependencies-and-auth.md",version:"current",sidebar:"docs",previous:{title:"Basics",permalink:"/docs/tutorials/todo-app/1-crud"},next:{title:"Overview",permalink:"/docs/language/overview"}},l=[{value:"Dependencies",id:"dependencies",children:[]},{value:"User + authentication",id:"user--authentication",children:[{value:"Adding entity User",id:"adding-entity-user",children:[]},{value:"Defining <code>auth</code> declaration",id:"defining-auth-declaration",children:[]},{value:"Implementing <code>signUp</code> action",id:"implementing-signup-action",children:[]},{value:"Creating Auth page",id:"creating-auth-page",children:[]},{value:"Updating Main page to check if user is authenticated",id:"updating-main-page-to-check-if-user-is-authenticated",children:[]},{value:"Defining User-Task relation in entities",id:"defining-user-task-relation-in-entities",children:[]},{value:"Updating operations to forbid access to non-authenticated users",id:"updating-operations-to-forbid-access-to-non-authenticated-users",children:[]},{value:"Logout button",id:"logout-button",children:[]}]},{value:"The End",id:"the-end",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We assume that you went through ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials/todo-app/1-crud"}),"Todo App: Basics")," and are continuing from there."))),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("p",null,"What is a Todo app without some clocks!? Well, still a Todo app, but certainly not as fun as one with the clocks!"),Object(o.b)("p",null,"So, let's add a couple of clocks to our app, to help us track time while we perform our tasks (and to demonstrate ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")," feature)."),Object(o.b)("p",null,"For this, we will use ",Object(o.b)("inlineCode",{parentName:"p"},"react-clock")," library from NPM. We can add it to our project as a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/language/basic-elements#dependencies"}),"dependency")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\ndependencies {=json\n  "react-clock": "3.0.0"\njson=}\n')),Object(o.b)("p",null,"Run (if it is already running, stop it first and then run it again)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp start\n")),Object(o.b)("p",null,"to have Wasp download and install new dependency."),Object(o.b)("p",null,"Next, let's create a ",Object(o.b)("inlineCode",{parentName:"p"},"Clocks")," component where we can play with the clocks."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="ext/Clocks.js"',title:'"ext/Clocks.js"'}),"import React, { useEffect, useState } from 'react'\nimport Clock from 'react-clock'\nimport 'react-clock/dist/Clock.css'\n\nexport default () => {\n  const [time, setTime] = useState(new Date())\n  \n  useEffect(() => {\n    const interval = setInterval(() => setTime(new Date()), 1000)\n    return () => clearInterval(interval)\n  }, [])\n  \n  return (\n    <div style={{ display: 'flex' }}>\n      <Clock value={time} />\n      <Clock value={new Date(time.getTime() + 60 * 60000)} />\n    </div>\n  )\n}\n")),Object(o.b)("p",null,"And let's import it in our main React component."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'{2,13} title="ext/MainPage.js"',"{2,13}":!0,title:'"ext/MainPage.js"'}),"// ...\nimport Clocks from './Clocks'\n\nconst MainPage = () => {\n  const { data: tasks, isFetching, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      <NewTaskForm />\n\n      {tasks && <TasksList tasks={tasks} />}\n\n      <p> <Clocks /> </p>\n\n      {isFetching && 'Fetching...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n// ...\n")),Object(o.b)("p",null,"As you can see, importing other files from ",Object(o.b)("inlineCode",{parentName:"p"},"/ext")," is completely normal, just use the relative path."),Object(o.b)("h2",{id:"user--authentication"},"User + authentication"),Object(o.b)("p",null,"Most of the apps today are multi-user, and Wasp has first-class support for it, so let's see how to add it to our Todo app!"),Object(o.b)("p",null,"Let's define a Todo list (luckily we have an app for that now!) to get this done:"),Object(o.b)("ul",{className:"contains-task-list"},Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add Wasp entity ",Object(o.b)("inlineCode",{parentName:"li"},"User"),"."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add ",Object(o.b)("inlineCode",{parentName:"li"},"auth")," Wasp declaration."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Create ",Object(o.b)("inlineCode",{parentName:"li"},"signUp")," action."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Create ",Object(o.b)("inlineCode",{parentName:"li"},"Auth")," page where users will login/signup (React component + Wasp page declaration + Wasp route declaration)."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Modify ",Object(o.b)("inlineCode",{parentName:"li"},"ext/MainPage.js")," so that it requires login/signup."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add Prisma relation between ",Object(o.b)("inlineCode",{parentName:"li"},"User")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Task")," entities."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Modify our queries and actions so that they work only with the tasks belonging to the authenticated user."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add logout button.")),Object(o.b)("h3",{id:"adding-entity-user"},"Adding entity User"),Object(o.b)("p",null,"First, let's define entity ",Object(o.b)("inlineCode",{parentName:"p"},"User"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),"// ...\n\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\npsl=}\n")),Object(o.b)("p",null,"Run"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),'$ wasp db migrate-save "added-user"\n')),Object(o.b)("p",null,"to propagate the schema change (we added User)."),Object(o.b)("h3",{id:"defining-auth-declaration"},"Defining ",Object(o.b)("inlineCode",{parentName:"h3"},"auth")," declaration"),Object(o.b)("p",null,"Next, we want to tell Wasp that we want full-stack ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/language/basic-elements#authentication--authorization"}),"authentication")," in our app, and that it should use entity ",Object(o.b)("inlineCode",{parentName:"p"},"User")," for it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),"// ...\n\nauth {\n  // Expects entity User to have email:String and password:String fields.\n  userEntity: User, \n  methods: [ EmailAndPassword ]\n}\n")),Object(o.b)("p",null,"What this means for us is that Wasp now offers us:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Function ",Object(o.b)("inlineCode",{parentName:"li"},"createNewUser()")," on server (we can use it in actions)."),Object(o.b)("li",{parentName:"ul"},"Actions ",Object(o.b)("inlineCode",{parentName:"li"},"login()")," and ",Object(o.b)("inlineCode",{parentName:"li"},"logout()"),"."),Object(o.b)("li",{parentName:"ul"},"React hook ",Object(o.b)("inlineCode",{parentName:"li"},"useAuth()"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context.user")," when in query/action.")),Object(o.b)("h3",{id:"implementing-signup-action"},"Implementing ",Object(o.b)("inlineCode",{parentName:"h3"},"signUp")," action"),Object(o.b)("p",null,"Before we start with React, let's first add one more action: ",Object(o.b)("inlineCode",{parentName:"p"},"signUp"),".\nIt will be just a wrapper for ",Object(o.b)("inlineCode",{parentName:"p"},"createNewUser()")," for now, but it does one important thing: it declares that it uses ",Object(o.b)("inlineCode",{parentName:"p"},"User")," entity, so our queries will be correctly updated/invalidated when we sign up new user via ",Object(o.b)("inlineCode",{parentName:"p"},"signUp")," action."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\naction signUp {\n  fn: import { signUp } from "@ext/actions.js",\n  entities: [User]\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/actions.js"',title:'"ext/actions.js"'}),"// ...\nimport { createNewUser } from '@wasp/core/auth.js'\n\n// ...\n\nexport const signUp = async ({ email, password }, context) => {\n  await createNewUser({ email, password })\n}\n")),Object(o.b)("p",null,"Ok, that was easy!"),Object(o.b)("p",null,"To recap, so far we have created:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"User")," entity."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"auth")," declaration thanks to which Wasp gives us plenty of auth functionality."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"signUp")," action, via which we can create a new user.")),Object(o.b)("p",null,"Now, let's consider how are we going to handle the situation when user is not logged in.\nWhat we can do is check in the MainPage.js if user is logged in.\nIf not, we will instruct them to go to the special ",Object(o.b)("inlineCode",{parentName:"p"},"/auth")," page where they can sign up or log in.\nIf they succeed, we will send them back to the ",Object(o.b)("inlineCode",{parentName:"p"},"/")," (MainPage.js).\nWhile approach like this would be overly-simplistic for the real-world app, it will serve us well for this simple tutorial!"),Object(o.b)("h3",{id:"creating-auth-page"},"Creating Auth page"),Object(o.b)("p",null,"First, let's define the ",Object(o.b)("inlineCode",{parentName:"p"},"Auth")," page, where we will use ",Object(o.b)("inlineCode",{parentName:"p"},"signUp")," and ",Object(o.b)("inlineCode",{parentName:"p"},"login")," actions to signup/login a new user."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Auth")," page declaration in Wasp:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\nroute "/auth" -> page Auth \npage Auth {\n    component: import AuthPage from "@ext/AuthPage.js"\n}\n// ...\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Auth")," page React component (lot of code, but most of it is just form):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="ext/AuthPage.js"',title:'"ext/AuthPage.js"'}),"import React, { useState } from 'react'\nimport { useHistory } from 'react-router-dom'\n\nimport signUp from '@wasp/actions/signUp.js'\nimport login from '@wasp/auth/login.js'\n\nexport default () => {\n  const [method, setMethod] = useState('login')\n\n  const toggleMethod = () => {\n    setMethod(method === 'login' ? 'signup' : 'login')\n  }\n\n  return (\n    <>\n      <AuthForm method={method} />\n      <a href='javascript:;' onClick={toggleMethod}>\n        {method === 'login'\n          ? 'I don\\'t have an account yet (go to sign up).'\n          : 'I already have an account (go to log in).'}\n      </a>\n    </>\n  )\n}\n\nconst AuthForm = (props) => {\n  const history = useHistory()\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n\n  const handleSubmit = async (event) => {\n    event.preventDefault()\n    try {\n      if (props.method === 'signup') {\n        await signUp({ email, password })\n      }\n      await login(email, password)\n      history.push('/')\n    } catch (err) {\n      window.alert('Error:' + err.message)\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h2>Email</h2>\n      <input\n        type='text'\n        value={email}\n        onChange={e => setEmail(e.target.value)}\n      />\n      <h2>Password</h2>\n      <input\n        type='password'\n        value={password}\n        onChange={e => setPassword(e.target.value)}\n      />\n      <div>\n        <input type='submit' value={props.method === 'signup' ? 'Sign up' : 'Log in'} />\n      </div>\n    </form>\n  )\n}\n")),Object(o.b)("h3",{id:"updating-main-page-to-check-if-user-is-authenticated"},"Updating Main page to check if user is authenticated"),Object(o.b)("p",null,"Finally, let's modify ",Object(o.b)("inlineCode",{parentName:"p"},"MainPage.js")," so that it sends user to Auth page if they are not logged in:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'{2-3,8-11} title="ext/MainPage.js"',"{2-3,8-11}":!0,title:'"ext/MainPage.js"'}),"// ...\nimport { Link } from 'react-router-dom'\nimport useAuth from '@wasp/auth/useAuth.js'\n// ...\n\nconst MainPage = () => {\n  // ...\n  const { data: user } = useAuth()\n  if (!user) {\n    return <span> Please <Link to='/auth'>log in</Link>. </span>\n  }\n  // ...\n}\n// ...\n")),Object(o.b)("p",null,"Ok, time to try out how this works!"),Object(o.b)("p",null,"Now, we can again run"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp start\n")),Object(o.b)("p",null,"Try going to ",Object(o.b)("inlineCode",{parentName:"p"},"/")," in our web app -> it will now ask you to log in, and if you follow the link, you will end up at ",Object(o.b)("inlineCode",{parentName:"p"},"/auth"),".\nOnce you log in or sign up, you will be sent back to ",Object(o.b)("inlineCode",{parentName:"p"},"/")," and you will see the todo list."),Object(o.b)("p",null,"However, you will notice, if you try logging in with different users and creating tasks, that all users are still sharing tasks.\nThat is because we did not yet update queries and actions to work only on current user's tasks, so let's do that next!"),Object(o.b)("h3",{id:"defining-user-task-relation-in-entities"},"Defining User-Task relation in entities"),Object(o.b)("p",null,"First, let's define User-Task relation (check ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/relations"}),"prisma docs on relations"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'{6,13-14} title="main.wasp"',"{6,13-14}":!0,title:'"main.wasp"'}),"// ...\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\n    tasks       Task[]\npsl=}\n// ...\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\n    user        User?    @relation(fields: [userId], references: [id])\n    userId      Int?\npsl=}\n// ...\n")),Object(o.b)("p",null,"We modified entities by adding User-Task relation, so let's run"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),'$ wasp db migrate-save "user-task-relation"\n')),Object(o.b)("p",null,"to create a db schema migration."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We made ",Object(o.b)("inlineCode",{parentName:"p"},"user")," and ",Object(o.b)("inlineCode",{parentName:"p"},"userId")," in ",Object(o.b)("inlineCode",{parentName:"p"},"Task")," optional (via ",Object(o.b)("inlineCode",{parentName:"p"},"?"),") because that allows us to keep the existing tasks, which don't have a user assigned, in the database.\nThis is not recommended because it allows unwanted state in the database (what is the purpose of the task not belonging to anybody?) and normally we would not make these fields optional.\nInstead, we would do a data migration to take care of those tasks, even if it means just deleting them all.\nHowever, for this tutorial, for the sake of simplicity, we will stick with this."))),Object(o.b)("h3",{id:"updating-operations-to-forbid-access-to-non-authenticated-users"},"Updating operations to forbid access to non-authenticated users"),Object(o.b)("p",null,"Next, let's update the queries and actions to forbid access to non-authenticated users and to operate only on user's tasks:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1,4,6} title="ext/queries.js"',"{1,4,6}":!0,title:'"ext/queries.js"'}),"import HttpError from '@wasp/core/HttpError.js'\n\nexport const getTasks = async (args, context) => {\n  if (!context.user) { throw new HttpError(403) }\n  return context.entities.Task.findMany(\n    { where: { user: { id: context.user.id } } }\n  )\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1,5,9,15,16,17} title="ext/actions.js"',"{1,5,9,15,16,17}":!0,title:'"ext/actions.js"'}),"import HttpError from '@wasp/core/HttpError.js'\nimport { createNewUser } from '@wasp/core/auth.js'\n\nexport const createTask = async ({ description }, context) => {\n  if (!context.user) { throw new HttpError(403) }\n  return context.entities.Task.create({\n    data: {\n      description,\n      user: { connect: { id: context.user.id } }\n    }\n  })\n}\n\nexport const updateTask = async ({ taskId, data }, context) => {\n  if (!context.user) { throw new HttpError(403) }\n  return context.entities.Task.updateMany({\n    where: { id: taskId, user: { id: context.user.id } },\n    data: { isDone: data.isDone }\n  })\n}\n\nexport const signUp = async ({ email, password }, context) => {\n  await createNewUser({ email, password })\n}\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Due to how Prisma works, we had to convert ",Object(o.b)("inlineCode",{parentName:"p"},"update")," to ",Object(o.b)("inlineCode",{parentName:"p"},"updateMany")," in ",Object(o.b)("inlineCode",{parentName:"p"},"updateTask")," action to be able to specify user id in ",Object(o.b)("inlineCode",{parentName:"p"},"where"),"."))),Object(o.b)("p",null,"Right, that should be it!"),Object(o.b)("p",null,"Run"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp start\n")),Object(o.b)("p",null,"and everything should work as expected now! Each user has their own tasks only they can see and edit."),Object(o.b)("h3",{id:"logout-button"},"Logout button"),Object(o.b)("p",null,"Last, but not the least, let's add logout functionality:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'{2,10} title="MainPage.js"',"{2,10}":!0,title:'"MainPage.js"'}),"// ...\nimport logout from '@wasp/auth/logout.js'\n//...\n\nconst MainPage = () => {\n  // ...\n  return (\n    <div>\n      // ...\n      <button onClick={logout}> Logout </button>\n    </div>\n  )\n}\n")),Object(o.b)("p",null,"This is it, we have working authentication system and our app is multi-user!"),Object(o.b)("h2",{id:"the-end"},"The End"),Object(o.b)("p",null,'We did it! For all those that followed the instructions closely and created "Build a Todo App in Wasp" task in our Todo App, let\'s celebrate by marking it as done :)!'),Object(o.b)("img",{alt:"Yay we are done with the Todo App tutorial!",src:Object(r.a)("img/todo-app-tutorial-end.gif"),style:{border:"1px solid black"}}),Object(o.b)("p",null,"You can check out the whole code of the app that we just built ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/tree/master/examples/tutorials/TodoApp"}),"here"),"."),Object(o.b)("p",null,"If you are interested in what is Wasp actually generating in the background, you can check ",Object(o.b)("inlineCode",{parentName:"p"},".wasp/out/")," directory in your project."),Object(o.b)("p",null,"Where from here?",Object(o.b)("br",{parentName:"p"}),"\n",'Well, you could check the "Language" section of the docs for more details on specific parts of Wasp.',Object(o.b)("br",{parentName:"p"}),"\n","Or, you could try to build something on your own with Wasp!",Object(o.b)("br",{parentName:"p"}),"\n","You are likely to find that some feature that you want is missing, since Wasp is still in alpha.\nIn that case, please write to us on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.gg/rzdnErX"}),"Discord")," or create an issue on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp"}),"Github"),", so we can learn which features to add.",Object(o.b)("br",{parentName:"p"}),"\n","Even beter, if you would like to contribute or help building the feature, let us know!\nYou can find more details on contributing ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/contributing"}),"here"),"."))}u.isMDXComponent=!0},76:function(e,t,n){"use strict";var a=n(0),i=n(20);t.a=function(){var e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(r,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(76),i=n(80);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,s=void 0!==r&&r,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},80:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);