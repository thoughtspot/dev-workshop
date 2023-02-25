# ThoughtSpot Developer Workshop



summary: ThoughtSpot 2hr Developer Workshop
id: ts-dev-workshop-short-2022-dec.1
categories: Meta
tags: beginner, intermediate
status: Published 
last updated: 2022/12/06
authors: Quinton Wall
Feedback Link: https://developers.thoughtspot.com



## Objectives / Goal
Duration: 05:00

This workshop is designed to introduce developers to ThoughtSpot Everywhere, how to embed analytics into JavaScript-based web applications, and integrate ThoughtSpot into typical devops toolchains. No prior experience, or paid software licenses, is required.

### What you will learn

The workshop is broken into 2 parts, with the learning objectives as follows. Each part is intended to build upon the last. You must complete one before moving onto the next.

#### Part 1: Build with Low Code Developer Tools

*   How to create search, visualizations, and liveboards to analyze data
*   How to use the developer playground to generate javascript code to embed ThoughtSpot elements into a web app
*   How to modify actions available to users and apply hidden runtime filters

#### Part 2: Embed Analytics with Visual Embed SDK

*   How to use the Visual Embed SDK to embed ThoughtSpot components into a ReactJS web app
*   Using the platform event framework to interact with embedded components

#### Bonus: Using Platform APIs and TML

* How to use ThoughtSpot Everywhere APIs and ThoughtSpot Modeling Language to perform typical devops tasks
* Using Postman to manage API collections with ThoughtSpot


### Access ThoughtSpot Cloud Environment

