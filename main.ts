import { EVENT, fire } from './bus';
import './events';

TestTypescript = LibStub<AceAddonLib>('AceAddon-3.0').NewAddon(
    'TestTypescript',
    'AceConsole-3.0',
);

TestTypescript.OnInitialize = function OnInitialize() {
    fire(EVENT.INITIALIZED, 'World');
};
