/**
 * Turtles
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
  	weight: {
  		type: 'FLOAT'
  	},
    shell: 'FLOAT',
  	plastron: 'FLOAT',
  	scientificName: 'STRING',
  	commonName: 'STRING',
    forename: 'STRING',
    status: 'STRING',
    gender: 'STRING'
  }

};
