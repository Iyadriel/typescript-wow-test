import { debug } from "./logger";

enum EVENT {
    // System
    INITIALIZED = "INITIALIZED",
}

type EventCallback = (...args: any[]) => any;

const listeners: Record<string, EventCallback[]> = {}

function addListener(event: EVENT, callback: EventCallback): void {
    if (!listeners[event]) {
        listeners[event] = []
    }
    listeners[event].push(callback)
}

function fire(event: EVENT, ...args: any[]): void {
    debug("[bus]", event, ...args);
    if (!listeners[event]) return;

    listeners[event].forEach((callback) => {
        callback(...args);
    })
}

export {
    EVENT,
    addListener,
    fire,
}