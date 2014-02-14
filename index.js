
/**
 * Module dependencies.
 */

var classes = require('classes');

/**
 * Expose `Flipcard`.
 */

module.exports = Flipcard;

/**
 * Initialize a new `Flipcard` with `el`.
 *
 * @param {Element} el
 * @param {Element} back
 * @api public
 */

function Flipcard(el) {
  this.showing = 'front';
  this.el = el;
  this.classes = classes(el).add('flipcard');
}

/**
 * Flip the card.
 *
 * @api public
 */

Flipcard.prototype.flip = function(){
  if (this.classes.has('flipped')) {
    this.front();
  } else {
    this.back();
  }

  if (this.onflip) this.onflip(this.showing);
};

/**
 * Flip to the front face.
 *
 * @api public
 */

Flipcard.prototype.front = function(){
  this.classes.remove('flipped');
};

/**
 * Flip to the back face.
 *
 * @api public
 */

Flipcard.prototype.back = function(){
  this.classes.add('flipped');
};
