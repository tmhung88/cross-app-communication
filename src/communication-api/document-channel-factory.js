import Channel from "./channel";
import ChannelFactory from "./channel-factory";

export default class DocumentChannelFactory extends ChannelFactory {
    constructor() {
        if (!document.channels) {
            document.channels = {};
        }
        super(document.channels)
    }
}