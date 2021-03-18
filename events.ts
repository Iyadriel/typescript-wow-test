import { addListener, EVENT } from './bus';

addListener(EVENT.INITIALIZED, (who) => {
    TestTypescript.Print(`Hello ${who}!`);
});
