import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';

chai.use(chaiHttp);
describe('Books controller Class', () => {

    it('should GET a list of books', () => {
        chai.request('http://localhost:5000')
            .get('/api/books/space')
            .end( (err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array'); 
            })
    });

});