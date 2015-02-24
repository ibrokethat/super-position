import koa from 'koa';
import serve from 'koa-static';


let app = koa();

app.use(serve('.'));

app.listen(8888);

console.log('listening on port 8888');