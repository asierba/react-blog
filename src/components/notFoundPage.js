const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const NotFoundPage = React.createClass({
   render: () => {
       return (
           <div>
               <h1>Page Not found</h1>
               <div>Ooops.. this page does not exist. </div>
               <Link to="/">back to home</Link>
           </div>

       );
   }
});

module.exports = NotFoundPage;