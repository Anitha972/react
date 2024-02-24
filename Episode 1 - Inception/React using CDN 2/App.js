// const heading = React.createElement(
//     'h1', 
//     { id: 'heading', xyz: "abc" }, 
//     'Hello world from React'
// );

/*

 <div id="parent">
   <div id="child">
     <h1>I'm from h1</h1>
     <h2>I'm from h2</h2>
   </div>
 </div>
 
*/

const parent = React.createElement(
    'div',
     { id: "parent" },
     React.createElement(
        'div',
        { id: "child" },
        [React.createElement('h1', {}, "I'm from h1"), React.createElement('h2', {}, "I'm from h2")]
     )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);