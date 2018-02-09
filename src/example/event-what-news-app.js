import DocumentChannelFactory from "../communication-api/document-channel-factory";

export default class EventWhatNewsApp {

    load() {
        console.log('what news loaded');
        let rmeChannel = new DocumentChannelFactory().getChannel('rme');

        rmeChannel.getSubject('loaded').then(rmeLoadedSubject => {
            rmeLoadedSubject.subscribe(() => console.log('Start tour '));
        });
    }
}
