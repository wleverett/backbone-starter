// var DrinkView = Backbone.View.extend({
//   initialize: function(options) {
//   	this.name = options.name;
//   },

//   render: function () {
//     console.log('You should drink', this.name);
//   }
// });

// var sprite = new DrinkView({
//   name: 'Sprite'
// });
// sprite.render();

// var water = new DrinkView({
//   name: 'Water'
// });
// water.render();


// var ButtonView = Backbone.View.extend({
//   render: function () {
//     $(this.el).html('<button>I don\'t do anything :(</button>');
//   }
// });

// var view = new ButtonView({
// 		el: $('.my-button')
// 	});
// view.render();

// var ButtonView = Backbone.View.extend({
//   render: function () {
//     $(this.el).html('<button>THIS IS A BIG BUTTON</button>');
//   }
// });

// var view = new ButtonView({
//   el: $('.big-button')
// });
// view.render();

// var stockTemplate = _.template('<b><%= name %>:</b> <%= price %>');

// var StockView = Backbone.View.extend({
// 	initialize: function(options) {
// 		this.name = options.name,
// 		this.price = options.price
// 	},

// 	render: function () {
// 		$(this.el).html(stockTemplate(this.options));
// 	}
// });

// var aapl = new StockView({
//   name: 'AAPL',
//   price: 380,
//   el: $('.stock-price:eq(0)')
// });
// var goog = new StockView({
//   name: 'GOOG',
//   price: 800,
//   el: $('.stock-price:eq(1)')
// });

// aapl.render();
// goog.render();





// var dressTemplateHtml = $('#templates .dress').html();
// var dressTemplate = _.template(dressTemplateHtml);

// var DressView = Backbone.View.extend({
//   className: 'dress',

//   initialize: function (options) {
//     this.color = options.color;
//     this.price = options.price;
//   },

//   render: function () {
//     var newDressHtml = dressTemplate({ color: this.color, price: this.price });
//     $(this.el).html(newDressHtml);
//   }
// });

// var dressOne = new DressView({
//   color: 'green',
//   price: 14.99
// });
// var dressTwo = new DressView({
//   color: 'red',
//   price: 18.99
// });

// dressOne.render();
// dressTwo.render();
// $('body').append(dressOne.el);
// $('body').append(dressTwo.el);



// var buttonTemplateHtml = $('#templates .button').html();
// var buttonTemplate = _.template(buttonTemplateHtml);


// var ButtonView = Backbone.View.extend({

//   render: function () {
//     var newButtonHtml = buttonTemplate({ buttonText: 'backbone iz coo' });
//     $(this.el).html(newButtonHtml);
//   }
// });

// var newButton = new ButtonView ({
// 	el: $('#button')
// });

// newButton.render();

var profileTemplate = _.template('<%= name %> (Age: <%= age %>)');


var ProfileView = Backbone.View.extend ({
	initialize: function (options) {
		this.age = options.age,
		this.name = options.name 
	},

	render: function () {
		var newProfile = profileTemplate(this.options);
		$(this.el).html(newProfile)
	}
});

var profileView = new ProfileView({
  name: 'Bob',
  age: 45,
  el: $('body')
});

profileView.render();



