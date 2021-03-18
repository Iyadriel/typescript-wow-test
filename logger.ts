import { ChatFrame } from "@wartoshika/wow-declarations";

declare const DEFAULT_CHAT_FRAME: ChatFrame;
declare let TestTypescript: AceAddon;

// TODO pick up on chat frames being added/removed
function findDebugFrame(): ChatFrame | void {
    for (let i = 1; i < NUM_CHAT_WINDOWS; i++) {
        const chatFrame = _G[`ChatFrame${i}`]
        if (chatFrame.name === 'Debug') {
            return chatFrame
        }
    }
}

const debugFrame = findDebugFrame() || DEFAULT_CHAT_FRAME

function debug(...args: any[]): void {
    TestTypescript.Print(debugFrame, ...args)
}

export {
    debug
};