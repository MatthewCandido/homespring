import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import 'mocha';

chai.use(chaiHttp);
describe('Books controller Class', () => {

    it('should GET a list of books', () => {
        chai.request(server)
            .get('/api/books')
            .end( (err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array'); 
            })
    });

    it('should GET a single book', () => {
        chai.request(server)
            .get('/api/books')
            .end( (err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array'); 
            })
    });

});