To begin, [log in](https://cap1slingshot.thoughtspot.cloud/) to the ThoughtSpot environment. In the previous portion of the workshop you have created a set of liveboards and answers. For this portion of the workshop we will leverage that work to begin embedding visualizations into a custom application


## Embed using the Developer Playground
Duration: 0:20:00


In the previous portion of the workshop you have learned how to use the ThoughtSpot interface to create answers and liveboards. Now, it is time to take advantage of the Developer Playground. The Developer  Playground is a visual tool to help to build, test, and iterate on embedded components, prior to adding to your webapp. Unlike traditional approaches to development which require you to read documentation to piece together supported attributes, and configure local environments just to test your solution, the Developer Playground let's you quickly build your embed solution with confidence, greatly reducing time-to-market and avoid syntactical errors. 



1. Select **DEVELOP** on the ThoughtSpot top navbar to open the Developer playground.  

![6-developerhome](images/6-developerhome.png)

The Develop area contains 4 sections: Home, Guide, Playground, Customizations.

* **Home** provides immediate access to overview, 3 methods for embedding Search, Visualizations, and Pinboards, plus 1 method for accessing data via API where you then control how you want to visualize it.

* **Guide** provides quick access to all of the visual embed commands and Rest API calls.

* **Playground** provides a cloud-based sandbox environment to generate and test code needed to embed the ThoughtSpot Search experience, Visualizations/Liveboards that you or others on your team create, and the Full ThoughtSpot App (white labeling).

* **Customizations** provide access to creating custom Actions that can invoke a URL or trigger a callback in your parent application, changing the Styles (look and feel) for app, visualizations, and white labeling, establish Security Settings to configure automatic authentication and query data programmatically with the REST API.  

  _Note: Customizations are only available in the paid version of ThoughtSpot and not the free trial._



### Embed a Liveboard

Begin the playground experience by embedding the liveboard you created into the sample data app sandbox provided within the Developer Playground .

1. Select **Liveboard** from the **Playground** menu.  

If this is your first time doing this, a Start tour option is shown which will guide you through the steps to select and embed the ThoughtSpot object. For now, select No Thanks. Use the Start Tour button on the nav bar to revisit any time in free trial.  

2. The ‘Select feature to embed' is already set to Liveboard, select your pinboard and run to view it in the sample app

3. Select your Liveboard "**Retail Banking Analysis**" from the drop-down selection menu and notice that upon choosing the liveboard, the code window on the bottom left automatically highlights the code that you would copy/paste directly into your data app.  

4. Select ‘ **Run** to render it in the sample SpotShop data app window.  

![7-embedliveboard](images/7-embedliveboard.gif)



### Modify available actions

There are many actions that can be disabled or hidden for example and all are documented in the [Visual Embed guide](https://developers.thoughtspot.com/docs/?pageid=action-config) accessible from the **Develop** page. 

1. First, look at the default actions available for a particular embedded component such as a Search or Liveboard item.

   ![8-liveboard-allactions](images/8-liveboard-allactions.png)

2. Whilst still in the developer playground, make sure you have the  **Retail Banking Analysis**, then select the **Modify available actions** checkbox. This will add a code snippet into the editor section. 

3. Enter "**Action.Save**" inside the "[]" for the `disabledActions` setting.

5. Change the "Reason for disabling" to "**Premium action, request upgrade.**" for the `disabledActionReason`

6. Enter "**Action.MakeACopy,Action.DownloadAsPdf,Action.AddFilter**" inside the "\[\]" for the `hiddenActions` setting.

7. Select ‘ **Run** to render the changes.

8. Select the pinboard menu "..." to view the results.

9. Hover over **Save** to see the reason. Notice the other actions specified above are hidden.

![9-disabledactions](images/9-disabledactions.png)

You have successfully applied modified actions.



### Set runtime filters

Applying run time filters provides additional controls on who can see what data. You may opt for forcing a particular filter based upon the user's role for example, or perhaps you would like to present filter choices in your own data app nav bar and push the selected values that the user selects.  



1. The current liveboard, Retail Banking Analysis, includes the Total Revenue by Monthly Date chart. This shows a trend of revenue across all product categories. You will apply a run time filter to set the Product Category to *Loans* so chart only shows the trend for the Loans products.

2. Select **Set runtime filters** under User experience customizations in the playground left pane. Notice the code window again, highlighting the code to be affected.

3. Change *columnName1* to **‘Product Category'** and *value1* to **‘Loans'**

4. Select **Run** to render the changes.  

![10-runtimefilters](images/10-runtimefilters.png)



You can also add multiple runtime filters. Let's add one more filter to show only the data for bags. .

1. Copy the runtime filter code and paste it below the existing entry. Make sure you add an additional comma directly after ['Product Category']
2. Modify ‘Product Category' in the 2nd run time filter to **Gender** and change ‘Loans' to ‘**Male**'.
3. Select ‘ **Run** to render the changes. Now data is filtered by Loans issued specifically to Males.

![11-allruntimefilters](images/11-allruntimefilters.png)



### Embed a Search

Let's go ahead and use the Developer Playground to embed and customize a search component. 

1. The ‘Select feature to embed' to **Search**

2.  Select your datasource "**Retail Banking**" from the drop-down selection menu and notice that upon choosing the datasource, the code window on the bottom left automatically highlights the code that you would copy/paste directly into your data app.  

3.  Select ‘ **Run** to render it in the sample SpotShop data app window.  


_Note: Search suggestions will automatically appear in the search bar based upon what you did previously._

3. Enter in the search bar: Revenue Weekly Product Category

4. Then press **Enter**, Select **Go**, or **click** below the search bar to launch the query. While you can change the chart time, keep this one for now.

   

   ![12-embedsearch](images/12-embedsearch.gif)

   

***Note**: As an option you may want to enter some starting search tokens like Sales Region and let the user add more before sending the live query to the cloud data warehouse. Do that in the next task.*  


There are three search related actions `\[Collapse data panel, Hide data panel, Add search tokens\]` shown below. You will apply all for this task to create a starting point search and allow the user add more and then initiate the search.

1.  Select **Collapse data panel**
2.  Select **Hide data panel**

3.  Select **Add search tokens**

4.  Make the following changes to add search tokens, turn off automatic search and test it.

5.  Enter "**\[Revenue\] \[Product Category\]**" inside the ‘' (single quotes for the searchTokenString setting.
6.  Change the "true" to "**false.**" for the executeSearch setting.
7.  Select ‘ **Run** to render the changes.

8. Enter "**Monthly**" in the search bar and press **Go** to run the search and voila, user self-service!

![13-searchactions](images/13-searchactions.png)



## Part 1 Summary
Duration: 0:03:00

Congratulations for making it to the end of Part 1. So far, we have created everything *on-platform*, using the low-code developer tools. In Part 2, you will build a webapp with a simple hamburger navigation. This app will be written in ReactJS, a very popular JavaScript framework, and use the Visual Embed SDK and ThoughtSpot React components to embed Search, Liveboards, and the full ThoughtSpot app into a webapp.


## Part 2 Embed Analytics with the Visual Embed SDK
Duration: 0:05:00

In part 2, you will build a ReactJS webapp with a simple hamburger navigation, and use the ThoughtSpot Visual Embed SDK to embed live analytics. 

To make things easy, we will use CodeSandbox, a web based IDE and runtime environment for building web apps. Using CodeSandbox means we don’t need to spend time configuring our local environment for React development. The good news is that ThoughtSpot Everywhere uses the languages and developer processes you already know and love. If you already have your local environment setup for React development, feel free to use that too. 

**Note**: You can also follow along using the [completed app running in CodeSandbox](https://codesandbox.io/s/keen-einstein-1g9vrl). This sandbox app is fully functional, but uses the componentid from another ThoughtSpot instance. To make it work for you, you can substitue your ids, or better still, follow along in the workshop and build it all yourself.

## Configure your app
Duration: 0:10:00

In your browser, go to [codesandbox.io](http://codesandbox.io) and tap the **Create a Sandbox** button on the top right of the page, then select the **React** template. This will create a very simple web app, with code on the left, and rendered page on the right. Next, we have to add a few dependencies to our project.  Be cafeful to add the correct library as there are a a few similarly named libraries to the ones we need.

1. ThoughtSpot Visual Embed SDK
   - Type *@thoughtspot* into the dependency pane, then select the `Visual Embed SDK` from the autocomplete dropdown.


2. Material UI
   - Type *@mui/material* into the dependecy page and select the corresponding package.
   - Type *@emotion/react* into the dependecy page and select the corresponding package.
   - Type *@emotion/styled* into the dependecy page and select the corresponding package.

3. React Router Dom
   - Type *react

![14-codesandbox](images/14-codesandbox.gif)

With your dependencies added, let's start by configuring the authentication to ThoughtSpot.

Replace the contents of your App.js file with:

```React
import React from "react";
import { AuthType, init } from "@thoughtspot/visual-embed-sdk";

var baseURL = "https://cap1slingshot.thoughtspot.cloud/";

init({
  thoughtSpotHost: baseURL,
  authType: AuthType.None
});

function App() {
  return (
    <div className="App">
      Hello ThoughtSpot!
    </div>
  );
}

export default App;
```

![14-default-app](images/C14-default-app.png)


## Configure Simple Navigation


### Create Navigation Component

To navigate around our application, lets create a simple navigation bar. In this example, we are using components from [Material UI](https://mui.com/) to help us build something nice looking quickly. First lets create a simple horizontal container, with a button that links refers to the base url `/`.

Create a new file in the `components` folder called **navigation.js**. and add the following code:

```React
import { Stack, Button } from "@mui/material";

export default function Navigation(){
    return (
        <Stack direction={"row"} spacing={2} style={{padding:'10px',borderBottom:'1px solid #cccccc'}}>
            <Button  href="/">
            Home
            </Button>
        </Stack>  
    )
}

```

Next, let's go back to the **App.js** file and import our `Navigation` component. At the top of the file, add a new import:

```React
import Navigation from './components/navigation';
```

Then, above `Hello ThoughtSpot!` add the component itself:

```React
function App() {
  return (
    <div className="App">
        <Navigation></Navigation>
        Hello ThoughtSpot!
    </div>
  )
}
```

![14-default-app](images/C15-nav-bar.png)


### Setup React Router.

In the end, we will create components for several different embed types including liveboards and searches. To handle the navigation between these components we will use react router.

First, in **App.js**, add an import for react-router-dom, and Material UI's `Typography` and `Container`. This can go below the Navigation import we just added.

```React 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Typography, Container } from '@mui/material';

```

Next, lets replace `Hello ThoughtSpot!` with a Material UI container, and Routes to each URL we wish to create. In this case we only have the Home page, so we will simply render the word `Home`. 

```React
function App() {
  return (
    <div className="App">
        <Navigation></Navigation>
        <Container style={{height:'calc(100vh - 60px)',overflow:'auto', paddingTop:'25px'}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Typography>Home</Typography>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  )
}
```


Once complete, your default app and project should look like this:

![C16-nav-bar-router](images/C16-nav-bar-router.png)

You will notice that the code includes some logic to authenticate with ThoughtSpot. In this tutorial, we are using AuthType.None. This will prompt the user to log in when the page loads. This is fine for the tutorial, but not recommended for a production app. For a detailed overview of security options supported by the Visual Embed SDK, please check out the [online documentation](https://developers.thoughtspot.com/docs/?pageid=embed-auth). 

## Create the liveboard page
Duration: 0:15:00

With the app structure set up and running, the next task is to add a new page to embed a search component. Within your IDE, select the `components` folder and add a new file **liveboard.js**.

![C17-liveboard-file](images/C17-liveboard-file.png)

Then, add the required React and Visual SDK import to `liveboard.js`. 

```react
import React from 'react';
import { LiveboardEmbed } from '@thoughtspot/visual-embed-sdk/react';
```

And, finally add a liveboard function below your imports. This function will return a snippet of HTML which gets rendered on display. Within this snippet we want to embed our answers component. Previously, in the Developer Playground section, you saw how you generate standard JavaScript code. For your convenience, the Visual Embed SDK also ships with React components. In this example, we will use the LiveboardEmbed component.

```react
export default function Liveboard() {
 return (
      <LiveboardEmbed
        fullHeight={true}
        liveboardId={"ef2b8ff9-fabe-4a93-87b5-89896af760c6"}
      />
  )
}
```



Looking at the liveboard embed component, you will see parameters you are already familiar with from the Developer Playground task previously. 

Notice that the LiveboardEmbed requires a `liveboardId`. In this case we have provided a default id. But there are two other ways you can obtain the UUID

- Search for the livebaord in the Developer Playground and copy the ID from the generated code.
- Navigate to the liveboard in the ThoughtSpot UI and observe the URL. The first UUID is that of the liveboard itself.


### Add the component to your application

Open **App.js** and add an import for the liveboard component:

```React
import Liveboard from './components/liveboard';
```

Next we can add a new Route after `Home`, that renders the liveboard on the URL `/liveboard`:

```react
function App() {
  return (
    <div className="App">
        <Navigation></Navigation>
        <Container style={{height:'calc(100vh - 60px)',overflow:'auto', paddingTop:'25px'}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Typography>Home</Typography>} />
            <Route path="/liveboard" element={<Liveboard/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  )
}

```

Finally, let's add the new route to the navigation bar. Open **componets/navigation.js** and add a new button that links to the URL `liveboard`:

```react
export default function Navigation() {
  return (
    <Stack direction={"row"} spacing={2} style={{ padding: "10px", borderBottom: "1px solid #cccccc" }}>
      <Button href="/">Home</Button>
      <Button  href="/liveboard">
        Liveboard
      </Button>
    </Stack>
  );
}

```

Save everything, and your app will automatically reload on the lefthand side. If everything is completed correctly, you will be presented with the home page as before, but now in the navigation bar you will have an additional link to `Liveboard`. Tap that link to open the new page. Since this is your first time accessing the page you may be prompted to log into ThoughSpot, do this with the credentials provided. You should now see an embedded liveboard, Good job!

![C18-liveboard](images/C18-liveboard.png)



## Embed Search Component
Duration: 0:10:00

Embedding a Search component is very similar to what you just completed with the Liveboard component. You need to create a new page and add the Search component, then add it to your routes and the navigation menu. Let's jump right in.

### Create the Search page

Add a new file, **search.js** in the `components` directory, and add the following code:

```react
import React, { useState } from "react";
import {SearchEmbed, useEmbedRef} from "@thoughtspot/visual-embed-sdk/react";
import { Stack } from "@mui/system";

export default function Search() {
  
    return (
        <Stack spacing={2}>
            <SearchEmbed
              collapseDataSources={true}
              frameParams={{ height: "600px" }}
              ref={embedRef}
            />
        </Stack>

    );
}
```

### Add Search Route

Open **App.js** and import the Search component after the Liveboard import:

```react
import Search from './components/search';
```


Then, add the function to the `Routes` element after the Search route:

```react
<Route path="/search" element={<Search />} />
```


### Add Search to the navigation menu

Open **components/navigation.js** and add a button to the search route, after the liveboard navigation item:

``` react
export default function Navigation() {
  return (
    <Stack direction={"row"} spacing={2} style={{ padding: "10px", borderBottom: "1px solid #cccccc" }}>
      <Button href="/">Home</Button>
      <Button  href="/liveboard">
        Liveboard
      </Button>
      <Button  href="/search">
        Search
      </Button>
    </Stack>
  );
}
```
Click on the new navigation link to test the search embed. 
 ![C19-search](images/C19-search.png)




## Using Lifecycle Events
Duration: 0:05:00

ThoughtSpot Everywhere makes it easy to embed analytics into any webapp via the Visual Embed SDK. In addition to embedding components, the SDK also provides support for analytics lifecycle events such as when a search term has changed, new data is loaded, or a component is rendered on the page. In this tutorial, you will learn the different types of lifecycle events and how to utilize them to make more dynamic interactions. You will use the app you just created and extend it to support lifecycle events

### Event Types

Lifecycle events fall into two categories:

1. EmbedEvents
   1. EmbedEvents occur when the state of a component changes or is interacted with. This may be something like the component is rendered, new data is loaded, or a user clicks on a visualization
2. HostEvents 
   1. HostEvents are hooks to allow the developer to programmatically change or update an embedded component. For example, you may want to change the search term used, or enable/disable features

## Add Embed Event
Duration: 0:15:00

As mentioned in the previous section, EmbedEvents occur when the state of a component changes or is interacted with. To demonstrate, we will add a spinning animation to the existing liveboard page. This animation will display while the liveboard is fetching data and rendering. Once the liveboard has finished rendering, we will hide the animation by listening for an embed event, `onLiveboardRendered`

### Add Antd library

To add the spinning animation, we will use a third-party library called antd. Antd has many great assets, styles, and components, one of these is a spinner, which is exactly what we need. Let's add antd as a dependency to your project

- Type *antd* into the depency pane, then select `antd` from the autocomplete dropdown.



From within your CodeSandbox project, open `src/components/liveboard.js.` This file is where we embed the Liveboard component. Currently, the page does very little beyond embedding the component. Let’s start by adding the required imports for both `antd` and to start listening for ThoughtSpot events. At the top of your file, update your imports to match the  following:

```react
import React from 'react'
import { LiveboardEmbed, useEmbedRef } from "@thoughtspot/visual-embed-sdk/react";
import { EmbedEvent, Action  } from "@thoughtspot/visual-embed-sdk";
import { Spin } from "antd";
```

To make everything work, we will take advantage of the React framework’s state mechanism via useState to keep track of when we should show or hide the spinner. Within the Liveboard function, add the following line near the top:

```react
const [isLoading, setIsLoading] = React.useState(true);
```

We will also add a handle to the Liveboard component using the embedRef handle. embedRef is more useful for working with Hosted Events, which we will cover shortly, but it is a good practice to get used to always setting the reference in your components. To get started, add the following code directly before the useState call:

```react
const embedRef = useEmbedRef();
```

Next, we will update the current `LiveboardEmbed` component with event handler functions. Scroll down until you see the ThoughtSpot component.

```react
<LiveboardEmbed frameParams={{height: "80vw"}}
                             liveboardId={"YOUR-ID-HERE"}/>
```

And change it to following. Remember to use your liveboardid. Don't replace it with YOUR-ID-HERE ;)

```react
<LiveboardEmbed frameParams={{height: "80vw"}}
                   liveboardId={"YOUR-ID-HERE"}
                   ref={embedRef}
                   onLoad={onLoad}
                   onLiveboardRendered={onRendered}
                   />
```

There is a lot going on here. First, we added a hook to the embedReference via the ref attribute. Then, we’ve included two lifecycle events onLoad and onLiveboardRendered. We are going to use these events to show and hide our spinner. Since CodeSandbox dynamically reloads your changes, you will see a lot of errors in your project. Don't worry. We will fix these next.

### Add Lifecycle constants to handle callbacks

Currently, the lifecycle event attributes point to constants which do not exist. Let’s go ahead and create these now. You can add them directly after the useEmbedRef() call. Now, when the ThoughtSpot platform fires the `onLiveboardRendered` event we will setIsLoading to false.

```react
const onLoad = (e) => {
       console.log("Loading liveboard");
   };

   const onRendered = (e) => {
       console.log("Loading now rendered")
       setIsLoading(false)
   };
```

### Show / Hide component

All that is left to do is to add some logic to show the spinner or the Liveboard component based on the value of isLoading. We can do this with a quick boolean check:

```react
                {isLoading ? (
                      <div className="embedSpinner">
                        <Spin size="large" />
                      </div>
                  	) : (
                    	""
                   )}
                   <LiveboardEmbed frameParams={{height: "200vw"}}
                   liveboardId={"YOUR-LIVEBOARDID-HERE"}
                   ref={embedRef}
                   onLoad={onLoad}
                   onLiveboardRendered={onRendered}
                   />
```



Your full liveboard.js should now look something like this:

```React
import React from "react";
import {
  LiveboardEmbed,
  useEmbedRef
} from "@thoughtspot/visual-embed-sdk/react";
import { EmbedEvent, Action } from "@thoughtspot/visual-embed-sdk";
import { Spin } from "antd";
import "antd/es/spin/style/css";

export default function Liveboard() {
  const [isLoading, setIsLoading] = React.useState(true);
  const embedRef = useEmbedRef();

  const onLoad = (e) => {
    console.log("Loading liveboard");
  };

  const onRendered = (e) => {
    console.log("Loading now rendered");
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Liveboard</h1>
      {isLoading ? (
        <div className="embedSpinner">
          <Spin size="large" />
        </div>
      ) : (
        ""
      )}

      <LiveboardEmbed
        frameParams={{ height: "200vw" }}
        liveboardId={"YOUR-LIVEBOARDID-HERE"}
        ref={embedRef}
        onLoad={onLoad}
        onLiveboardRendered={onRendered}
      />
    </div>
  );
}

```


As soon as CodeSandbox can compile successfully, your changes will automatically be reflected on the embedded browser on the righthand side. Rendering happens very quickly. You may miss the spinner. If so, a good trick is to copy the URL into a new window to force the browser not to load from cache. 

![20-embedevent2](images/20-embedevent2.gif)

## Add a Host Event
Duration: 0:10:00

So far we have seen how to add hooks to lifecycle events of ThoughtSpot components. Now, we want to see how to interact with the components programmatically via Host Events. To quickly recap, Host Events are where you want to programmatically interact with a ThoughtSpot component. You can think of Host Events as you talking to the component vs. Embed Events as the component talking to you.

We will update `search.js` to perform two operations: firstly change the search terms from code, and secondly enable and disable actions a user can perform.

Within your IDE, open `/components/search.js` and add the following imports:

```react
import React from 'react'
import { SearchEmbed, useEmbedRef } from '@thoughtspot/visual-embed-sdk/react';
import { EmbedEvent, Action, HostEvent } from "@thoughtspot/visual-embed-sdk";
import { Layout, Button, Switch } from "antd";
const { Header, Content } = Layout;
```

Then, define a handle to the embedded component, by adding the following line to the top of the search function:

```react
const embedRef = useEmbedRef();
```

And adding the ref attribute to the `SearchEmbed` element:

```react
<SearchEmbed
    ref={embedRef}
    frameParams={{ hideDataSources: "true", height: "80vw" }}
    answerId={"YOUR-ANSWERID-HERE"}
   />
```



### Add changeSearch function

Now that we have the handle, go ahead and add a `changeSearch` function after the embedRef definition. This function will use the embedRef to trigger a HostEvent. We are going to use `HostEvent.Search` to change search terms. HostEvent has [a number of useful event types](https://developers.thoughtspot.com/docs/typedoc/enums/HostEvent.html) in addition to Search, worth checking out.

```react
const changeSearch = () => {
       embedRef.current.trigger(HostEvent.Search, {
         searchQuery: "[sales] by [item type]",
       });
     };
```

As you can see in the function above, `HostEvent.Search`  takes a `searchQuery` parameter. This is extremely useful when you want to pass in dynamic search terms. For example, you could pass in a sales reps region dynamically when the page loads, or set a default term based on the time of day.

### Call changeSearch

All that is left to do is add some functionality for us to call the changeSearch function. For our example, let’s connect it to a button. Go ahead and add a button into the <header> tag and save your changes.

```react
<Button type="primary" onClick={changeSearch}>Change query</Button>
```



Your final search.js should look like this:

```react
import React from "react";
import { SearchEmbed, useEmbedRef } from "@thoughtspot/visual-embed-sdk/react";
import { EmbedEvent, Action, HostEvent } from "@thoughtspot/visual-embed-sdk";
import { Layout, Button, Switch } from "antd";
const { Header, Content } = Layout;

export default function Search() {
  const embedRef = useEmbedRef();

  const changeSearch = () => {
    embedRef.current.trigger(HostEvent.Search, {
      searchQuery: "[sales] by [item type]"
    });
  };

  return (
    <div>
      <h1>Search</h1>
      <Button type="primary" onClick={changeSearch}>
        Change query
      </Button>
      <SearchEmbed
        ref={embedRef}
        frameParams={{ hideDataSources: "true", height: "80vw" }}
        answerId={"YOUR-ANSWERID-HERE"}
      />
    </div>
  );
}
```



### Try it out

Tap on the hamburger menu and choose Search. You should now see the embedded search component, plus a new button, Change query, at the top of the page. Go ahead and tap the button to see your search terms added to the embedded search box. 

**Note:** If you happen to receive an error message stating Something went wrong, simply tap the search line to allow the app to correctly split the search term. This appears to be a conflict in CodeSandbox and Chrome's rendering. 

![21-searchbug](images/21-searchbug.png)  





## Enabling and disable actions with Host Events

Duration: 10:00


Now that you have a good understanding of how to work with Host Events, another very common customer request is to dynamically enable or disable actions based on the user. This can be achieved by using the `disableActions` attribute of the ThoughtSpot components.



### Create ActionSets

Let’s start by creating two sets of action constants: one set for default, and another that we will use to enable/disable. Go ahead and add these at the top of your `components/search.js` file, directly below the imports, but outside of the search function.

```react
export const actionSet = [
 Action.Subscription,
 Action.Share,
 Action.Save,
 Action.Edit,
 Action.EditTitle,
 Action.Explore,
 Action.Pin,
 Action.SpotIQAnalyze,
 Action.DrillDown
];

export const defaultActionSet = [
 Action.Subscription,
];
```

Taking a look at the code, you can see we are taking advantage of the [Action enumeration](https://developers.thoughtspot.com/docs/typedoc/enums/Action.html). This enumeration contains all of the actions a user can perform on ThoughtSpot elements such as search and Liveboards. For our example, we’ve included the common ones for search.

### Set Disabled Actions

Next, we need to store the state of whether actions are enabled or disabled and provide accessor functions to change it. Add the following inside the `search` function, directly after the `useEmbedRef()` call. 

```react
const [disabledActions, setDisabledActions] = React.useState([]);

     const onToggleDisabledActions = (checked: boolean) => {
         if (checked) {
           setDisabledActions([]);
         } else {
           setDisabledActions(actionSet);
         }
       };
```

We also need to update the Search component to accept an enumeration as well as provide a reason why elements are disabled. The disabled reason will appear in a tooltip when a user hovers over a disabled element. Update your search component so it looks something like this. You will notice that we are using the `disabledActions` enumeration we previously put into session state. Remember, your datasource-id will be different from the example below.

```react
<SearchEmbed
    frameParams={{hideDataSources: "true", height: "80vw"}}
    ref={embedRef}           
  	answerId={"YOUR-ANSWERID-HERE"}
    disabledActions={disabledActions}
    disabledActionReason="Your account is restricted."
/>
```

### Set Disabled Actions

All that is left is to add a toggle to our sample app to enable and disable actions. Since we already installed `antd` in the Embed Event section, we can take advantage of the Switch component. Go ahead and add the following to the header section of your page, directly after the button for setting search terms:

```react
<Switch type="primary"
  	checkedChildren="Disable actions"
 		 unCheckedChildren="Enable actions"
  	defaultChecked
  	onChange={onToggleDisabledActions}
  />
```

Your final search.js should look like this:

```react
import React from "react";
import { SearchEmbed, useEmbedRef } from "@thoughtspot/visual-embed-sdk/react";
import { EmbedEvent, Action, HostEvent } from "@thoughtspot/visual-embed-sdk";
import { Layout, Button, Switch } from "antd";
const { Header, Content } = Layout;

export const actionSet = [
  Action.Subscription,
  Action.Share,
  Action.Save,
  Action.Edit,
  Action.EditTitle,
  Action.Explore,
  Action.Pin,
  Action.SpotIQAnalyze,
  Action.DrillDown
];

export const defaultActionSet = [Action.Subscription];

export default function Search() {
  const embedRef = useEmbedRef();

  const [disabledActions, setDisabledActions] = React.useState([]);

  const onToggleDisabledActions = (checked: boolean) => {
    if (checked) {
      setDisabledActions([]);
    } else {
      setDisabledActions(actionSet);
    }
  };

  const changeSearch = () => {
    embedRef.current.trigger(HostEvent.Search, {
      searchQuery: "[sales] by [item type]"
    });
  };

  return (
    <div>
      <h1>Search</h1>
      <Button type="primary" onClick={changeSearch}>
        Change query
      </Button>
      <Switch
        type="primary"
        checkedChildren="Disable actions"
        unCheckedChildren="Enable actions"
        defaultChecked
        onChange={onToggleDisabledActions}
      />

      <SearchEmbed
        ref={embedRef}
        frameParams={{ hideDataSources: "true", height: "80vw" }}
        answerId={"YOUR-ANSWERID-HERE"}
        disabledActions={disabledActions}
        disabledActionReason="Your account is restricted."
      />
    </div>
  );
}

```



### Try it out.

Save your changes, and check out all of your hard work. Now when you go to the Search page, you will see your answer results

Once the results are rendered, hover over the pin button, or the icons to the left of the pin button. You will notice they are enabled, with context sensitive tooltips.

Now, tap the Disable actions button, and enter a search term. This time, you will see the actions are disabled with our disabled message replacing the previous contextual tooltips.

![22-hosteventsfinal](images/22-hosteventsfinal.gif)







## Part 2 Summary
Duration: 05:00

At this stage, you've completed your app and should have a great understanding of how you can use the Visual Embed SDK. Give yourself a pat on the back. Great job! If you run out of time, or are having trouble getting everything working, check out [the completed app](https://codesandbox.io/s/keen-einstein-1g9vrl) and compare your code.



## Conclusion
Duration: 05:00

Congratulations. You have completed the ThoughtSpot Developer Workshop. Thoughout the workshop, you’ve created an instance of ThoughtSpot, complete with sample visualizations to find insight from business data, and built an entire web app to embed these components using the developer tools and SDKs provided by ThoughtSpot Everywhere. 

We’ve only scratched the surface of the features available to developers with ThoughtSpot Everywhere. To keep learning more, the following guides are a great starting point:

- Setting up your [local development](https://developers.thoughtspot.com/docs/?pageid=getting-started) environment.
- An overview of [authentication and security](https://developers.thoughtspot.com/docs/?pageid=auth-overview) settings.
- Using [custom actions](https://developers.thoughtspot.com/docs/?pageid=custom-action-intro)
- Working with the [REST API](https://developers.thoughtspot.com/docs/?pageid=rest-apis)



**Still want more?** Try the [bonus exercises](../ts-dev-workshop-short-2022-aug.2-bonus/index.html) to learn how to use the ThoughtSpot Everywhere platform APIs and TML.

