import co from 'co';
import Router from 'koa-router';

let router = new Router();

router.get('/super/:id', function* (next) {

  console.log(this.params.id);

});


window.addEventListener('click', e => {

  let href = e.target.getAttribute('href');

  if (href) {

    let ctx = {
      method: 'GET',
      path: href
    };

    window.history.pushState(ctx, "", href);

    dispatch(ctx);

    e.preventDefault();

  }

});

window.addEventListener('popstate', e => {

  dispatch(e.state);

});


function dispatch (ctx) {

  let routes = router.middleware();

  co(function* () {

    return yield routes.call(ctx);

  }).then(() => {}, console.error.bind(console));
}

