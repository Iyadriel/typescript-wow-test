import { addListener, EVENT } from './bus';

declare let TestTypescript: AceAddon;

addListener(EVENT.INITIALIZED, (who) => {
    TestTypescript.Print(`Hello ${who}!`);
});
