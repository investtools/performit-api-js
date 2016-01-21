/* global performit */
//var performit = require('../lib/performit');
//var jquery = require("jquery");
describe('Fund', function() {
    beforeEach(function() {
        //performit.set$(jquery);
    });
    describe('.list', function() {
        it('returns all funds', function(done) {
            performit.Fund.list().then(function(funds) {
                console.log(funds);
                done();
            });
        });    
    });
});