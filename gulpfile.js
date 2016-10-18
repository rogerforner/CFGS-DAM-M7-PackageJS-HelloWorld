const elixir = require ('laravel-elixir');

elixir ( mix =>{
   mix.webpack('index.js')
});

//mix = function () == mix => ... Arrow functions