(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),s=(n(0),n(72)),r=n(74),o={title:"Todo App"},c={unversionedId:"tutorials/todo-app",id:"tutorials/todo-app",isDocsHomePage:!1,title:"Todo App",description:"Let's build a simple Todo App together in Wasp!",source:"@site/docs/tutorials/todo-app.md",slug:"/tutorials/todo-app",permalink:"/web/docs/tutorials/todo-app",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/docs/tutorials/todo-app.md",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/web/docs/tutorials/getting-started"},next:{title:"Overview",permalink:"/web/docs/language/overview"}},l=[{value:"New project",id:"new-project",children:[]},{value:"Task Entity",id:"task-entity",children:[]},{value:"Listing tasks",id:"listing-tasks",children:[]},{value:"Creating new tasks",id:"creating-new-tasks",children:[{value:"Wasp action",id:"wasp-action",children:[]},{value:"React form",id:"react-form",children:[]},{value:"Automatic invalidation/updating of queries",id:"automatic-invalidationupdating-of-queries",children:[]}]},{value:"Updating tasks",id:"updating-tasks",children:[]},{value:"Clocks",id:"clocks",children:[]},{value:"The End",id:"the-end",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Let's build a simple Todo App together in Wasp!"),Object(s.b)("img",{alt:"How Todo App will work once it is done",src:Object(r.a)("img/todo-app-tutorial-intro.gif"),style:{border:"1px solid black"}}),Object(s.b)("p",null,"If you haven't yet set up Wasp, check ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/web/docs/tutorials/getting-started"}),"Getting Started")," first for installation instructions."),Object(s.b)("h2",{id:"new-project"},"New project"),Object(s.b)("p",null,"First, let's create a new Wasp project!"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp new TodoApp\nCreated new Wasp project in ./TodoApp directory!\n")),Object(s.b)("p",null,"Let's inspect created ",Object(s.b)("inlineCode",{parentName:"p"},"TodoApp/")," Wasp project:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ tree -al TodoApp\nTodoApp/\n\u251c\u2500\u2500 ext\n\u2502   \u2514\u2500\u2500 MainPage.js\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 main.wasp\n\u2514\u2500\u2500 .wasproot\n")),Object(s.b)("p",null,"Source code files where we will be writing/editing our code are ",Object(s.b)("inlineCode",{parentName:"p"},"main.wasp")," and everything in ",Object(s.b)("inlineCode",{parentName:"p"},"ext/")," dir (for now only ",Object(s.b)("inlineCode",{parentName:"p"},"MainPage.js"),")."),Object(s.b)("p",null,"Let's start the generated project to confirm everything is working as it should (this step might take a little bit longer, due to the first time setup):"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ cd TodoApp\n$ wasp start\n")),Object(s.b)("p",null,'This is it!\nYou will be seeing a lot of different output from client, server and database setting themselves up.\nOnce ready, a new tab should open in your browser, at localhost:3000, a white page saying "Hello world!".'),Object(s.b)("p",null,"Let's quickly inspect existing code. We can start with the main (and only) .wasp file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'}),'app TodoApp {\n  title: "TodoApp"\n}\n\nroute "/" -> page Main\npage Main {\n  component: import Main from "@ext/MainPage.js"\n}\n')),Object(s.b)("p",null,"Let's see what is hapenning here:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"With ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/web/docs/language/basic-elements#app"}),"app")," declaration, we named our web app and specified\nits title (which will be visible in the browser tab)."),Object(s.b)("li",{parentName:"ol"},"With ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/web/docs/language/basic-elements#page"}),"page")," declaration, we defined a new page in our app\nnamed ",Object(s.b)("inlineCode",{parentName:"li"},"Main"),", and specified that its ReactJS implementation can be found in\nfile ",Object(s.b)("inlineCode",{parentName:"li"},"ext/MainPage.js")," as a default export."),Object(s.b)("li",{parentName:"ol"},"With ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/web/docs/language/basic-elements#route"}),"route")," declaration, we defined that page ",Object(s.b)("inlineCode",{parentName:"li"},"Main"),"\nshould be rendered on url ",Object(s.b)("inlineCode",{parentName:"li"},"/"),", effectively making it a default page.")),Object(s.b)("p",null,"Let's check that React component that we referenced in ",Object(s.b)("inlineCode",{parentName:"p"},"page Main")," declaration:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/MainPage.js"',title:'"ext/MainPage.js"'}),"import React from 'react'\n\nconst MainPage = () => {\n  return <p>Hello world!</p>\n}\nexport default MainPage\n")),Object(s.b)("p",null,'As we can see, this just a simple functional React component saying "Hello world!".'),Object(s.b)("p",null,"That is all the code right now!\nWasp in the background takes care of everything else needed to define, build and run a web app."),Object(s.b)("p",null,"Now, let's start shaping the app into a Todo App.\n",Object(s.b)("inlineCode",{parentName:"p"},"wasp start")," will automatically pick up changes we make and refresh the app."),Object(s.b)("h2",{id:"task-entity"},"Task Entity"),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/web/docs/language/basic-elements#entity"}),"Entities")," are one of the very central concepts in Wasp, and they mainly play the role of data models."),Object(s.b)("p",null,"Since our TodoApp is all about tasks, our first step will be to define Task entity in Wasp:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),"// ...\n\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n")),Object(s.b)("p",null,"Since Wasp delegates database handling to ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io"}),"Prisma"),", definition of entity comes down to defining ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/data-model/"}),"Prisma model"),", using PSL (Prisma Schema Language) inside the ",Object(s.b)("inlineCode",{parentName:"p"},"{=psl psl=}")," tags."),Object(s.b)("p",null,"After this change, we need to run"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),'$ wasp db migrate-save "New entity Task"\n')),Object(s.b)("p",null,"to have Prisma propagate the schema changes to the database."),Object(s.b)("h2",{id:"listing-tasks"},"Listing tasks"),Object(s.b)("p",null,"Next, we want to admire our tasks, so let's list them!"),Object(s.b)("p",null,"There are two ways to interact with entities in Wasp: ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/web/docs/language/basic-elements#queries-and-actions-aka-operations"}),"queries and actions (aka operations)"),"."),Object(s.b)("p",null,"Queries are here when we need to fetch/read something, while actions are here when we need to change/update something.\nIn our case, we will write a query, since we are just listing tasks and not modifying anything."),Object(s.b)("p",null,"First, let's declare ",Object(s.b)("inlineCode",{parentName:"p"},"getTasks")," ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/web/docs/language/basic-elements#query"}),"query")," in Wasp:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\nquery getTasks {\n  fn: import { getTasks } from "@ext/queries.js",\n  entities: [Task]\n}\n')),Object(s.b)("p",null,"With this, we define Wasp query ",Object(s.b)("inlineCode",{parentName:"p"},"getTasks")," that uses (does something with) entity ",Object(s.b)("inlineCode",{parentName:"p"},"Task"),".\nWe told Wasp that its implementation (which is an async JS function) can be found in ",Object(s.b)("inlineCode",{parentName:"p"},"ext/queries.js"),", exported as named export ",Object(s.b)("inlineCode",{parentName:"p"},"getTasks"),". NOTE: There is no rule that both JS function and Wasp query need to have the same name."),Object(s.b)("p",null,"Next, create a new file ",Object(s.b)("inlineCode",{parentName:"p"},"ext/queries.js")," and define the JS function that we just announced:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/queries.js"',title:'"ext/queries.js"'}),"export const getTasks = async (args, context) => {\n  return context.entities.Task.findMany({})\n}\n")),Object(s.b)("p",null,"All query functions in Wasp take ",Object(s.b)("inlineCode",{parentName:"p"},"args")," object as the first parameter and ",Object(s.b)("inlineCode",{parentName:"p"},"context")," object as the second parameter, where ",Object(s.b)("inlineCode",{parentName:"p"},"args")," are query arguments with which query is called, while ",Object(s.b)("inlineCode",{parentName:"p"},"context")," is additional stuff provided by Wasp.\nSince we declared that query ",Object(s.b)("inlineCode",{parentName:"p"},"getTasks")," uses entity ",Object(s.b)("inlineCode",{parentName:"p"},"Task"),", Wasp injected ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud"}),"Prisma client")," for entity Task as ",Object(s.b)("inlineCode",{parentName:"p"},"context.entities.Task"),", which we then used to fetch all the tasks from the database."),Object(s.b)("p",null,"NOTE: Queries and actions are NodeJS and execute on server."),Object(s.b)("p",null,"Finally, let's use the query in our React component to list the tasks:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{3-4,7-16,19-32} title="ext/MainPage.js"',"{3-4,7-16,19-32}":!0,title:'"ext/MainPage.js"'}),"import React from 'react'\n\nimport getTasks from '@wasp/queries/getTasks'\nimport { useQuery } from '@wasp/queries'\n\nconst MainPage = () => {\n  const { data: tasks, isFetching, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isFetching && 'Fetching...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\nconst Task = (props) => (\n  <div>\n    <input\n      type='checkbox' id={props.task.id}\n      checked={props.task.isDone} readonly\n    />\n    {props.task.description}\n  </div>\n)\n\nconst TasksList = (props) => {\n  if (!props.tasks?.length) return 'No tasks'\n  return props.tasks.map((task, idx) => <Task task={task} key={idx} />)\n}\n\nexport default MainPage\n")),Object(s.b)("p",null,"All of this is just normal React, except for the two special ",Object(s.b)("inlineCode",{parentName:"p"},"@wasp")," imports."),Object(s.b)("p",null,"First import, ",Object(s.b)("inlineCode",{parentName:"p"},"import getTasks from '@wasp/queries/getTasks'"),", provides us with the wasp query ",Object(s.b)("inlineCode",{parentName:"p"},"getTasks")," that we previously defined in ",Object(s.b)("inlineCode",{parentName:"p"},"main.wasp"),".\nIn general, rule for importing any Wasp query in JS is to import it as default import and to use ",Object(s.b)("inlineCode",{parentName:"p"},"from")," path of following shape: ",Object(s.b)("inlineCode",{parentName:"p"},"@wasp/queries/<nameOfQuery>"),"."),Object(s.b)("p",null,"While we can, once imported, call the query directly as ",Object(s.b)("inlineCode",{parentName:"p"},"getTasks(args)"),", that would not give us the reactivity that we need - we want React component to automatically re-render if result of ",Object(s.b)("inlineCode",{parentName:"p"},"getTasks")," query changes."),Object(s.b)("p",null,"This is where second import comes in: ",Object(s.b)("inlineCode",{parentName:"p"},"import { useQuery } from '@wasp/queries'"),".\nIt provides us with ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/web/docs/language/basic-elements#usequery"}),"useQuery")," hook which is actually just a thin wrapper over ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tannerlinsley/react-query"}),"react-query")," ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-query.tanstack.com/docs/guides/queries"}),"useQuery")," hook, behaving very similarly while offering some extra integration with Wasp, which we are going to cover later. By calling the query via this hook (",Object(s.b)("inlineCode",{parentName:"p"},"useQuery(getTasks)"),"), we get the reactivity that we wanted."),Object(s.b)("p",null,'With these changes, you should be seeing text "No tasks" on the screen.'),Object(s.b)("p",null,"Next, let's create some tasks!"),Object(s.b)("h2",{id:"creating-new-tasks"},"Creating new tasks"),Object(s.b)("p",null,"To enable creation of new tasks, we will need two things:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Wasp action that creates new task."),Object(s.b)("li",{parentName:"ol"},"React form that calls that action.")),Object(s.b)("h3",{id:"wasp-action"},"Wasp action"),Object(s.b)("p",null,"Creating an action is very similar to creating a query."),Object(s.b)("p",null,"First we declare the action in Wasp:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\naction createTask {\n  fn: import { createTask } from "@ext/actions.js",\n  entities: [Task]\n}\n')),Object(s.b)("p",null,"Next, we define JS function for that action:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/actions.js"',title:'"ext/actions.js"'}),"export const createTask = async (args, context) => {\n  return context.entities.Task.create({\n    data: { description: args.description }\n  })\n}\n")),Object(s.b)("p",null,"NOTE: We put it in new file ",Object(s.b)("inlineCode",{parentName:"p"},"ext/actions.js"),", but we could have put it anywhere we wanted, there are no limitations here, as long as import statement in Wasp file is correct and it is inside the ",Object(s.b)("inlineCode",{parentName:"p"},"ext/")," dir."),Object(s.b)("h3",{id:"react-form"},"React form"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{5,12,37-61} title="ext/MainPage.js"',"{5,12,37-61}":!0,title:'"ext/MainPage.js"'}),"import React, { useState } from 'react'\n\nimport { useQuery } from '@wasp/queries'\nimport getTasks from '@wasp/queries/getTasks'\nimport createTask from '@wasp/actions/createTask'\n\nconst MainPage = () => {\n  const { data: tasks, isFetching, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      <NewTaskForm />\n\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isFetching && 'Fetching...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\nconst Task = (props) => (\n  <div>\n    <input\n      type='checkbox' id={props.task.id}\n      checked={props.task.isDone} readonly\n    />\n    {props.task.description}\n  </div>\n)\n\nconst TasksList = (props) => {\n  if (!props.tasks?.length) return 'No tasks'\n  return props.tasks.map((task, idx) => <Task task={task} key={idx} />)\n}\n\nconst NewTaskForm = (props) => {\n  const defaultDescription = ''\n  const [description, setDescription] = useState(defaultDescription)\n\n  const handleSubmit = async (event) => {\n    event.preventDefault()\n    try {\n      await createTask({ description })\n      setDescription(defaultDescription)\n    } catch (err) {\n      window.alert('Error: ' + err.message)\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type='text'\n        value={description}\n        onChange={e => setDescription(e.target.value)}\n      />\n      <input type='submit' value='Create task' />\n    </form>\n  )\n}\n\nexport default MainPage\n")),Object(s.b)("p",null,"Here we call action directly (no hooks), since there is no reactivity that we need from it, which is also why we need to catch errors if there are any. The rest is just normal React code."),Object(s.b)("p",null,'This is it! Try creating a "Build a Todo App in Wasp" task and you will see it appear in the list below.'),Object(s.b)("h3",{id:"automatic-invalidationupdating-of-queries"},"Automatic invalidation/updating of queries"),Object(s.b)("p",null,"You will notice that when you add a new task, list of tasks is automatically updated with that new task, althogh we have written no code to take care of that! Normally, you would have to do this explicitly, e.g. with react-query you would invalidate the getTasks query via its key, or would call its refetch() method."),Object(s.b)("p",null,"The reason why getTasks query automatically updates when createTask action is executed is that Wasp is aware that both of them are working with Task entity, and therefore assumes that action that operates on Task (in this case createTask) might have changed the result of getTasks query. Therefore, in the background, Wasp nudges getTasks query to update. This means that out of the box, Wasp will make sure that all your queries that deal with entities are always in sync with any changes that actions might have done."),Object(s.b)("p",null,"NOTE: While kind of approach to automatic invalidation of queries is very convenient, it is in some situations wasteful and could become a performance bottleneck as app grows. In that case, you will be able to override this default behaviour and instead provide more detailed (and performant) instructions on how action should affect queries. This is not yet implemented, but is something we plan to do and you can track the progress ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/issues/63"}),"here"),"."),Object(s.b)("h2",{id:"updating-tasks"},"Updating tasks"),Object(s.b)("p",null,"Todo app is not complete if you can't mark a task as done!"),Object(s.b)("p",null,"For that, we will need to do two things:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Implement Wasp action that updates the task."),Object(s.b)("li",{parentName:"ol"},"Modify React component so it calls that action.")),Object(s.b)("p",null,"We declare Wasp action:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\naction updateTask {\n  fn: import { updateTask } from "@ext/actions.js",\n  entities: [Task]\n}\n')),Object(s.b)("p",null,"We define JS implementation of Wasp action in ",Object(s.b)("inlineCode",{parentName:"p"},"ext/actions.js")," file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/actions.js"',title:'"ext/actions.js"'}),"// ...\n\nexport const updateTask = async (args, context) => {\n  return context.entities.Task.update({\n    where: { id: args.taskId },\n    data: {\n      isDone: args.data.isDone\n    }\n  })\n}\n")),Object(s.b)("p",null,"And we update React component:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{2,7-16,23} title="ext/MainPage.js"',"{2,7-16,23}":!0,title:'"ext/MainPage.js"'}),"// ...\nimport updateTask from '@wasp/actions/updateTask'\n\n// ...\n\nconst Task = (props) => {\n  const handleIsDoneChange = async (event) => {\n    try {\n      await updateTask({\n        taskId: props.task.id,\n        data: { isDone: event.target.checked }\n      })\n    } catch (error) {\n      window.alert('Error while updating task: ' + error.message)\n    }\n  }\n\n  return (\n    <div>\n      <input\n        type='checkbox' id={props.task.id}\n        checked={props.task.isDone} readonly\n        onChange={handleIsDoneChange}\n      />\n      {props.task.description}\n    </div>\n  )\n}\n\n// ...\n")),Object(s.b)("h2",{id:"clocks"},"Clocks"),Object(s.b)("p",null,"What is a Todo app without some clocks!? Well, still a Todo app, but certainly not as fun as one with the clocks."),Object(s.b)("p",null,"So, let's add a couple of clocks to our app, to help us track time while we perform our tasks (and to demonstrate a couple more of Wasp features :))."),Object(s.b)("p",null,"For this, we will use ",Object(s.b)("inlineCode",{parentName:"p"},"react-clock")," library from NPM. We can add it to our project as a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000/web/docs/language/basic-elements#dependencies"}),"dependency")," like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\ndependencies {=json\n  "react-clock": "3.0.0"\njson=}\n')),Object(s.b)("p",null,"Next, let's create a ",Object(s.b)("inlineCode",{parentName:"p"},"Clocks")," component where we can play with the clocks."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/Clocks.js"',title:'"ext/Clocks.js"'}),"import React, { useEffect, useState } from 'react'\nimport Clock from 'react-clock'\nimport 'react-clock/dist/Clock.css'\n\nexport default () => {\n  const [time, setTime] = useState(new Date())\n  \n  useEffect(() => {\n    const interval = setInterval(() => setTime(new Date()), 1000)\n    return () => clearInterval(interval)\n  }, [])\n  \n  return (\n    <div style={{ display: 'flex' }}>\n      <Clock value={time} />\n      <Clock value={new Date(time.getTime() + 60 * 60000)} />\n    </div>\n  )\n}\n")),Object(s.b)("p",null,"And let's import it in our main React component."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{2,13} title="ext/MainPage.js"',"{2,13}":!0,title:'"ext/MainPage.js"'}),"// ...\nimport Clocks from './Clocks'\n\nconst MainPage = () => {\n  const { data: tasks, isFetching, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      <NewTaskForm />\n\n      {tasks && <TasksList tasks={tasks} />}\n\n      <p> <Clocks /> </p>\n\n      {isFetching && 'Fetching...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\n// ...\n")),Object(s.b)("p",null,"As you can see, importing other files from ",Object(s.b)("inlineCode",{parentName:"p"},"/ext")," is completely normal, just use relative path."),Object(s.b)("h2",{id:"the-end"},"The End"),Object(s.b)("p",null,'We did it! For all those that followed the instructions closely and created "Build a Todo App in Wasp" task in our Todo App, let\'s celebrate by marking it as done :)!'),Object(s.b)("img",{alt:"Yay we are done with the Todo App tutorial!",src:Object(r.a)("img/todo-app-tutorial-end.gif"),style:{border:"1px solid black"}}),Object(s.b)("p",null,"You can check out the whole code of the app that we just built ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/tree/master/examples/tutorials/TodoApp"}),"here"),"."),Object(s.b)("p",null,"If you are interested in what is Wasp actually generating in the background, you can check ",Object(s.b)("inlineCode",{parentName:"p"},".wasp/out/")," directory in your project."))}u.isMDXComponent=!0},71:function(e,t,n){"use strict";var a=n(0),i=n(21);t.a=function(){var e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||s;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return r}));var a=n(71),i=n(76);function s(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var s=void 0===a?{}:a,r=s.forcePrependBaseUrl,o=void 0!==r&&r,c=s.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(o)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(s,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},76:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);