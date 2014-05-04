var Turtle = Backbone.Model.extend({
    urlRoot: '/turtles',

    defaults: {
        id: '',
        plastron: '',
        scientificName: '',
        createdAt: '',
        updatedAt: '',
        commonName: '',
        forename: '',
        status: '',
        gender: '',
        shell: ''
    }
});

var Viewport = Backbone.View.extend({
    
    // target item.
    el: '#app',
    
    // display a string to the target item
    render: function( routeId ) {
        /*
        // first visualization. it creates an item with the string.
        if ( this.$('em').length == 0 ) {
            
            // create the item with some attributes
            var $em = $('<em>').html( str ).css({
                background: 'yellow',
                padding: '5px',
                textAlign: 'center'
            }).hide();
            
            // append the item to the view's target
            this.$el.html( '' );
            this.$el.append( $em );
            $em.fadeIn();
        
        // following visualizations. flash out the string then flash in with
        // the new value. this way the "click" trigger a visible event to the screen!
        } else {
            
            this.$('em').stop().fadeOut(function(){
                $(this).html( str ).fadeIn();
            });
            
        }
        */
        switch(routeId){
            default: 
                var template = _.template($("#new-turtle-template").html());
                this.$el.html(template);


        }
    }
});

var Menu = Backbone.View.extend({
    
    el: '#menu',
    
    events: {
        'click a' : 'onClick'
    },
    
    onClick: function( e ) {
        
        router.navigate('/');
        
    }

});

var Router = Backbone.Router.extend({
    
    // routes configuration
    routes: {
        'turtle/:id' : 'defaultRoute'
    },
    
    // the action. it uses global namespace's viewport object.
    defaultRoute: function( routeId ) {
        viewport.render(routeId);
    }
    
});

var viewport = new Viewport();
var menu = new Menu();
var router = new Router();
Backbone.history.start();