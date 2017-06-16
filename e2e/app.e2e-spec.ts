import { TestingPage } from './app.po';

describe('testing App', () => {
  let page: TestingPage;

  beforeEach(() => {
    page = new TestingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
