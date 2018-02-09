import Channel from "./channel";

export default class ChannelFactory {
    constructor(repo) {
        this.repo = repo;
    }

    getChannel(channelName) {
        if (!this.hasChannel(channelName)) {
            this.repo[channelName] = new Channel();
        }
        return this.repo[channelName];
    }

    hasChannel(channelName) {
        return !!this.repo[channelName];
    }

}