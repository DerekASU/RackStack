Router.configure({
    layoutTemplate:'layout'
});
Router.map(function(){
    this.route('calendar',{path: '/'});
    this.route('workout',{path: '/workout'});
    this.route('statistics',{path: '/statistics'});
});