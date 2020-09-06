"use strict";
/*
 * Created with @iobroker/create-adapter v1.26.3
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");
let adapter;
/**
 * Starts the adapter instance
 */
function startAdapter(options = {}) {
    // Create the adapter and define its methods
    return adapter = utils.adapter(Object.assign(Object.assign({}, options), { 
        // custom options
        name: 'vis-advanced-controls', 
        // The ready callback is called when databases are connected and adapter received configuration.
        // start here!
        ready: main, 
        // is called when adapter shuts down - callback has to be called under any circumstances!
        unload: (callback) => {
            try {
                // Here you must clear all timeouts or intervals that may still be active
                // clearTimeout(timeout1);
                // clearTimeout(timeout2);
                // ...
                // clearInterval(interval1);
                callback();
            }
            catch (e) {
                callback();
            }
        }, 
        // If you need to react to object changes, uncomment the following method.
        // You also need to subscribe to the objects with `adapter.subscribeObjects`, similar to `adapter.subscribeStates`.
        // objectChange: (id, obj) => {
        //     if (obj) {
        //         // The object was changed
        //         adapter.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
        //     } else {
        //         // The object was deleted
        //         adapter.log.info(`object ${id} deleted`);
        //     }
        // },
        // is called if a subscribed state changes
        stateChange: (id, state) => {
            if (state) {
                // The state was changed
                adapter.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
            }
            else {
                // The state was deleted
                adapter.log.info(`state ${id} deleted`);
            }
        } }));
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // The adapters config (in the instance object everything under the attribute "native") is accessible via
        // adapter.config:
        adapter.log.info('config option1: ' + adapter.config.option1);
        adapter.log.info('config option2: ' + adapter.config.option2);
        /*
            For every state in the system there has to be also an object of type state
            Here a simple template for a boolean variable named "testVariable"
            Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
        */
        yield adapter.setObjectNotExistsAsync('testVariable', {
            type: 'state',
            common: {
                name: 'testVariable',
                type: 'boolean',
                role: 'indicator',
                read: true,
                write: true,
            },
            native: {},
        });
        // In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
        adapter.subscribeStates('testVariable');
        // You can also add a subscription for multiple states. The following line watches all states starting with "lights."
        // adapter.subscribeStates('lights.*');
        // Or, if you really must, you can also watch all states. Don't do this if you don't need to. Otherwise this will cause a lot of unnecessary load on the system:
        // adapter.subscribeStates('*');
        /*
            setState examples
            you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
        */
        // the variable testVariable is set to true as command (ack=false)
        yield adapter.setStateAsync('testVariable', true);
        // same thing, but the value is flagged "ack"
        // ack should be always set to true if the value is received from or acknowledged from the target system
        yield adapter.setStateAsync('testVariable', { val: true, ack: true });
        // same thing, but the state is deleted after 30s (getState will return null afterwards)
        yield adapter.setStateAsync('testVariable', { val: true, ack: true, expire: 30 });
        // examples for the checkPassword/checkGroup functions
        adapter.checkPassword('admin', 'iobroker', (res) => {
            adapter.log.info('check user admin pw iobroker: ' + res);
        });
        adapter.checkGroup('admin', 'admin', (res) => {
            adapter.log.info('check group user admin group admin: ' + res);
        });
    });
}
if (module.parent) {
    // Export startAdapter in compact mode
    module.exports = startAdapter;
}
else {
    // otherwise start the instance directly
    startAdapter();
}
