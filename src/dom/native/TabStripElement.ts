import { ViewNode, logger as log } from "../basicdom";
import { TabStrip } from 'tns-core-modules/ui/tab-navigation-base/tab-strip';
import { TabStripItem } from 'tns-core-modules/ui/tab-navigation-base/tab-strip-item';
import NativeViewElementNode from "./NativeViewElementNode";

export default class TabStripElement extends NativeViewElementNode<TabStrip> {

    constructor() {
        super("TabStrip", TabStrip);
    }

    get nativeView(): TabStrip {
        return super.nativeView as TabStrip
    }

    set nativeView(view: TabStrip) {
        super.nativeView = view
    }

    onInsertedChild(childNode: ViewNode, index: number) {
        try {
            if (childNode instanceof NativeViewElementNode && childNode.nativeView instanceof TabStripItem) {
                log.debug(`adding tab strip item ${childNode.nativeView.title}`);
                const items = this.nativeView.items || [];
                //    this.nativeView.items = [];
                this.nativeView.items = items.concat([childNode.nativeView]);
            }
        } catch (e) {
            console.error(e);
        }
    }

    onRemovedChild(childNode: ViewNode) {
        try {
            if (childNode instanceof NativeViewElementNode && childNode.nativeView instanceof TabStripItem) {
                log.debug(`removing tab strip item ${childNode.nativeView.title}`);
                let items = (this.nativeView.items || []).filter(i => i != childNode.nativeView);
                //  this.nativeView.items = [];
                this.nativeView.items = items;
            }
        } catch (e) {
            console.error(e);
        }
    }

}
