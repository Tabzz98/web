(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(74)),o={title:"Basic Elements"},s={unversionedId:"language/basic-elements",id:"language/basic-elements",isDocsHomePage:!1,title:"Basic Elements",description:"App",source:"@site/docs/language/basic-elements.md",slug:"/language/basic-elements",permalink:"/pages/wasp-lang/web/docs/language/basic-elements",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/language/basic-elements.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/pages/wasp-lang/web/docs/language/overview"},next:{title:"Contributing",permalink:"/pages/wasp-lang/web/docs/contributing"}},c=[{value:"App",id:"app",children:[]},{value:"Page",id:"page",children:[]},{value:"Route",id:"route",children:[{value:"Example - parametrised URL path",id:"example---parametrised-url-path",children:[]},{value:"Accessing route parameters in a page component",id:"accessing-route-parameters-in-a-page-component",children:[]},{value:"Navigating between routes",id:"navigating-between-routes",children:[]}]},{value:"Entity",id:"entity",children:[{value:"Using entities",id:"using-entities",children:[]}]},{value:"Queries and Actions (aka Operations)",id:"queries-and-actions-aka-operations",children:[{value:"Query",id:"query",children:[]},{value:"Action",id:"action",children:[]}]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Authentication &amp; Authorization",id:"authentication--authorization",children:[{value:"Email and Password",id:"email-and-password",children:[]},{value:"<code>createNewUser()</code>",id:"createnewuser",children:[]},{value:"<code>login()</code>",id:"login-1",children:[]},{value:"<code>logout()</code>",id:"logout",children:[]},{value:"Accessing currently logged in user",id:"accessing-currently-logged-in-user",children:[]},{value:"<code>useAuth()</code>",id:"useauth",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"app"},"App"),Object(r.b)("p",null,"There can be only one ",Object(r.b)("inlineCode",{parentName:"p"},"App")," element per Wasp project. It serves as a starting point and defines global\nproperties of your app. Currently, it is very simple:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),'app todoApp {\n    title: "ToDo App"\n}\n')),Object(r.b)("h4",{id:"app-identifier"},Object(r.b)("inlineCode",{parentName:"h4"},"app: identifier")),Object(r.b)("p",null,"Name of your app."),Object(r.b)("h4",{id:"title-string"},Object(r.b)("inlineCode",{parentName:"h4"},"title: string")),Object(r.b)("p",null,"Title of your app. It will be displayed in the browser tab, next to the favicon."),Object(r.b)("h2",{id:"page"},"Page"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Page")," is the top-level layout abstraction. Your app can have multiple pages, and they are defined in Wasp\nas follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),'page Main {\n    component: import Main from "@ext/pages/Main"\n}\n')),Object(r.b)("h4",{id:"page-identifier"},Object(r.b)("inlineCode",{parentName:"h4"},"page: identifier")),Object(r.b)("p",null,"Name of the page."),Object(r.b)("h4",{id:"component-js-import-statement"},Object(r.b)("inlineCode",{parentName:"h4"},"component: js import statement")),Object(r.b)("p",null,"Import statement of the page React element. See importing external code for details."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Page")," also has to be associated with a ",Object(r.b)("inlineCode",{parentName:"p"},"Route"),", otherwise it won't be accessible in the app."),Object(r.b)("h2",{id:"route"},"Route"),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"Route")," element is a way to implement routing functionality in Wasp:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),'route "/about" -> page About\n')),Object(r.b)("h4",{id:"route-string"},Object(r.b)("inlineCode",{parentName:"h4"},"route: string")),Object(r.b)("p",null,"URL path of the route. Route string can be parametrised and follows the same conventions as\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactrouter.com/web/"}),"React Router"),"."),Object(r.b)("h4",{id:"page-page-identifier"},Object(r.b)("inlineCode",{parentName:"h4"},"page: page identifier")),Object(r.b)("p",null,"Page identifier of the route's target. Referenced page must be defined somewhere in ",Object(r.b)("inlineCode",{parentName:"p"},".wasp")," file."),Object(r.b)("h3",{id:"example---parametrised-url-path"},"Example - parametrised URL path"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),'route "/task/:id" -> page Task\n')),Object(r.b)("p",null,"For details on URL path format check ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactrouter.com/web/"}),"React Router"),"\ndocumentation."),Object(r.b)("h3",{id:"accessing-route-parameters-in-a-page-component"},"Accessing route parameters in a page component"),Object(r.b)("p",null,"Since Wasp under the hood generates code with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactrouter.com/web/"}),"React Router"),",\nthe same rules apply when accessing URL params in your React components. Here is an example just to get you\nstarted:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="todoApp.wasp"',title:'"todoApp.wasp"'}),'// ...\nroute "/task/:id" -> page Task\npage Task {\n    component: import Task from "@ext/pages/Task"\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/Task.js"',title:'"pages/Task.js"'}),"import React from 'react'\n\nconst Task = (props) => {\n  return (\n    <div>\n      I am showing a task with id: {props.match.params.id}.\n    </div>\n  )\n}\n\nexport default Task\n")),Object(r.b)("h3",{id:"navigating-between-routes"},"Navigating between routes"),Object(r.b)("p",null,"Navigation can be performed from the React code via ",Object(r.b)("inlineCode",{parentName:"p"},"<Link/>")," component, also using the functionality of\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactrouter.com/web/"}),"React Router"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="todoApp.wasp"',title:'"todoApp.wasp"'}),'// ...\nroute "/home" -> page Home\npage Home {\n    component: import Home from "@ext/pages/Home"\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/OtherPage.js"',title:'"pages/OtherPage.js"'}),'import React from \'react\'\nimport { Link } from "react-router-dom"\n\nconst OtherPage = (props) => {\n  return (\n    <Link to="/home">Go to homepage</Link>\n  )\n}\n')),Object(r.b)("h2",{id:"entity"},"Entity"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Entity")," element represents a database model. Wasp uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io/"}),"Prisma")," to implement\ndatabase functionality and currently provides only a thin layer above it."),Object(r.b)("p",null,"Each ",Object(r.b)("inlineCode",{parentName:"p"},"Entity")," element corresponds 1-to-1 to Prisma data model and is defined in a following way:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"entity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n")),Object(r.b)("h4",{id:"entity-identifier"},Object(r.b)("inlineCode",{parentName:"h4"},"entity: identifier")),Object(r.b)("p",null,"Name of the entity."),Object(r.b)("h4",{id:"psl--psl-psl"},Object(r.b)("inlineCode",{parentName:"h4"},"{=psl ... psl=}: PSL")),Object(r.b)("p",null,"Definition of entity fields in ",Object(r.b)("em",{parentName:"p"},"Prisma Schema Language")," (PSL). See\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema"}),"here for intro and examples"),"\nand ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/prisma/specs/tree/master/schema"}),"here for a more exhaustive language specification"),"."),Object(r.b)("h3",{id:"using-entities"},"Using entities"),Object(r.b)("p",null,"Entity-system in Wasp is based on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.prisma.io"}),"Prisma"),", and currently Wasp provides only a thin layer\non top of it. The workflow is as follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Wasp developer creates/updates some of the entities in ",Object(r.b)("inlineCode",{parentName:"li"},".wasp")," file."),Object(r.b)("li",{parentName:"ol"},"Wasp developer runs ",Object(r.b)("inlineCode",{parentName:"li"},"wasp db migrate-save <migration_name>"),"."),Object(r.b)("li",{parentName:"ol"},"Migration data is generated in ",Object(r.b)("inlineCode",{parentName:"li"},"migrations/")," folder (and should be commited)."),Object(r.b)("li",{parentName:"ol"},"Wasp developer uses Prisma JS API to work with the database when in Operations.")),Object(r.b)("p",null,"Currently entities can be accessed only in Operations (Queries & Actions), so check their part of docs for more info on how to use entities in their context."),Object(r.b)("h2",{id:"queries-and-actions-aka-operations"},"Queries and Actions (aka Operations)"),Object(r.b)("p",null,"In Wasp, main interaction between client and server happens via Operations, of which two types exist: Queries and Actions."),Object(r.b)("h3",{id:"query"},"Query"),Object(r.b)("p",null,"Queries are NodeJS functions that don't modify any state. Normally they fetch certain resources, process them and return result. They are executed on server. "),Object(r.b)("p",null,"To create a Wasp Query, we need two things: declaration in Wasp and implementation in NodeJS:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\nquery getTasks {\n  fn: import { getAllTasks } from "@ext/foo.js"\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/foo.js"',title:'"ext/foo.js"'}),'// ...\nexport getAllTasks = async (args, context) => {\n  return [\n    { description: "Buy some eggs", isDone: true },\n    { description: "Make an omelette", isDone: false }\n  ]\n}\n')),Object(r.b)("p",null,"NodeJS function above has to be async and will be passed query arguments as first argument and additional context as second argument."),Object(r.b)("p",null,"By declaring a NodeJS function as a Wasp query, following happens:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Wasp generates HTTP API route on the NodeJS server that calls the NodeJS query function."),Object(r.b)("li",{parentName:"ul"},"Wasp generates JS function on the client that has the name under which query was declared and takes same arguments as the NodeJS query function. Internally it uses above mentioned HTTP API route to call the NodeJS query function.")),Object(r.b)("p",null,"On client, you can import generated query JS function as ",Object(r.b)("inlineCode",{parentName:"p"},"import getTasks from '@wasp/queries/getTasks.js'"),".\nThen, you can either use it directly, or you can use it via special ",Object(r.b)("inlineCode",{parentName:"p"},"useQuery")," React hook (provided by Wasp** to make it reactive."),Object(r.b)("p",null,"On server, you can import it the same way as on client, and then you can call it directly."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE"),": Wasp will not stop you from importing NodeJS function directly on server, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},'import { getAllTasks } from "./foo.js"'),", but you shouldn't do it, because it will import pure NodeJS function and not a query recognized by Wasp, so it will not get all the features of a Wasp query."),Object(r.b)("h4",{id:"usequery"},"useQuery"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"useQuery")," hook provided by Wasp is actually just a thin wrapper for ",Object(r.b)("inlineCode",{parentName:"p"},"useQuery")," hook from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tannerlinsley/react-query"}),"react-query"),"."),Object(r.b)("p",null,"You can import it as ",Object(r.b)("inlineCode",{parentName:"p"},"import { useQuery } from '@wasp/queries'"),"."),Object(r.b)("p",null,"Wasp ",Object(r.b)("inlineCode",{parentName:"p"},"useQuery")," takes three args:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queryFn"),": client query function generated by Wasp based on query declaration, e.g. one you get by importing in JS like this: ",Object(r.b)("inlineCode",{parentName:"li"},"import getTasks from '@wasp/queries/getTasks.js'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"queryFnArgs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"config"),": react-query ",Object(r.b)("inlineCode",{parentName:"li"},"config"),".")),Object(r.b)("p",null,"It behaves exactly the same as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-query.tanstack.com/docs/api#usequery"}),"useQuery from react-query"),", only it doesn't take the key, that is handled automatically instead."),Object(r.b)("p",null,"Example of usage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport { useQuery } from '@wasp/queries'\nimport getTasks from '@wasp/queries/getTasks'\n\nconst MyComponent = (props) => {\n  const { data: tasks, error } = useQuery(getTasks)\n  return <div> { JSON.stringify(tasks || error) } </div>\n}\n")),Object(r.b)("h4",{id:"error-handling"},"Error handling"),Object(r.b)("p",null,"For security reasons, all errors thrown in the query NodeJS function are sent to the client via HTTP API as 500 errors, with any further details removed, so that any unpredicted errors don't make it out with possibly sensitive data."),Object(r.b)("p",null,"If you do want to throw an error that will pass some information to the client, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"HttpError")," in your NodeJS query function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import HttpError from '@wasp/core/HttpError'\n\nexport getTasks = async (args, context) => {\n  const statusCode = 403\n  const message = 'You can\\'t do this!'.\n  const data = { foo: 'bar' }\n  throw new HttpError(statusCode, message, data)\n}\n")),Object(r.b)("p",null,"and then in client it will be thrown as an Error with corresponding ",Object(r.b)("inlineCode",{parentName:"p"},".message")," and ",Object(r.b)("inlineCode",{parentName:"p"},".data")," fields (if status code is 4xx - otherwise ",Object(r.b)("inlineCode",{parentName:"p"},"message")," and ",Object(r.b)("inlineCode",{parentName:"p"},"data")," will not be forwarded to the client, for security reasons)."),Object(r.b)("p",null,"This ensures that no error will accidentally leak out from the server, potentionally exposing sensitive data or implementation details."),Object(r.b)("h4",{id:"using-entities-1"},"Using entities"),Object(r.b)("p",null,"Most often, resources used by Operations will be Entities."),Object(r.b)("p",null,"To use an Entity in your Operation, declare in Wasp that Operation uses it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'{4} title="todoApp.wasp"',"{4}":!0,title:'"todoApp.wasp"'}),'// ...\nquery getTasks {\n  fn: import { getAllTasks } from "@ext/foo.js",\n  entities: [Task]\n}\n')),Object(r.b)("p",null,"This will inject specified entity into the context of your Operation.\nNow, you can access Prisma API for that entity like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/foo.js"',title:'"ext/foo.js"'}),"// ...\nexport getAllTasks = async (args, context) => {\n  return context.entities.Task.findMany({})\n}\n")),Object(r.b)("p",null,"where ",Object(r.b)("inlineCode",{parentName:"p"},"context.entities.Task")," actually exposes ",Object(r.b)("inlineCode",{parentName:"p"},"prisma.task")," from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud"}),"Prisma API"),"."),Object(r.b)("h4",{id:"cache-invalidation"},"Cache invalidation"),Object(r.b)("p",null,"One of the trickiest part of managing web app state is making sure that data which queries are showing is up to date."),Object(r.b)("p",null,"Since Wasp is using react-query for managing queries, that means we want to make sure that parts of react-query cache are invalidated when we know they are not up to date any more."),Object(r.b)("p",null,"This can be done manually, by using mechanisms provided by react-query (refetch, direct invalidation).\nHowever, that can often be tricky and error-prone, so Wasp offers quick and effective solution to get you started: automatic invalidation of query cache based on entities that queries / actions are using."),Object(r.b)("p",null,"Specifically, if Action A1 uses Entity E1 and Query Q1 also uses Entity E1 and Action A1 is executed, Wasp will recognize that Q1 might not be up-to-date any more and will therefore invalidate its cache, making sure it gets updated."),Object(r.b)("p",null,"In practice, this means that without really even thinking about it, Wasp will make sure to keep the queries up to date for you in regard with the changes done by actions."),Object(r.b)("p",null,"On the other hand, this kind of automatic invalidation of cache can be wasteful (updating when not needed) and will not work if other resources than entities are used. In that case, make sure to use mechanisms provided by react-query for now, and expect more direct support in Wasp for handling those use cases in a nice, elegant way."),Object(r.b)("h3",{id:"action"},"Action"),Object(r.b)("p",null,"Actions are very similar to Queries, so similar that we will only list the differences:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"They can modify state (queries can't)."),Object(r.b)("li",{parentName:"ol"},"There is no special React hook for them (like ",Object(r.b)("inlineCode",{parentName:"li"},"useQuery")," for Queries), you just call them directly."),Object(r.b)("li",{parentName:"ol"},"They are declared in Wasp in same way as Queries, but keyword is ",Object(r.b)("inlineCode",{parentName:"li"},"action"),", not ",Object(r.b)("inlineCode",{parentName:"li"},"query"),".")),Object(r.b)("p",null,"More differences and action/query specific features will come in the future versions of Wasp."),Object(r.b)("h2",{id:"dependencies"},"Dependencies"),Object(r.b)("p",null,"You can specify additional npm dependencies in following way, in your ",Object(r.b)("inlineCode",{parentName:"p"},"*.wasp")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),'dependencies {=json\n  "redux": "^4.0.5",\n  "react-redux": "^7.1.3"\njson=}\n')),Object(r.b)("p",null,"You will need to re-run ",Object(r.b)("inlineCode",{parentName:"p"},"wasp start")," after adding a dependency for Wasp to pick it up."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE"),": In current implementation of Wasp, if Wasp is already internally using certain npm dependency with certain version specified, you are not allowed to define that same npm dependency yourself while specifying different version.\nIf you do that, you will get an error message telling you which exact version you have to use for that dependency.\nThis means Wasp dictates exact versions of certain packages, so for example you can't choose version of React you want to use.\nIn the future, we will add support for picking any version you like, but we have not implemented that yet. Check ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/issues/59"}),"issue #59")," to check out the progress or contribute."),Object(r.b)("h2",{id:"authentication--authorization"},"Authentication & Authorization"),Object(r.b)("p",null,"Wasp provides authentication and authorization support out-of-the-box. Enabling it for your app is optional and can be done by adding ",Object(r.b)("inlineCode",{parentName:"p"},"auth")," element to your ",Object(r.b)("inlineCode",{parentName:"p"},".wasp")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"auth {\n    userEntity: User,\n    methods: [ EmailAndPassword ]\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"userEntity: entity"),"\nEntity which represents the user (sometimes also referred to as ",Object(r.b)("em",{parentName:"p"},"Principal"),")."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"methods: [AuthMethod]"),"\nList of authentication methods that Wasp app supports. Currently supported methods are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EmailAndPassword"),": Provides support for authentication with email address and a password.")),Object(r.b)("h3",{id:"email-and-password"},"Email and Password"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"EmailAndPassword")," authentication method makes it possible to signup/login into the app by using email address and a password.\nThis method requires that ",Object(r.b)("inlineCode",{parentName:"p"},"userEntity")," specified in ",Object(r.b)("inlineCode",{parentName:"p"},"auth")," element contains ",Object(r.b)("inlineCode",{parentName:"p"},"email: string")," and ",Object(r.b)("inlineCode",{parentName:"p"},"password: string")," fields."),Object(r.b)("h4",{id:"signup"},"Signup"),Object(r.b)("p",null,"Wasp provides a function ",Object(r.b)("inlineCode",{parentName:"p"},"createNewUser")," to be used within a signup action written by a Wasp developer.\nThe signup action is not provided directly to allow for adding custom code during creation of the user."),Object(r.b)("h3",{id:"createnewuser"},Object(r.b)("inlineCode",{parentName:"h3"},"createNewUser()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"createNewUser(userFields)\n")),Object(r.b)("h4",{id:"userfields-object"},Object(r.b)("inlineCode",{parentName:"h4"},"userFields: object")),Object(r.b)("p",null,"An object containing fields of the user entity. ",Object(r.b)("inlineCode",{parentName:"p"},"email")," and ",Object(r.b)("inlineCode",{parentName:"p"},"password")," fields are mandatory as they are required to be present in the user entity, as dictated by ",Object(r.b)("inlineCode",{parentName:"p"},"EmailAndPassword")," authentication method.\nPassword is provided as an unhashed ",Object(r.b)("inlineCode",{parentName:"p"},"string")," and ",Object(r.b)("inlineCode",{parentName:"p"},"createNewUser")," will take further care of hashing and storing password in the database."),Object(r.b)("h4",{id:"import-statement"},Object(r.b)("inlineCode",{parentName:"h4"},"import statement"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createNewUser } from @wasp/core/auth.js\n")),Object(r.b)("p",null,"Here is a minimal example of a signup action invoking ",Object(r.b)("inlineCode",{parentName:"p"},"createNewUser"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="myApp.wasp"',title:'"myApp.wasp"'}),'action signUp {\n  fn: import { signUp } from "@ext/actions.js",\n  entities: [User]\n}\n')),Object(r.b)("p",null,"Although we won't be using ",Object(r.b)("inlineCode",{parentName:"p"},"User")," directly in the ",Object(r.b)("inlineCode",{parentName:"p"},"signUp")," action, we still need to declare in\nthe action definition that this action is affecting ",Object(r.b)("inlineCode",{parentName:"p"},"User")," - that way Wasp can properly update caches\nof all queries that depend on ",Object(r.b)("inlineCode",{parentName:"p"},"User")," entity."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/actions.js"',title:'"ext/actions.js"'}),"import { createNewUser } from '@wasp/core/auth.js'\n\nexport const signUp = async (args, context) => {\n  // Additional logic can be added here - e.g. requests to the outside services, logging\n  // or anything else needed when signing up a user.\n\n  await createNewUser({ email: args.email, password: args.password })\n}\n")),Object(r.b)("p",null,"Having defined ",Object(r.b)("inlineCode",{parentName:"p"},"signUp")," action as above, we can use it in frontend as defined in the Action section."),Object(r.b)("h4",{id:"login"},"Login"),Object(r.b)("p",null,"Wasp provides an action for logging in the user, ",Object(r.b)("inlineCode",{parentName:"p"},"login"),"."),Object(r.b)("h3",{id:"login-1"},Object(r.b)("inlineCode",{parentName:"h3"},"login()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"login(email, password)\n")),Object(r.b)("h4",{id:"email-string"},Object(r.b)("inlineCode",{parentName:"h4"},"email: string")),Object(r.b)("p",null,"Email of the user logging in."),Object(r.b)("h4",{id:"password-string"},Object(r.b)("inlineCode",{parentName:"h4"},"password: string")),Object(r.b)("p",null,"Password of the user logging in."),Object(r.b)("h4",{id:"import-statement-1"},Object(r.b)("inlineCode",{parentName:"h4"},"import statement"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import login from @wasp/auth/login.js\n")),Object(r.b)("p",null,"Login is a regular action so it can be used directly from the frontend. Take a look ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/blob/master/waspc/examples/todoApp/ext/pages/Login.js#L17"}),"here")," for the example of using ",Object(r.b)("inlineCode",{parentName:"p"},"login")," within a simple login form component."),Object(r.b)("h4",{id:"log-out"},"Log out"),Object(r.b)("p",null,"Wasp provides an action for logging out the user, ",Object(r.b)("inlineCode",{parentName:"p"},"logout"),"."),Object(r.b)("h3",{id:"logout"},Object(r.b)("inlineCode",{parentName:"h3"},"logout()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"logout()\n")),Object(r.b)("h4",{id:"import-statement-2"},Object(r.b)("inlineCode",{parentName:"h4"},"import statement"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import logout from @wasp/auth/logout.js\n")),Object(r.b)("h5",{id:"example-of-usage"},"Example of usage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import logout from '@wasp/auth/logout.js'\n\nconst SignOut = () => {\n  return (\n    <button onClick={logout}>Logout</button>\n  )\n}\n")),Object(r.b)("h4",{id:"reset-password"},"Reset password"),Object(r.b)("p",null,"Coming soon."),Object(r.b)("h3",{id:"accessing-currently-logged-in-user"},"Accessing currently logged in user"),Object(r.b)("p",null,"When authentication is enabled in a Wasp app, we need a way to tell whether a user is logged in and access its data.\nWith that, we can further implement access control and decide which content is private and which public."),Object(r.b)("h4",{id:"on-client"},"On client"),Object(r.b)("p",null,"On client, Wasp provides ",Object(r.b)("inlineCode",{parentName:"p"},"useAuth")," React hook to be used within the functional components.\n",Object(r.b)("inlineCode",{parentName:"p"},"useAuth")," is actually a thin wrapper over Wasp's ",Object(r.b)("inlineCode",{parentName:"p"},"useQuery")," hook and returns data in the exactly same\nformat."),Object(r.b)("h3",{id:"useauth"},Object(r.b)("inlineCode",{parentName:"h3"},"useAuth()")),Object(r.b)("h4",{id:"import-statement-3"},Object(r.b)("inlineCode",{parentName:"h4"},"import statement"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import useAuth from @wasp/auth/useAuth.js\n")),Object(r.b)("h5",{id:"example-of-usage-1"},"Example of usage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/MainPage.js"',title:'"ext/MainPage.js"'}),"import React from 'react'\n\nimport { Link } from 'react-router-dom'\nimport useAuth from '@wasp/auth/useAuth.js'\nimport logout from '@wasp/auth/logout.js'\nimport Todo from '../Todo.js'\nimport '../Main.css'\n\nconst Main = () => {\n  const { data: user } = useAuth()\n\n  if (!user) {\n    return (\n      <span>\n        Please <Link to='/login'>login</Link> or <Link to='/signup'>sign up</Link>.\n      </span>\n    )\n  } else {\n    return (\n      <>\n        <button onClick={logout}>Logout</button>\n        <Todo />\n      < />\n    )\n  }\n}\n\nexport default Main\n")),Object(r.b)("h4",{id:"on-server"},"On server"),Object(r.b)("p",null,"When authentication is enabled, all the operations (actions and queries) will have ",Object(r.b)("inlineCode",{parentName:"p"},"user")," object\npresent in the ",Object(r.b)("inlineCode",{parentName:"p"},"context")," argument. ",Object(r.b)("inlineCode",{parentName:"p"},"context.user")," will contain all the fields from the user entity\nexcept for the password."),Object(r.b)("h5",{id:"example-of-usage-2"},"Example of usage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/actions.js"',title:'"ext/actions.js"'}),"import HttpError from '@wasp/core/HttpError.js'\n\nexport const createTask = async (task, context) => {\n  if (!context.user) {\n    throw new HttpError(403)\n  }\n\n  const Task = context.entities.Task\n  return Task.create({\n    data: {\n      description: task.description,\n      user: {\n        connect: { id: context.user.id }\n      }\n    }\n  })\n}\n")),Object(r.b)("p",null,"In order to implement access control, each operation is responsible for checking ",Object(r.b)("inlineCode",{parentName:"p"},"context.user")," and\nacting accordingly - e.g. if ",Object(r.b)("inlineCode",{parentName:"p"},"context.user")," is ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")," and the operation is private then user\nshould be denied access to it."))}p.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);