(this["webpackJsonpreact_movies-list-filter"]=this["webpackJsonpreact_movies-list-filter"]||[]).push([[0],{14:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var a=i(7),s=i.n(a),n=(i(13),i(2)),r=i(3),c=i(5),l=i(4),o=i(1),m=i.n(o),d=(i(14),i(8)),h=i(0),j=function(e){Object(c.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){var i=t.target.value;e.props.setQuery(i)},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.handleChange,t=this.props.query;return Object(h.jsx)("div",{className:"box",children:Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{htmlFor:"search-query",className:"label",children:"Search movie"}),Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("input",{type:"text",id:"search-query",className:"input",placeholder:"Type search word",value:t,onChange:e})})]})})}}]),i}(m.a.Component),b=(i(16),i(17),function(e){var t=e.movie,i=t.imdbUrl,a=t.imgUrl,s=t.description,n=t.title;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("figure",{className:"image is-4by3",children:Object(h.jsx)("img",{src:a,alt:"Film logo"})})}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"media-left",children:Object(h.jsx)("figure",{className:"image is-48x48",children:Object(h.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(h.jsx)("div",{className:"media-content",children:Object(h.jsx)("p",{className:"title is-8",children:n})})]}),Object(h.jsxs)("div",{className:"content",children:[s,Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:i,children:"IMDB"})]})]})]})}),u=function(e){var t=e.movies;return Object(h.jsx)("div",{className:"movies",children:t.map((function(e){return Object(h.jsx)(b,{movie:e},e.imdbId)}))})},p=function(e){Object(c.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={query:""},e.setQuery=function(t){e.setState({query:t})},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state.query,t=e.toLowerCase(),i=d.filter((function(e){return e.description.toLowerCase().includes(t)||e.title.toLowerCase().includes(t)}));return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsxs)("div",{className:"page-content",children:[Object(h.jsx)(j,{query:e,setQuery:this.setQuery}),i.length?Object(h.jsx)(u,{movies:i}):"Movie not found"]}),Object(h.jsx)("div",{className:"sidebar",children:"Sidebar goes here"})]})}}]),i}(m.a.Component);s.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.15ee6d81.chunk.js.map