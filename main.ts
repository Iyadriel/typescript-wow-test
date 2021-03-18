import { EVENT, fire } from "./bus";
import "./events";

declare let TestTypescript: AceAddon;

TestTypescript = LibStub<AceAddonLib>("AceAddon-3.0").NewAddon("TestTypescript", "AceConsole-3.0")

TestTypescript.OnInitialize = function () {
    fire(EVENT.INITIALIZED, "World")
}

export default TestTypescript;