import { EVENT, fire } from './bus';
import './events';

const TestTypescript = LibStub<AceAddonLib>('AceAddon-3.0').NewAddon(
    'TestTypescript',
    'AceConsole-3.0',
);

TestTypescript.OnInitialize = function OnInitialize() {
    fire(EVENT.INITIALIZED, 'World');
};

_G.TestTypescript = TestTypescript;

export default TestTypescript;
