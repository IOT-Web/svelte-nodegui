// import { ElementNode, logger as log } from '../basicdom'
import { NSVElement, NSVNodeTypes } from "../nativescript-vue-next/runtime/nodes";
import { log } from "../shared/Logger";
// import { StyleScope } from '@nativescript/core/ui/styling/style-scope'
// import { Frame } from '@nativescript/core'

class StyleSheet {
    _rules: string[] = [];

    // The css rules generated by svelte have a keyframe every 16 milliseconds and are quite slow to create and run
    // this is here to support the simple and short ones, but ideally we would promote our own transitions in svelte-native/transitions
    // which would delegate to the more direct nativescript way of working.

    deleteRule(index: number) {
        console.log(`[StyleSheet] deleteRule ${index}`);
        /* TODO: implement for NodeGUI */
        // let removed = this._rules.splice(index, 1);
        // for (let r in removed) {
        //     log.debug(() => `removing transition rule ${r}`);
        //     // Turns out nativescript doesn't support "removing" css.
        //     // this is pretty horrible but better than a memory leak. 
        //     // since this code is called mainly for keyframes, and keyframes don't add new selectors (they just end up in _keyframes)
        //     // we can almost remove the rules ourselves.
        //     if (r.startsWith('@keyframes')) {
        //         const name = r.split(" ")[1];
        //         let frame: Frame = Frame.topmost();
        //         if (frame && (frame as any)._styleScope) {
        //             let scope = (frame as any)._styleScope as StyleScope;
        //             delete scope._keyframes[name]
        //             scope._css = scope._css.replace(r, "");
        //         }
        //     }
        // }
    }

    insertRule(rule: string, index: number = 0) {
        console.log(`[StyleSheet] insertRule(\`${rule}\`, ${index})`);
        // log.debug(() => `Adding transition rule ${rule}`);
        // log(`Adding transition rule ${rule}`);

        /* TODO: implement for NodeGUI */
        // let frame = Frame.topmost();
        // frame.addCss(rule);
        // this._rules.splice(index, 0, rule);
    }

    get cssRules(): any {
        return this._rules;
    }
}

export default class StyleElement extends NSVElement {
    _sheet: StyleSheet;

    constructor() {
        super("style")
        this._sheet = new StyleSheet();
        console.log(`[StyleElement] constructor!`);
    }

    get sheet(): StyleSheet {
        return this._sheet;
    }

}
